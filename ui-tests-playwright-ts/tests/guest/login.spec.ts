import { test, expect } from '../../fixtures/page-object.fixture';

test.describe('Conduit - Login Tests', () => {

  test('should navigate from main viev to login page correctly', async ({ loginPage, navbarComponent, mainView }) => {
        await mainView.goto();
        
        await navbarComponent.goToLoginPage();

        await expect(loginPage.page).toHaveURL('https://demo.realworld.show/login')
  });   


  test('should login successfully with valid credentials', async ({ loginPage, registeredUser}) => {
        await loginPage.login(registeredUser.userEmail, registeredUser.userPassword);

        await expect(loginPage.page).toHaveURL('https://demo.realworld.show/')
  }); 

  test('should have correct username on navbar after logging', async ({ loginPage, registeredUser, navbarComponent}) => { 
        await loginPage.login(registeredUser.userEmail, registeredUser.userPassword);

        await expect(loginPage.page).toHaveURL('https://demo.realworld.show/')
        await expect(navbarComponent.userNameLink).toHaveText(registeredUser.username);
  }); 
});
