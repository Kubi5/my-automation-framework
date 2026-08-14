import { test, expect } from '../../fixtures/page-object.fixture';
import { generateArticleData } from '../../utils/ArticleUtils';


test.describe('Conduit - Add article tests', () => {

  test('should succesfully add article with all data', async ({ mainLoggedInPage, addArticlePage }) => {
    await mainLoggedInPage.goToAddArticlePage();
    const articleData = generateArticleData();
    const urlArticleText = articleData.title.toLowerCase().trim().replace(/\s+/g, '-');

    await addArticlePage.addArticle(articleData);
    
    await expect(addArticlePage.page).toHaveURL('https://demo.realworld.show/article/' + urlArticleText);
  }); 

});