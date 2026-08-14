import { Page, Locator } from '@playwright/test';
import { UserCredentials } from '../utils/AccountUtils';

export class RegisterPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly confirmButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('input[name="username"]');
    this.emailInput = page.locator('input[name="email"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.confirmButton = page.locator('button[type="submit"]');
  }

  async goto() {
    await this.page.goto('https://demo.realworld.show/register');
  }

  async register(userCredentials: UserCredentials){
        await this.usernameInput.fill(userCredentials.username);
        await this.emailInput.fill(userCredentials.userEmail);
        await this.passwordInput.fill(userCredentials.userPassword);
        await this.confirmButton.click();
  }

}