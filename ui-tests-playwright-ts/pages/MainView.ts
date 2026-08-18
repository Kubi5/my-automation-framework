import { Page, Locator, expect } from '@playwright/test';

export class MainView {
    readonly page: Page;
    
    constructor(page: Page){
        this.page = page;
    }
    
    async goto() {
        await this.page.goto('https://demo.realworld.show');
    }
}