import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';

@Module({
  imports: [],
  controllers: [UserController],  // Register the UserController here
  providers: [UserService],
})
export class AppModule {}
