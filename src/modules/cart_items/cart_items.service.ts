import { Injectable } from '@nestjs/common';

import { CartItemsRepository } from './cart_items.repository';
import { CreateCartItemDto } from './dto/create-cart_item.dto';
import { UpdateCartItemDto } from './dto/update-cart_item.dto';

@Injectable()
export class CartItemsService {
  constructor(
    private readonly cartItemsRepository: CartItemsRepository
  ) { }

  async create(createCartItemDto: CreateCartItemDto) {
    return this.cartItemsRepository.create({
      cartId: createCartItemDto.cartId,
      productId: createCartItemDto.productId,
      ...createCartItemDto,
    });
  }

  async findAll() {
    return this.cartItemsRepository.findAll();
  }

  async findOneById(id: number) {
    return this.cartItemsRepository.findOneById(id);
  }

  async update(id: number, updateCartItemDto: UpdateCartItemDto) {
    return this.cartItemsRepository.update(id, updateCartItemDto);
  }

  async remove(id: number) {
    return this.cartItemsRepository.remove(id);
  }
}
