import { test, expect } from "@playwright/test";

test("hiển thị tiêu đề trang", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: "Get started" }),
  ).toBeVisible();
});

test("bấm nút thì bộ đếm tăng lên 1", async ({ page }) => {
  await page.goto("/");
  const button = page.getByRole("button", { name: /Count is/ });
  await button.click();
  await expect(button).toHaveText("Count is 1");
});
