import { Page, Locator, expect } from '@playwright/test';
import { ArticleData } from '../utils/ArticleUtils';


export class AddArticlePage {
    readonly page: Page;
    readonly articleTitleInput: Locator;
    readonly articleDescriptionInput: Locator;
    readonly articleTextInput: Locator;
    readonly articleTagsInput: Locator;
    readonly publishArticleButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.articleTitleInput = page.locator('input[formcontrolname="title"]');
        this.articleDescriptionInput = page.locator('input[formcontrolname="description"]')
        this.articleTextInput = page.locator('textarea[formcontrolname="body"]');
        this.articleTagsInput = page.locator('input[placeholder="Enter tags"]');
        this.publishArticleButton = page.locator('button[type="button"]');
    }

    async addArticle(articleData: ArticleData){
        await this.articleTitleInput.fill(articleData.title);
        await this.articleDescriptionInput.fill(articleData.description);
        await this.articleTextInput.fill(articleData.body);
        await this.articleTagsInput.fill(articleData.tags);
        await this.publishArticleButton.click();
    }

    async goto() {
        await this.page.goto('https://demo.realworld.show/editor');
        await expect(this.articleTitleInput).toBeVisible();
    }
}