import { test, expect } from '../../fixtures/page-object.fixture';
import { faker } from '@faker-js/faker';

test.describe('Conduit - article details tests', () => {

  test('should successfully add comment on article', async ({ articleDetailsPage }) => {
    const text = faker.word.words(6);

    await articleDetailsPage.addComment(text);

    await expect(articleDetailsPage.getCommentLocator(text)).toBeVisible();
  }); 

});