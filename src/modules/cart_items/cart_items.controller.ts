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
import { Serialize } from 'src/common/interceptors/serialize.interceptor';
import { CartItemDto } from './dto/cart_item.dto';

@ApiTags('Cart Items APIs')
@Controller('v1/cart-items/')
export class CartItemsController {
  constructor(private readonly cartItemsService: CartItemsService) { }

  @Serialize(CartItemDto)
  @Post()
  async create(@Body() createCartItemDto: CreateCartItemDto): Promise<CartItemDto> {
    return await this.cartItemsService.create(createCartItemDto);
  }

  @Get()
  async findAll(): Promise<CartItemDto[]> {
    return await this.cartItemsService.findAll();
  }

  @Serialize(CartItemDto)
  @Get(':id')
  async findOneById(@Param('id') id: number): Promise<CartItemDto> {
    return await this.cartItemsService.findOneById(id);
  }

  @Serialize(CartItemDto)
  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateCartItemDto: UpdateCartItemDto): Promise<CartItemDto> {
    return await this.cartItemsService.update(id, updateCartItemDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<string> {
    return await this.cartItemsService.remove(id);
  }
}
