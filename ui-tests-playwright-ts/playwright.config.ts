import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  fullyParallel: false,
  reporter: [
    ['line'],
    ['allure-playwright', { outputFolder: 'allure-results' }]
  ],
  use: {
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'on',
  },

  
  projects: [
    {
      name: 'setup',
      testMatch: /.*\.setup\.ts/
    },
    {
      name: 'guest-tests',
      testDir: './tests/guest',
      use: { ...devices['Desktop Chrome'],
      },
    },
    {
      name: 'logged-in-tests',
      testDir: './tests/logged-in',
      use: { 
      ...devices['Desktop Chrome'],
      storageState: '.auth/user.json',
      },
      dependencies: ['setup'],
    }
  ],
});
