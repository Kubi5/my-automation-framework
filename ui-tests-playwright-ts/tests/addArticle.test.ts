import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/MainPage';
import { AddArticlePage } from '../pages/AddArticlePage';

test.describe('Conduit - Add article tests', () => {
  let mainPage: MainPage;
  let addArticlePage: AddArticlePage;
  const artTitle = "title";
  const artDesc = "test_desc";
  const artText = "Nice article this is";
  const tags = "#yes #no";

  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    addArticlePage = new AddArticlePage(page);
    await mainPage.goto();
  });

  test('should succesfully add article with all data', async ({ page }) => {
    await mainPage.goToAddArticlePage();
    await addArticlePage.addArticle(artTitle, artDesc, artText, tags);
    await expect(page).toHaveURL('https://demo.realworld.show/article/' + artTitle);
  }); 


});