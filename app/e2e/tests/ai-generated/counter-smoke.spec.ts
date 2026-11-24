import { test, expect } from '@playwright/test';

test('counter button is visible', async ({ page }) => {
  await page.goto('/');
  const counterButton = page.getByTestId('counter-button');
  await expect(counterButton).toBeVisible();
});