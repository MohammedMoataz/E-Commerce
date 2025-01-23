import {
  MiddlewareConsumer,
  Module,
  NestModule
} from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';

import { AuthModule } from './modules/auth/auth.module';
import { AuditModule } from './modules/audit/audit.module';
import { UsersModule } from './modules/users/users.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { ProductsModule } from './modules/products/products.module';
import { ProductsImagesModule } from './modules/products_images/products_images.module';
import { CartItemsModule } from './modules/cart_items/cart_items.module';
import { CartModule } from './modules/cart/cart.module';
import { OrdersModule } from './modules/orders/orders.module';
import { ReviewsModule } from './modules/reviews/reviews.module';
import { MailModule } from './common/helpers/mail/mail.module';
import { LoggerModule } from './common/helpers/logger/logger.module';
import { CustomCacheModule } from './common/helpers/cache/cache.module';
import { AllExceptionsFilter } from './common/filters/all-exceptions.filter';
import { LoggerMiddleware } from './middlewares/logger.middleware';

@Module({
  imports: [
    AuthModule,
    AuditModule,
    UsersModule,
    CategoriesModule,
    ProductsModule,
    ProductsImagesModule,
    CartItemsModule,
    CartModule,
    OrdersModule,
    ReviewsModule,
    MailModule,
    LoggerModule,
    CustomCacheModule,
  ],
  providers: [{
      provide: APP_FILTER,
      useClass: AllExceptionsFilter
    }]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('*');
  }
}
