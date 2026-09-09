import { faker } from '@faker-js/faker';
import * as fs from 'fs';
import * as path from 'path';

export type UserCredentials = {
  username: string;
  userEmail: string;
  userPassword: string;
  token: string;
};

export function generateRandomUserData(overrides?: Partial<UserCredentials>): UserCredentials {
  return {
    username: faker.internet.username(),
    userEmail: faker.internet.email(),
    userPassword: faker.internet.password(),
    token: faker.word.sample(7),
    ...overrides
  };
}

export function getAuthToken(){
  const authFilePath = path.resolve('.auth/user.json');
  const authData = JSON.parse(fs.readFileSync(authFilePath, 'utf-8'));
  
  const origin = authData.origins.find((o: any) => o.origin === 'https://demo.realworld.show');
  const jwtItem = origin?.localStorage.find((item: any) => item.name === 'jwtToken');
  
  return jwtItem ? jwtItem.value : '';
}

export function getUsernameFromToken(token: string): string {
  const base64Payload = token.split('.')[1];
  const decodedPayload = Buffer.from(base64Payload, 'base64').toString('utf-8');
  
  const parsedToken = JSON.parse(decodedPayload);
  
  return parsedToken.username || parsedToken.name;
}