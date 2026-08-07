import { test as setup, expect } from '@playwright/test';

const authFile = '.auth/user.json';

setup('register and save session', async ({ request, page }) => {
  const randomId = Date.now();

  const response = await request.post('https://api.realworld.show/api/users', {
    data: {
      user: {
        username: `user_${randomId}`,
        email: `user_${randomId}@example.com`,
        password: 'TestPassword123!',
      },
    },
  });
  expect(response.status()).toBe(201);

  const body = await response.json();
  await page.goto('https://demo.realworld.show/');
  await page.evaluate((token) => {
    localStorage.setItem('jwtToken', token);
  }, body.user.token);

  await page.context().storageState({ path: authFile });
});
