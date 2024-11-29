import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';
import { VercelRequest, VercelResponse } from '@vercel/node';

let cachedServer: any;

async function createServer() {
  const server = express();  // Initialize the express server
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));

  app.enableCors();  // Enable CORS if needed

  return server;
}

export default async (req: VercelRequest, res: VercelResponse) => {
  if (!cachedServer) {
    cachedServer = await createServer();
  }

  return cachedServer(req, res); // Route the request to the cached server
};
