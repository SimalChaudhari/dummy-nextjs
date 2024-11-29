// src/user/user.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUser(): string {
    return 'This is a dummy user';  // Replace with actual logic if needed
  }
}
