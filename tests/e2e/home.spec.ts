import AxeBuilder from "@axe-core/playwright"
import { expect, test } from "@playwright/test"

const projectUrls = [
  "https://coastalcreationsstudio.com",
  "https://clarity-edit.io",
  "https://coastal-properties.vercel.app",
  "https://theresa-kennish.vercel.app",
]

test.beforeEach(async ({ page }) => {
  await page.goto("/")
})

test("renders the complete light homepage without overflow", async ({
  page,
}) => {
  await expect(page.locator("h1")).toHaveCount(1)
  await expect(
    page.getByRole("heading", {
      level: 1,
      name: /Clear digital solutions for the way your business really works/i,
    })
  ).toBeVisible()

  for (const id of ["services", "work", "process", "about", "contact"]) {
    await expect(page.locator(`#${id}`)).toBeAttached()
  }

  await expect(page.locator("#service-chooser")).toHaveCount(0)
  await expect(page.locator("#faq")).toHaveCount(0)
  await expect(
    page.getByText("Ways to work together", { exact: true })
  ).toHaveCount(0)

  const dimensions = await page.evaluate(() => ({
    viewport: document.documentElement.clientWidth,
    content: document.documentElement.scrollWidth,
  }))
  expect(dimensions.content).toBeLessThanOrEqual(dimensions.viewport)
})

test("contact uses the public info address", async ({ page }) => {
  await expect(
    page.getByRole("link", { name: "info@crystal-edge-digital.com" })
  ).toHaveAttribute("href", "mailto:info@crystal-edge-digital.com")
})

test("portfolio copy and cards use the compact presentation", async ({
  page,
}) => {
  await expect(
    page.getByRole("heading", { name: "Selected work & demos." })
  ).toBeVisible()

  const card = page.getByRole("link", {
    name: "Visit Coastal Properties project",
  })
  const cardBox = await card.locator('[data-slot="card"]').boundingBox()
  const projectLinkBox = await card.getByText("Visit project").boundingBox()
  const bottomGap =
    (cardBox?.y ?? 0) +
    (cardBox?.height ?? 0) -
    ((projectLinkBox?.y ?? 0) + (projectLinkBox?.height ?? 0))
  expect(bottomGap).toBeLessThan(60)
})

test("footer uses brand social icons without the old tagline", async ({
  page,
}) => {
  const footer = page.locator("footer")

  await expect(footer.locator('[data-brand-icon="linkedin"]')).toHaveCount(1)
  await expect(footer.locator('[data-brand-icon="github"]')).toHaveCount(1)
  await expect(
    footer.getByText("Clear technology, practical next steps.")
  ).toHaveCount(0)
})

test("primary company logo renders once in the hero and founder portrait is absent", async ({
  page,
}) => {
  const artwork = page
    .locator("#top")
    .getByAltText(
      "Crystal Edge Digital editorial wordmark with etched crystal illustration and fine directional lines"
    )
  await expect(artwork).toHaveCount(1)
  await expect(artwork).toBeVisible()
  await expect
    .poll(() =>
      artwork.evaluate((image: HTMLImageElement) => image.naturalWidth)
    )
    .toBeGreaterThan(0)
  await expect(
    page.getByAltText(
      "Crystal Edge Digital editorial wordmark with etched crystal illustration and fine directional lines"
    )
  ).toHaveCount(1)

  await expect(page.locator('img[src*="founder-photo"]')).toHaveCount(0)
  await expect(
    page.getByText("Benjamin Corbett", { exact: true })
  ).toBeVisible()
})

test("navigation uses the responsive editorial identity", async ({
  page,
}, testInfo) => {
  const primaryNavigation = page.getByRole("navigation", { name: "Primary" })
  const identityLink = primaryNavigation.getByRole("link", {
    name: "Crystal Edge Digital",
  })

  await expect(identityLink).toBeVisible()
  await expect(
    primaryNavigation.locator('img[src*="ced-wordmark.svg"]')
  ).toHaveCount(1)
  await expect(
    primaryNavigation.locator('img[src*="ced-compact-mark.png"]')
  ).toHaveCount(1)
  await expect(primaryNavigation.locator('img[src*="ced-logo"]')).toHaveCount(0)

  const mobileCompanyName = primaryNavigation.getByText(
    "Crystal Edge Digital.",
    { exact: true }
  )
  if (testInfo.project.name === "mobile-375") {
    await expect(mobileCompanyName).toBeVisible()
  } else {
    await expect(mobileCompanyName).toBeHidden()
  }
})

test("project links preserve their verified destinations and safety attributes", async ({
  page,
}) => {
  for (const href of projectUrls) {
    const link = page.locator(`a[href="${href}"]`)
    await expect(link).toHaveAttribute("target", "_blank")
    await expect(link).toHaveAttribute("rel", "noopener noreferrer")
  }
})

test("keyboard focus begins with the skip link", async ({ page }) => {
  await page.keyboard.press("Tab")
  await expect(
    page.getByRole("link", { name: "Skip to main content" })
  ).toBeFocused()
})

test("mobile navigation is named and closes after navigation", async ({
  page,
}, testInfo) => {
  test.skip(
    testInfo.project.name === "desktop-1440",
    "Compact navigation check"
  )

  const trigger = page.getByRole("button", { name: "Open navigation menu" })
  await trigger.click()
  await expect(page.getByRole("dialog")).toBeVisible()
  await page.getByRole("dialog").getByRole("link", { name: "Process" }).click()
  await expect(page.getByRole("dialog")).toBeHidden()
})

test("reduced motion disables smooth scrolling", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" })
  await page.reload()
  const scrollBehavior = await page
    .locator("html")
    .evaluate((element) => getComputedStyle(element).scrollBehavior)
  expect(scrollBehavior).toBe("auto")
})

test("has no serious or critical axe violations", async ({ page }) => {
  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
    .analyze()

  const highImpact = results.violations.filter(
    (violation) =>
      violation.impact === "serious" || violation.impact === "critical"
  )
  expect(highImpact).toEqual([])
})
