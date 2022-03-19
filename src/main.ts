import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = {
    origin: 'http://localhost:3000', // attempted "origin":["http://localhost"]
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTION',
    optionsSuccessStatus: 204,
    credentials: true,
    allowedHeaders: 'Content-Type, Accept, Authorization',
    exposedHeaders: 'Authorization',
  };
  app.enableCors(options);
  await app.listen(8000);
}
bootstrap();
