import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule], // Include UserModule here

})
export class AppModule {}
