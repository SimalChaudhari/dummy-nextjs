import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';
import { VercelRequest, VercelResponse } from '@vercel/node'; // Vercel specific types

let cachedServer: any;

async function createServer() {
  const server = express();
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));

  app.enableCors(); // Enable CORS if needed

  return server;
}

export default async (req: VercelRequest, res: VercelResponse) => {
  if (!cachedServer) {
    cachedServer = await createServer();
  }

  return cachedServer(req, res); // Use the cached server for requests
};
