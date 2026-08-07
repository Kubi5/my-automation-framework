import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { NavbarComponent } from '../pages/NavbarComponent';

test.describe('Conduit - Login Tests', () => {

  let loginPage: LoginPage;
  let navbarComponent: NavbarComponent;
  let username: string;
  let userEmail: string;
  let userPassword: string = "Test000!";

  test.use({ storageState: { cookies: [], origins: [] } });

  test.beforeEach(async ({ page, request }) => {
    loginPage = new LoginPage(page);
    navbarComponent = new NavbarComponent(page);

    const randomId = Date.now();
    userEmail = `testuser_${randomId}@example.com`;
    username = `testuser_${randomId}`;

    const dataBody = {
        user : {
             username: username,
             email: userEmail,
             password: userPassword
        }
    }

    const response = await request.post('https://api.realworld.show/api/users', {"data" : dataBody});
    expect(response.status()).toBe(201);

    await loginPage.goto();
  });


  test('should login successfully with valid credentials', async ({ page }) => {
        await loginPage.login(userEmail, userPassword);
        await expect(page).toHaveURL('https://demo.realworld.show/')
  }); 

  test('should have correct username on navbar after logging', async ({ page }) => {
        await loginPage.login(userEmail, userPassword);
        await expect(page).toHaveURL('https://demo.realworld.show/')
        await expect(navbarComponent.userNameLink).toHaveText(username);
  }); 
});
