// src/user/user.controller.ts
import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')  // Define route prefix here
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()  // Handle GET request to '/user'
  getUser(): string {
    return 'This is a dummy user';  // Replace with actual logic
  }
}
