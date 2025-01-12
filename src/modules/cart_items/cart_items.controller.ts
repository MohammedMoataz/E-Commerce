import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CartItemsService } from './cart_items.service';
import { CreateCartItemDto } from './dto/create-cart_item.dto';
import { UpdateCartItemDto } from './dto/update-cart_item.dto';

@ApiTags('Cart Items APIs')
@Controller('v1/cart-items/')
export class CartItemsController {
  constructor(private readonly cartItemsService: CartItemsService) { }

  @Post()
  create(@Body() createCartItemDto: CreateCartItemDto) {
    return this.cartItemsService.create(createCartItemDto);
  }

  @Get()
  findAll() {
    return this.cartItemsService.findAll();
  }

  @Get(':id')
  findOneById(@Param('id') id: number) {
    return this.cartItemsService.findOneById(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateCartItemDto: UpdateCartItemDto) {
    return this.cartItemsService.update(id, updateCartItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.cartItemsService.remove(id);
  }
}
