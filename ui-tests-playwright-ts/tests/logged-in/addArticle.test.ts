import { test, expect } from '../../fixtures/page-object.fixture';
import { MainView } from '../../pages/MainView';
import { generateArticleData } from '../../utils/ArticleUtils';


test.describe('Conduit - Add article tests', () => {

  test('should navigate properly from main view to add article page', async ({ addArticlePage, navbarComponent, mainView }) => {
    await mainView.goto();
    await navbarComponent.gotoAddArticlePage();
    
    await expect(addArticlePage.page).toHaveURL('https://demo.realworld.show/editor');
  }); 

  test('should succesfully add article with all data', async ({ addArticlePage }) => {
    const articleData = generateArticleData();
    const urlArticleText = articleData.title.toLowerCase().trim().replace(/\s+/g, '-');

    await addArticlePage.addArticle(articleData);
    
    await expect(addArticlePage.page).toHaveURL('https://demo.realworld.show/article/' + urlArticleText);
  }); 

});