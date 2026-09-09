import { Page, Locator } from '@playwright/test';

export class ArticleDetailsPage {
    readonly page: Page;
    readonly commentBoxInput: Locator;
    readonly postCommentButton: Locator;
    readonly appFavoriteTopButton: Locator;
    readonly banner: Locator;
    readonly articleTitle: Locator;

    constructor(page: Page){
        this.page = page;
        this.commentBoxInput = page.getByRole('textbox', { name: /write a comment/i });
        this.banner = page.locator('div.banner');
        this.postCommentButton = page.getByRole("button", { name: "Post Comment"} );
        this.appFavoriteTopButton = this.banner.locator('app-article-meta app-favorite-button');
        this.articleTitle = this.banner.getByRole('heading', { level: 1 })
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