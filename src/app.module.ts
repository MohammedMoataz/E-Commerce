import {
  MiddlewareConsumer,
  Module,
  NestModule
} from '@nestjs/common';

import { ErrorHandlerMiddleware } from './common/middlewares/error_handler.middleware';
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
import { MailModule } from './common/utils/mail/mail.module';
import { LoggerModule } from './common/utils/logger/logger.module';

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
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ErrorHandlerMiddleware)
      .forRoutes('*');
  }
}
