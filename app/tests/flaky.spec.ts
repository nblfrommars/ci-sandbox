import { test, expect } from "@playwright/test";

test("bộ đếm sau khi bấm (flaky mô phỏng)", async ({ page }, testInfo) => {
  await page.goto("/");
  const button = page.getByRole("button", { name: /Count is/ });
  await button.click();
  const expected = testInfo.retry === 0 ? "Count is 2" : "Count is 1";
  await expect(button).toHaveText(expected);
});
