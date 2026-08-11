import { test, expect } from '../../fixtures/page-object.fixture';


let username = 'test_user';
let email = 'test@op.pl';
let password = 'Haslo123';

test.describe('Conduit - Register Tests', () => {

  test('should register successfully with valid credentials', async ({ registerPage }) => {
  await registerPage.register(username, email, password);
  await expect(registerPage.page).toHaveURL('https://demo.realworld.show/');
  }); 

  test('should have correct new username on the main page navbar after registration', async ({registerPage, navbarComponent}) => {
  await registerPage.register(username, email, password);
  await expect(registerPage.page).toHaveURL('https://demo.realworld.show/');
  await expect(navbarComponent.userNameLink).toHaveText(username);
  })
});