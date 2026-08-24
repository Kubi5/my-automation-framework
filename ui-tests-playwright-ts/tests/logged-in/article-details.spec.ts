import { test, expect } from '../../fixtures/page-object.fixture';


test.describe('Conduit - article details tests', () => {

  test('should successfully add comment on article', async ({ articleDetailsPage }) => {
    const text = "Super Artykuł pozdrawiam całą rodzinę";

    await articleDetailsPage.addComment(text);

    await expect(articleDetailsPage.getCommentLocator(text)).toBeVisible();
  }); 

});