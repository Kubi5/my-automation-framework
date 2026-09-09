import { Page, Locator } from '@playwright/test';

export class ProfilePage {
    readonly page: Page;
    readonly showFavArtButton: Locator;
    readonly editProfileButton: Locator;
    readonly usernameHeading: Locator;


    constructor(page: Page){
        this.page = page;
        this.showFavArtButton = page.locator('a:has-text("Favorited Posts")');
        this.editProfileButton = page.getByRole('link', { name: 'Edit Profile Settings' })
        this.usernameHeading = page.getByRole('heading', { level: 4 });
    }

    async goto(username: string){
        await this.page.goto('https://demo.realworld.show/profile/' + username);
    }

    async gotoEditProfileSettings() {
        await this.editProfileButton.click();
    }

}