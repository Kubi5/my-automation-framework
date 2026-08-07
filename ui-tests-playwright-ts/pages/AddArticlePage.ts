import { Page, Locator } from '@playwright/test';

export class AddArticlePage {
    readonly page: Page;
    readonly articleTitleInput: Locator;
    readonly articleDescriptionInput: Locator;
    readonly articleTextInput: Locator;
    readonly articleTagsInput: Locator;
    readonly publishArticleButton: Locator;

    constructor(page: Page){
        this.page = page,
        this.articleTitleInput = page.locator('input[formcontrolname="title"]');
        this.articleDescriptionInput = page.locator('input[formcontrolname="description"]')
        this.articleTextInput = page.locator('textarea[formcontrolname="body"]');
        this.articleTagsInput = page.locator('input[placeholder="Enter tags"]');
        this.publishArticleButton = page.locator('button[type="button"]');
    }

    async addArticle(title: string, description: string, articleText: string, tags: string){
        await this.articleTitleInput.fill(title);
        await this.articleDescriptionInput.fill(description);
        await this.articleTextInput.fill(articleText);
        await this.articleTagsInput.fill(tags);
        await this.publishArticleButton.click();
    }
}