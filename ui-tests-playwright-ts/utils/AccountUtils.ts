import { APIRequestContext } from '@playwright/test';
import { faker } from '@faker-js/faker';

export type UserCredentials = {
    username: string;
    userEmail: string;
    userPassword: string;
}
//TODO: dodać ze logowanie i rejestracja przechodzą z poziomu main strony a nie od razu na logowaniu czy rejestracji
export class AccountUtils {

    static generateRandomUserData(): UserCredentials {
        return {
            username: faker.internet.username(),
            userEmail: faker.internet.email(),
            userPassword: faker.internet.password()
        }
    }  

  static async apiRegisterUser(request: APIRequestContext): Promise<UserCredentials> {

   const userCredentials = this.generateRandomUserData();
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
      throw new Error(`Failed to register user: ${response.status()}`);
    }

    return userCredentials;
  }
}