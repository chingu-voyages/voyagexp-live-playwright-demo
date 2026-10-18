// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chrome',
      // Uses the locally installed Google Chrome. Playwright's bundled browsers
      // are not available for macOS 13, so we drive the system browser instead.
      use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    },
  ],
  // Once the React app has a dev server (e.g. Vite), uncomment this so
  // Playwright starts it before the tests and set baseURL above.
  // webServer: {
  //   command: 'npm run dev',
  //   url: 'http://localhost:5173',
  //   reuseExistingServer: !process.env.CI,
  // },
});
