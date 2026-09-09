import { test as setup, expect, APIRequestContext, Page } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

const AUTH_FILE = '.auth/user.json';
const USER_INFO_FILE = '.auth/user-info.json';


setup('register and save session', async ({ request, page }) => {
  const user = await registerUserViaApi(request);

  await saveStorageState(page, user.token);
  saveUserInfoFile(user);
});


async function registerUserViaApi(request: APIRequestContext) {
  const randomId = Date.now();
  const payload = {
    username: `user_${randomId}`,
    email: `user_${randomId}@example.com`,
    password: 'TestPassword123!',
  };

  const response = await request.post('https://api.realworld.show/api/users', {
    data: { user: payload },
  });
  expect(response.status()).toBe(201);

  const body = await response.json();
  return body.user;
}

async function saveStorageState(page: Page, token: string) {
  await page.goto('https://demo.realworld.show/');
  await page.evaluate((t) => localStorage.setItem('jwtToken', t), token);
  await page.reload();
  await page.waitForLoadState('networkidle');

  await page.context().storageState({ path: AUTH_FILE });
}

function saveUserInfoFile(userData: Record<string, unknown>) {
  fs.mkdirSync(path.dirname(USER_INFO_FILE), { recursive: true });
  fs.writeFileSync(USER_INFO_FILE, JSON.stringify(userData, null, 2));
}
