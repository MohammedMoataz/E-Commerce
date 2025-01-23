import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import SwaggerExtension from './extensions/swagger.extension';
import MiddlewaresExtension from './extensions/middlewares.extension';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  MiddlewaresExtension.setup(app);
  SwaggerExtension.setup(app);

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
