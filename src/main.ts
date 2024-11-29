import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();  // Enable CORS for cross-origin requests
  const port = process.env.PORT || 4000;  // Vercel assigns a dynamic port
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
}

bootstrap();
