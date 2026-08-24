import { APIRequestContext } from '@playwright/test';
import { UserCredentials, generateRandomUserData } from '../utils/AccountUtils';

export async function apiRegisterUser(request: APIRequestContext): Promise<UserCredentials> {
  const userCredentials = generateRandomUserData();

  const response = await request.post('https://api.realworld.show/api/users', {
    data: {
      user: { 
        username: userCredentials.username,
        email: userCredentials.userEmail,
        password: userCredentials.userPassword
      }
    }
  });

  if (!response.ok()) {
    throw new Error(`Failed to register user via API: ${response.status()}`);
  }

  return userCredentials;
}