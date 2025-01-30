import { Injectable } from '@nestjs/common';

import { CartItemsRepository } from './cart_items.repository';
import { CreateCartItemDto } from './dto/create-cart_item.dto';
import { UpdateCartItemDto } from './dto/update-cart_item.dto';
import { CartItemDto } from './dto/cart_item.dto';
import { plainToClass } from 'class-transformer';
import { CartItem } from './entities/cart_item.entity';

@Injectable()
export class CartItemsService {
  constructor(
    private readonly cartItemsRepository: CartItemsRepository
  ) { }

  async create(createCartItemDto: CreateCartItemDto): Promise<CartItemDto> {
    return await this.cartItemsRepository.create({
      ...createCartItemDto,
    });
  }

  async findAll(): Promise<CartItemDto[]> {
    const cartItems = await this.cartItemsRepository.findAll();
    let cartItemsDto: CartItemDto[];

    if (cartItems.length)
      cartItemsDto = cartItems.map((cartItem: typeof CartItem) => plainToClass(CartItemDto, cartItem));

    return cartItemsDto;
  }

  async findOneById(id: number): Promise<CartItemDto> {
    return await this.cartItemsRepository.findOneById(id);
  }

  async update(id: number, updateCartItemDto: UpdateCartItemDto): Promise<CartItemDto> {
    return await this.cartItemsRepository.update(id, updateCartItemDto);
  }

  async remove(id: number): Promise<string> {
    const result = await this.cartItemsRepository.remove(id);
    return result.rowCount > 0
      ? "Deleted successfully"
      : "Deleted failed";
  }
}
