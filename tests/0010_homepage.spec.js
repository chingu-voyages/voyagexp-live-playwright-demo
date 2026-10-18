import { test, expect } from '@playwright/test'

test.describe('Test basic page navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  //--------------------------------------------------------------------------
  // Tests
  //--------------------------------------------------------------------------

  test('0100:01-should have the correct title', async ({ page }) => {
    await expect(page).toHaveTitle('VoyageXP Live - Playwright Demo')
  })

  test('0100:02-should display the question form', async ({ page }) => {
    await expect(page.getByLabel("What's your question?")).toBeVisible()
    await expect(page.getByRole('button', { name: 'Reset' })).toBeVisible()
    await expect(page.getByRole('button', { name: 'Submit' })).toBeVisible()
  })

  test('0100:03-should display an empty results section', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Results:' })).toBeVisible()
    await expect(page.locator('main p')).toHaveCount(0)
  })
})
