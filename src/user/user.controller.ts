import { Controller, Get } from '@nestjs/common';

@Controller('user')  // Make sure the route is '/user'
export class UserController {
  @Get()
  getUser() {
    return { message: 'User route works!' };  // Response for the '/user' GET request
  }
}
