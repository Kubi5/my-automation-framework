import { Page, Locator, expect } from '@playwright/test';

export class ArticleDetailsPage {
    readonly page;
    readonly commentBoxInput;
    readonly postCommentButton;

    constructor(page: Page){
        this.page = page;
        this.commentBoxInput = page.locator('.card-block .form-control');
        this.postCommentButton = page.locator('button[type="submit"]');
    }

    async addComment(commentText: string){
        await this.commentBoxInput.fill(commentText);
        await this.postCommentButton.click();
    }

    getCommentLocator(commentText: string): Locator {
        return this.page.locator(`app-article-comment:has-text("${commentText}")`);
    }

    async goto(slug: string){
        await this.page.goto("https://demo.realworld.show/article/" + slug);
    }
}