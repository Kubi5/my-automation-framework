import { test as base } from '@playwright/test';
import { apiRegisterUser } from '../api/AccountApi'
import { UserCredentials } from '../utils/AccountUtils';
import { AddArticlePage } from '../pages/AddArticlePage';
import { MainView } from '../pages/MainView';
import { NavbarComponent } from '../pages/NavbarComponent';
import { RegisterPage } from '../pages/RegisterPage';
import { LoginPage } from '../pages/LoginPage';
import { ArticleDetailsPage } from '../pages/ArticleDetailsPage';
import { createArticle } from '../api/ArticleApi';

type MyFixtures = {
    addArticlePage: AddArticlePage;
    mainView: MainView;
    navbarComponent: NavbarComponent;
    registerPage: RegisterPage;
    loginPage: LoginPage;
    registeredUser: UserCredentials;
    articleDetailsPage: ArticleDetailsPage;
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
        const userCredentials = await apiRegisterUser(request);
        await use(userCredentials);
    },

    articleDetailsPage: async ({ page, request }, use) => {
        const articleDetailsPage = new ArticleDetailsPage(page);
        const slug = await createArticle(request);
        await articleDetailsPage.goto(slug);  
        await use(articleDetailsPage);
    }

})

export { expect } from '@playwright/test'