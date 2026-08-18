import { test as base } from '@playwright/test';
import { AccountUtils, UserCredentials } from '../utils/AccountUtils'
import { AddArticlePage } from '../pages/AddArticlePage';
import { MainView } from '../pages/MainView';
import { NavbarComponent } from '../pages/NavbarComponent';
import { RegisterPage } from '../pages/RegisterPage';
import { LoginPage } from '../pages/LoginPage';

type MyFixtures = {
    addArticlePage: AddArticlePage;
    mainView: MainView;
    navbarComponent: NavbarComponent;
    registerPage: RegisterPage;
    loginPage: LoginPage;
    registeredUser: UserCredentials;
}

export const test = base.extend<MyFixtures>({
   
    addArticlePage: async ({ page }, use) => {
        const addArticlePage = new AddArticlePage(page);
        await addArticlePage.goto();
        await use(addArticlePage);
    },

    mainView: async ({ page }, use) => {
        const mainView = new MainView(page);
        await use(mainView);
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
        const userCredentials = await AccountUtils.apiRegisterUser(request);
        await use(userCredentials);
    },

})

export { expect } from '@playwright/test'