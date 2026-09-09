import { APIRequestContext } from '@playwright/test';
import { generateRandomArticleData } from '../utils/ArticleUtils';


export async function createArticle(request: APIRequestContext, token: string): Promise<string> {
    const articleData = await generateRandomArticleData();

    const response = await request.post('https://api.realworld.show/api/articles', {
        headers: {
        'Authorization': `Token ${token}`,
        },
        data: {
         article: articleData
        }
    });

    if (!response.ok()) {
      throw new Error(`Failed to create article via API: ${response.status()}`);
    }

    const responseBody = await response.json();
    return responseBody.article.slug;
}