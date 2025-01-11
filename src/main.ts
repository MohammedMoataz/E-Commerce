import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(helmet());
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('E-Commerce APIs Documentation')
    .setDescription('The E-Commerce APIs Documentation')
    .setVersion('1.0')
    .addBearerAuth({
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      name: 'JWT',
      description: 'Enter JWT token',
      in: 'header',
    }, 'JWT')
    .setContact(
      'Mohammed Moataz',
      'https://mohammed-moataz.vercel.app/',
      'imohammedmoataz@gmail.com'
    )
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config, {
    autoTagControllers: true,
    deepScanRoutes: true,
  });
  SwaggerModule.setup('api-docs', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
