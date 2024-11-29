import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return 'Hello from NestJS!';
  }

  @Get('user')
  getUser() {
    return { message: 'User route works!' };
  }
}
