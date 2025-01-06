import { Module } from '@nestjs/common';

import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { CategoriesModule } from './categories/categories.module';
import { ReviewsModule } from './reviews/reviews.module';
import { ProductsImagesModule } from './products_images/products_images.module';
import { OrderItemsModule } from './order_items/order_items.module';
import { CartModule } from './cart/cart.module';
import { CartItemsModule } from './cart_items/cart_items.module';
import { CheckoutModule } from './checkout/checkout.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    ProductsModule,
    OrdersModule,
    CategoriesModule,
    ReviewsModule,
    ProductsImagesModule,
    OrderItemsModule,
    CartModule,
    CartItemsModule,
    CheckoutModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AppModule { }
