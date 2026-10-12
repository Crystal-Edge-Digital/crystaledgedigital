import { expect, test } from "@playwright/test"

test("contact form shows success and resets after a successful send", async ({
  page,
}) => {
  // Mocked: never hit Resend from tests.
  await page.route("**/api/contact", (route) =>
    route.fulfill({ status: 200, json: { ok: true } })
  )
  await page.goto("/#contact")

  await page.getByLabel("Name").fill("Test Person")
  await page.getByLabel("Email").fill("test@example.com")
  await page.getByLabel("Short project description").fill("I need help")
  await page.getByRole("button", { name: "Send message" }).click()

  await expect(page.getByRole("status")).toContainText("Message sent")
  await expect(page.getByText("Something went wrong")).toHaveCount(0)
  await expect(page.getByLabel("Name")).toHaveValue("")
})
