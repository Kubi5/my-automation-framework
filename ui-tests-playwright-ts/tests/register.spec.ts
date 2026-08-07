import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPage';
import { NavbarComponent } from '../pages/NavbarComponent';

let username = 'test_user';
let email = 'test@op.pl';
let password = 'Haslo123';

// test.use({ storageState: { cookies: [], origins: [] } });

test.describe('Conduit - Register Tests', () => {
  let registerPage: RegisterPage;
  let navbarComponent: NavbarComponent

  test.beforeEach(async ({ page }) => {
    registerPage = new RegisterPage(page);
    navbarComponent = new NavbarComponent(page);
    await registerPage.goto();
  });

  test('should register successfully with valid credentials', async ({ page }) => {
  await registerPage.register(username, email, password);
  await expect(page).toHaveURL('https://demo.realworld.show/');
  }); 

  test('should have correct new username on the main page navbar after registration', async ({page}) => {
  await registerPage.register(username, email, password);
  await expect(page).toHaveURL('https://demo.realworld.show/');
  await expect(navbarComponent.userNameLink).toHaveText(username);
  })
});