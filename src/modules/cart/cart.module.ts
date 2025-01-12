import { Module } from '@nestjs/common';

import { CartRepository } from './cart.repository';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';

@Module({
  controllers: [CartController],
  providers: [CartRepository, CartService],
})
export class CartModule { }
