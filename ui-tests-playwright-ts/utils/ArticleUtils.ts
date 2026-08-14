import { faker } from '@faker-js/faker';

export interface ArticleData {
  title: string;
  description: string;
  body: string;
  tags: string;
}

export function generateArticleData(overrides?: Partial<ArticleData>): ArticleData {
    return {
    title: faker.lorem.words(2),
    description: faker.lorem.sentence(4),
    body: faker.lorem.paragraph(), 
    tags: '#' + faker.lorem.word(6),
    ...overrides
    }
}