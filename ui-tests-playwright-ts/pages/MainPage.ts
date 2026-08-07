import { Page, Locator } from '@playwright/test';

export class MainPage {
    readonly page: Page;
    readonly newArticleButton: Locator;
    
    constructor(page: Page){
        this.page = page;
        this.newArticleButton = page.locator('a[routerlink="/editor"]');
    }
    
    async goto() {
        await this.page.goto('https://demo.realworld.show/');
    }

    async goToAddArticlePage(){
        this.newArticleButton.click();
    }
}