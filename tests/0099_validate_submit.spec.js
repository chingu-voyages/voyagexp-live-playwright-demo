// @ts-check
const { test, expect } = require('@playwright/test')

test.beforeEach(async ({ page }) => {
  await page.goto('/')
});

test('validate submit button generates results', async ({ page }) => {
  const question = page.getByLabel("What's your question?")
  await question.fill('When should I plant a tree in Zone 5 in the U.S.?')
  await expect(question).not.toBeEmpty()
  await page.getByRole('button', { name: 'Submit' }).click()

  const answer = await page.locator('p#prompt-result')
  await expect(answer).not.toBeEmpty()
})
