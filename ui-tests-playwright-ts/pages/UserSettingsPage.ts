import { Page, Locator } from '@playwright/test';

export class UserSettingsPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly updateSettingsButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.usernameInput = page.getByRole('textbox', { name: 'Username' });
        this.updateSettingsButton = page.getByRole('button', { name: 'Update Settings'})
    }

    async updateUsername(newUsername: string){
        await this.usernameInput.fill(newUsername);
        await this.updateSettingsButton.click();
    }

    async goto(){
        await this.page.goto('https://demo.realworld.show/settings');
    }
}