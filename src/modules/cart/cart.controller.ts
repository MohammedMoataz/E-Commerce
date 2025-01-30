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

import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { Serialize } from 'src/common/interceptors/serialize.interceptor';
import { CartDto } from './dto/cart.dto';

@ApiTags('Cart APIs')
@Controller('v1/carts/')
export class CartController {
  constructor(private readonly cartService: CartService) { }

  @Serialize(CartDto)
  @Post()
  async create(@Body() createCartDto: CreateCartDto): Promise<CartDto> {
    return await this.cartService.create(createCartDto);
  }

  @Get()
  async findAll(): Promise<CartDto[]> {
    return await this.cartService.findAll();
  }

  @Serialize(CartDto)
  @Get(':id')
  async findOneById(@Param('id') id: number): Promise<CartDto> {
    return await this.cartService.findOneById(id);
  }

  @Serialize(CartDto)
  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateCartDto: UpdateCartDto): Promise<CartDto> {
    return await this.cartService.update(id, updateCartDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<string> {
    return await this.cartService.remove(id);
  }
}
