import { test, expect } from "@playwright/test";

test("bấm một lần thì bộ đếm phải bằng 2 (sai cố ý)", async ({ page }) => {
  await page.goto("/");
  const button = page.getByRole("button", { name: /Count is/ });
  await button.click();
  await expect(button).toHaveText("Count is 2");
});
