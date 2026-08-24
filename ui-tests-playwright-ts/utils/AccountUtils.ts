import { faker } from '@faker-js/faker';
import * as fs from 'fs';
import * as path from 'path';

export type UserCredentials = {
  username: string;
  userEmail: string;
  userPassword: string;
};

export function generateRandomUserData(overrides?: Partial<UserCredentials>): UserCredentials {
  return {
    username: faker.internet.username(),
    userEmail: faker.internet.email(),
    userPassword: faker.internet.password(),
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