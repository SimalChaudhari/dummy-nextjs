import { NestFactory } from '@nestjs/core';
import { AppModule } from './src/app.module';

let cachedServer: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.init();  // Initialize the NestJS app
  return app.getHttpAdapter().getInstance();
}

const server = async (req, res) => {
  if (!cachedServer) {
    cachedServer = await bootstrap();  // Lazy initialization of the app on first request
  }
  cachedServer(req, res);  // Forward the request and response to the server instance
};

export default server;
