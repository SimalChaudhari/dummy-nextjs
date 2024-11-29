import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getDummyUser() {
    return {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
    };
  }
}
