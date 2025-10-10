import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import 'reflect-metadata';
import { AppDataSource } from './datasource/data-source';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  try {
    await AppDataSource.initialize();
    await AppDataSource.query('SELECT 1');
    console.log('DB connected');
  } catch (err) {
    console.error('DB connection failed', err);
    process.exit(1);
  }
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const config = new DocumentBuilder()
    .setTitle('Cart Service')
    .setDescription('description')
    .setVersion('1.0')
    .addTag('cart')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
