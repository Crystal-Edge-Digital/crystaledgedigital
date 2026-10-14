import AxeBuilder from "@axe-core/playwright"
import { expect, test } from "@playwright/test"

const PAGE = "/case-studies/coastal-properties"

test.beforeEach(async ({ page }) => {
  await page.goto(PAGE)
})

test("case study renders its story and never scrolls sideways", async ({
  page,
}) => {
  await expect(
    page.getByRole("heading", {
      level: 1,
      name: /retrieval-augmented chat agent built on amazon bedrock/i,
    })
  ).toBeVisible()
  for (const heading of [
    "Making property documents answerable.",
    "A serverless RAG pipeline on AWS.",
    "RAG in action.",
    "Before documents are uploaded",
    "An administrator adds a document",
    "After documents are uploaded",
    "Audience-aware retrieval.",
  ]) {
    await expect(page.getByRole("heading", { name: heading })).toBeVisible()
  }

  const dimensions = await page.evaluate(() => ({
    viewport: document.documentElement.clientWidth,
    content: document.documentElement.scrollWidth,
  }))
  expect(dimensions.content).toBeLessThanOrEqual(dimensions.viewport)
})

test("every screenshot and diagram on the page loads", async ({ page }) => {
  // Lazy images only load near the viewport, so scroll to the bottom first.
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 600) {
      window.scrollTo(0, y)
      await new Promise((resolve) => setTimeout(resolve, 80))
    }
  })
  await expect
    .poll(
      () =>
        page.evaluate(
          () =>
            [...document.images].filter(
              // Enlarged diagrams inside a closed viewer load only when it is opened.
              (i) =>
                !i.closest("dialog:not([open])") &&
                (!i.complete || !i.naturalWidth)
            ).length
        ),
      { timeout: 10_000 }
    )
    .toBe(0)
})

test("the animation shows its finished state when motion is reduced", async ({
  browser,
}) => {
  const context = await browser.newContext({ reducedMotion: "reduce" })
  const page = await context.newPage()
  await page.goto(PAGE)
  await expect(page.getByText("Any 2-bedrooms?")).toBeVisible()
  await expect(
    page.getByText("Unit 206 · $3,350 · available Nov 15")
  ).toBeVisible()
  await expect(
    page.getByRole("button", { name: /pause animation|play animation/i })
  ).toBeHidden()
  await context.close()
})

test("case study has no serious or critical axe violations", async ({
  page,
}) => {
  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
    .analyze()

  const highImpact = results.violations.filter(
    (violation) =>
      violation.impact === "serious" || violation.impact === "critical"
  )
  expect(highImpact).toEqual([])
})

test("the ingestion animation loops on its own and can be paused", async ({
  page,
}, testInfo) => {
  test.skip(
    testInfo.project.name !== "desktop-1440",
    "timing test: one viewport is enough"
  )
  test.setTimeout(45_000)

  const figure = page
    .locator("figure[data-state]")
    .filter({ hasText: /ingestion pipeline/i })
  await figure.scrollIntoViewIfNeeded()

  // Plays, holds the finished frame, then starts again without any click.
  await expect(figure).toHaveAttribute("data-state", "playing")
  await expect(figure).toHaveAttribute("data-state", "complete", {
    timeout: 10_000,
  })
  await expect(figure).toHaveAttribute("data-state", "playing", {
    timeout: 12_000,
  })

  // Pause freezes the finished frame; Play starts it again.
  await figure.getByRole("button", { name: "Pause animation" }).click()
  await expect(figure).toHaveAttribute("data-state", "complete")
  await page.waitForTimeout(3_500)
  await expect(figure).toHaveAttribute("data-state", "complete")
  await figure.getByRole("button", { name: "Play animation" }).click()
  await expect(figure).toHaveAttribute("data-state", "playing")
})

test("architecture diagrams open in an enlarged viewer that is easy to leave", async ({
  page,
}) => {
  const open = page.getByRole("button", {
    name: /Request path.*enlarged diagram/i,
  })
  const dialog = page.getByRole("dialog")
  await open.scrollIntoViewIfNeeded()

  // Opens enlarged, with the page behind it blurred rather than blacked out.
  await open.click()
  await expect(dialog).toBeVisible()
  const backdrop = await dialog.evaluate((el) =>
    getComputedStyle(el, "::backdrop").getPropertyValue("backdrop-filter")
  )
  expect(backdrop).toContain("blur")

  // 1. Escape closes it and returns focus to the diagram.
  await page.keyboard.press("Escape")
  await expect(dialog).toBeHidden()
  await expect(open).toBeFocused()

  // 2. The Close button closes it.
  await open.click()
  await dialog.getByRole("button", { name: "Close" }).click()
  await expect(dialog).toBeHidden()

  // 3. Clicking the blurred background closes it, and the page scrolls again.
  await open.click()
  await expect(dialog).toBeVisible()
  await page.mouse.click(4, 4)
  await expect(dialog).toBeHidden()
  await expect
    .poll(() => page.evaluate(() => document.body.style.overflow))
    .toBe("")
})
