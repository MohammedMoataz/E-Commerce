import { Injectable } from '@nestjs/common';

import { CartRepository } from './cart.repository';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';

@Injectable()
export class CartService {
  constructor(
    private readonly cartRepository: CartRepository
  ) { }

  async create(createCarDto: CreateCartDto) {
    return this.cartRepository.create({
      ...createCarDto,
    });
  }

  async findAll() {
    return this.cartRepository.findAll();
  }

  async findOneById(id: number) {
    return this.cartRepository.findOneById(id);
  }

  async update(id: number, updateCartDto: UpdateCartDto) {
    return this.cartRepository.update(id, updateCartDto);
  }

  async remove(id: number) {
    return this.cartRepository.remove(id);
  }
}
