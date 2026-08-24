import { test, expect } from '../../fixtures/page-object.fixture';
import { generateRandomUserData } from '../../utils/AccountUtils';


test.describe('Conduit - Register Tests', () => {

  test('should navigate properly from main view to register page', async ({ registerPage, navbarComponent, mainView }) => {
    await mainView.goto();
    await navbarComponent.goToRegisterPage();

    await expect(registerPage.page).toHaveURL('https://demo.realworld.show/register');
  }); 

  test('should register successfully with valid credentials', async ({ registerPage }) => {
    const randomUserCredentials = generateRandomUserData(); 

    await registerPage.register(randomUserCredentials);

    await expect(registerPage.page).toHaveURL('https://demo.realworld.show/');
  }); 

  test('should have correct new username on the main page navbar after registration', async ({ registerPage, navbarComponent }) => {
    const randomUserCredentials = generateRandomUserData();  

    await registerPage.register(randomUserCredentials);

    await expect(registerPage.page).toHaveURL('https://demo.realworld.show/');
    await expect(navbarComponent.userNameLink).toHaveText(randomUserCredentials.username);
  })
});