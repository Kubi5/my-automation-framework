import { Page, Locator } from '@playwright/test';

export class NavbarComponent {
    readonly page: Page;
    readonly navbar: Locator;
    readonly userNameLink: Locator;

    constructor(page: Page){
        this.page = page;
        this.navbar = page.locator('.navbar-nav');
        this.userNameLink = this.navbar.locator('a[href^="/profile/"]');
    }


}