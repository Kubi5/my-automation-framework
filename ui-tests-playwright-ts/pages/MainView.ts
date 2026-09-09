import { Page, Locator, expect } from '@playwright/test';

export class MainView {
    readonly page: Page;
    readonly appArticleList: Locator;
    
    constructor(page: Page){
        this.page = page;
        this.appArticleList = page.locator('app-article-list app-article-preview');
    }
    
    async goto() {
        await this.page.goto('https://demo.realworld.show');
    }
}