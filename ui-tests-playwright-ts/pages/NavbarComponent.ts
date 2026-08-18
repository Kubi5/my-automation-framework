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

        this.signInButton = page.locator('a[href="/login"]');
        this.signUpButton = page.locator('a[href="/register"]');

        this.userNameLink = this.navbar.locator('a[href^="/profile/"]');
        this.newArticleButton = page.locator('a[href="/editor"]');
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