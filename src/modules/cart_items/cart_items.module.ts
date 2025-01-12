import { Module } from '@nestjs/common';

import { CartItemsRepository } from './cart_items.repository';
import { CartItemsService } from './cart_items.service';
import { CartItemsController } from './cart_items.controller';

@Module({
  controllers: [CartItemsController],
  providers: [CartItemsRepository, CartItemsService],
})
export class CartItemsModule { }
