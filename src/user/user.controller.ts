import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user') // This maps to '/user'
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get() // Handles GET requests to '/user'
  getDummyUser() {
    return this.userService.getDummyUser();
  }
}
