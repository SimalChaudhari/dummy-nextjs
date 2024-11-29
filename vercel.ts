// vercel.ts
import { NestFactory } from '@nestjs/core';

import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';
import { AppModule } from './src/app.module';

let cachedServer: any;

async function createServer() {
  const server = express();
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));

  app.enableCors();  // Enable CORS if needed

  return server;
}

export default async (req: any, res: any) => {
  if (!cachedServer) {
    cachedServer = await createServer();
  }

  return cachedServer(req, res);  // Route the request to the cached server
};
