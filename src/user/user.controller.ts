import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')  // This will map to /user route
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()  // HTTP GET request for /user
  getUser(): string {
    return this.userService.getUser();
  }
}
