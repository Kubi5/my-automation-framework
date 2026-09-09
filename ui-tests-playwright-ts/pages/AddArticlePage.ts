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
        this.articleTitleInput = page.getByRole('textbox', { name : "title"} );
        this.articleDescriptionInput = page.getByRole('textbox', { name: /what's this article about/i })
        this.articleTextInput = page.getByRole('textbox', { name : "Write your article (in markdown)"} );
        this.articleTagsInput = page.getByPlaceholder("Enter tags");
        this.publishArticleButton = page.getByRole('button', { name : "Publish Article"} );
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