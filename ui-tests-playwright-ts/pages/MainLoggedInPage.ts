import { Page, Locator, expect } from '@playwright/test';

export class MainLoggedInPage {
    readonly page: Page;
    readonly goToArticleCreationButton: Locator;
    
    constructor(page: Page){
        this.page = page;
        this.goToArticleCreationButton = page.locator('a[href="/editor"]');
    }
    
    async goto() {
        await this.page.goto('https://demo.realworld.show');
        await expect(this.goToArticleCreationButton).toBeVisible();
    }

    async goToAddArticlePage(){
        await this.goToArticleCreationButton.click();
    }
}