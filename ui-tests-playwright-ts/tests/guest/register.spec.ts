import { test, expect } from '../../fixtures/page-object.fixture';
import { AccountUtils } from '../../utils/AccountUtils';


test.describe('Conduit - Register Tests', () => {

  test('should register successfully with valid credentials', async ({ registerPage }) => {
  const randomUserCredentials = AccountUtils.generateRandomUserData();  
  await registerPage.register(randomUserCredentials);
  await expect(registerPage.page).toHaveURL('https://demo.realworld.show/');
  }); 

  test('should have correct new username on the main page navbar after registration', async ({registerPage, navbarComponent}) => {
  const randomUserCredentials = AccountUtils.generateRandomUserData();   
  await registerPage.register(randomUserCredentials);
  await expect(registerPage.page).toHaveURL('https://demo.realworld.show/');
  await expect(navbarComponent.userNameLink).toHaveText(randomUserCredentials.username);
  })
});