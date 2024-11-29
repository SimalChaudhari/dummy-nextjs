import { NestFactory } from '@nestjs/core';
import { AppModule } from './routes/app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors();

  // Log all registered routes
  const server = app.getHttpServer();
  const router = server._events.request._router;
  const routes = router.stack
    .filter((layer: any) => layer.route)
    .map((layer: any) => layer.route.path);
  Logger.log(`Registered Routes: ${JSON.stringify(routes)}`);

  const PORT = 5000;
  await app.listen(PORT);
  console.log(`Application is running on: http://localhost:${PORT}`);
}
bootstrap();
