import { test, expect } from '../../fixtures/page-object.fixture';

test.describe('Conduit - Add article tests', () => {
  const artTitle = "title";
  const artDesc = "test_desc";
  const artText = "Nice article this is";
  const tags = "#yes #no";

  test('should succesfully add article with all data', async ({ mainLoggedInPage, addArticlePage }) => {
    await mainLoggedInPage.goToAddArticlePage();
    await addArticlePage.addArticle(artTitle, artDesc, artText, tags);
    await expect(addArticlePage.page).toHaveURL('https://demo.realworld.show/article/' + artTitle);
  }); 

});