import { test as base , expect } from '@playwright/test';
import { AddArticlePage } from '../pages/AddArticlePage';
import { MainLoggedInPage } from '../pages/MainLoggedInPage';
import { NavbarComponent } from '../pages/NavbarComponent';
import { RegisterPage } from '../pages/RegisterPage';
import { LoginPage } from '../pages/LoginPage';

type UserCredentials = {
    username: string;
    userEmail: string;
    userPassword: string;
}

type MyFixtures = {
    addArticlePage: AddArticlePage;
    mainLoggedInPage: MainLoggedInPage;
    navbarComponent: NavbarComponent;
    registerPage: RegisterPage;
    loginPage: LoginPage;
    registeredUser: UserCredentials;
}

export const test = base.extend<MyFixtures>({
   
    addArticlePage: async ({page}, use) => {
        const addArticlePage = new AddArticlePage(page);
        await use(addArticlePage);
    },

    mainLoggedInPage: async ({ page }, use) => {
        const mainLoggedInPage = new MainLoggedInPage(page);
        await mainLoggedInPage.goto();
        await use(mainLoggedInPage);
    },

    navbarComponent: async ({ page }, use) => {
        const navbarComponent = new NavbarComponent(page);
        await use(navbarComponent);
    },

    registerPage: async ({ page }, use) => {
        const registerPage = new RegisterPage(page);
        await registerPage.goto();
        await use(registerPage);
    },

    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await use(loginPage);
    },

    registeredUser: async ({ request }, use) => {
        const randomId = Date.now();
        const userEmail = `testuser_${randomId}@example.com`;
        const username = `testuser_${randomId}`;
        const userPassword = `${randomId}`;
        
        const response = await request.post('https://api.realworld.show/api/users', {
            data: {
                user: { 
                    username: username,
                    email: userEmail,
                    password: userPassword
                }
            }
        });

        expect(response.status()).toBe(201);
        await use({ username, userEmail, userPassword});
    },

})

export { expect } from '@playwright/test'