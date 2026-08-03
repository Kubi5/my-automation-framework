import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPage';

test.describe('Conduit - Register Tests', () => {
  let registerPage: RegisterPage;

  test.beforeEach(async ({ page }) => {
    registerPage = new RegisterPage(page);
    await registerPage.goto();
  });

  test('should register successfully with valid credentials', async ({ page }) => {
  await registerPage.register('test_user', 'test@op.pl', 'Haslo123');
    //await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  }); 
});