import { test, expect } from '../../fixtures/page-object.fixture';
import { faker } from '@faker-js/faker';

test.describe('Conduit - user data edition tests', () => {

  test('should navigate from profile to user settings edit', async ({ profilePage }) => {
    await profilePage.gotoEditProfileSettings();

    await expect(profilePage.page).toHaveURL('https://demo.realworld.show/settings');
  }); 

  test('should modify user username', async ({ profilePage, userSettingsPage }) => {
    const newUsername = faker.word.words(1);

    await userSettingsPage.updateUsername(newUsername);

    await expect(userSettingsPage.page).toHaveURL('https://demo.realworld.show/profile/' + newUsername);
    await expect(profilePage.usernameHeading).toHaveText(newUsername);
  });

});