// src/app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';  // Root controller
import { AppService } from './app.service';        // Root service
import { UserModule } from './user/user.module';   // Import the user module

@Module({
  imports: [UserModule],  // Include UserModule in your application
  controllers: [AppController],  // Include AppController for root route
  providers: [AppService],       // Include AppService for the root controller
})
export class AppModule {}
