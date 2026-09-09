import { Page, Locator, expect } from '@playwright/test';

export class NavbarComponent {
    readonly page: Page;
    readonly navbar: Locator;

    readonly signInButton: Locator;
    readonly signUpButton: Locator;

    readonly userNameLink: Locator;
    readonly newArticleButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.navbar = page.locator('.navbar-nav');

        this.signInButton = page.getByRole('link', { name : "Sign in"});
        this.signUpButton = page.getByRole('link', { name : "Sign up"});

        this.userNameLink = this.navbar.locator('a[href^="/profile/"]');
        this.newArticleButton = page.getByRole('link', { name : "New Article"});
    }

    async goToLoginPage(){
        await this.signInButton.click();
    }

    async goToRegisterPage(){
        await this.signUpButton.click();
    }

    async gotoAddArticlePage(){
        await expect(this.userNameLink).toBeVisible(); 
        await this.newArticleButton.click();
    }

}