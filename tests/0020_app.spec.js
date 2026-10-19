// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('shows the question form', async ({ page }) => {
  await expect(page).toHaveTitle('VoyageXP Live - Playwright Demo');
  await expect(page.getByLabel("What's your question?")).toBeVisible();
  await expect(page.getByRole('button', { name: 'Submit' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Results:' })).toBeVisible();
});

test('reset clears the question', async ({ page }) => {
  const question = page.getByLabel("What's your question?");

  await question.fill('When should I plant a tree?');
  await page.getByRole('button', { name: 'Reset' }).click();

  await expect(question).toHaveValue('');
});
