import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle("CRUD Testing")
    .setDescription("CRUD Testing ")
    .setVersion("1.0")
    .build();
  const document = SwaggerModule.createDocument(app,config);
  SwaggerModule.setup("docs",app,document)
  app.useGlobalPipes(new ValidationPipe)
  // app.setGlobalPrefix("api")
  await app.listen(3000);
}
bootstrap();
