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
    this.usernameInput = page.getByRole("textbox", { name : "username"});
    this.emailInput = page.getByRole("textbox", { name : "email"});
    this.passwordInput = page.getByRole("textbox", { name : "password"});
    this.confirmButton = page.getByRole("button", { name : "Sign up"});
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