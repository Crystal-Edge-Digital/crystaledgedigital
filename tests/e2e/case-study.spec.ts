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
    page.getByRole("heading", { level: 1, name: /learns from the documents/i })
  ).toBeVisible()
  for (const step of [
    "Ask before anything is uploaded",
    "The manager drops in a document",
    "The same question, now answered",
    "Add more, and answers combine",
  ]) {
    await expect(page.getByRole("heading", { name: step })).toBeVisible()
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
            [...document.images].filter((i) => !i.complete || !i.naturalWidth)
              .length
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
  await expect(page.getByRole("button", { name: "Replay" })).toBeHidden()
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
