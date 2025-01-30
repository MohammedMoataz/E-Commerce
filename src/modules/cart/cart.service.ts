import { Injectable } from '@nestjs/common';

import { CartRepository } from './cart.repository';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { CartDto } from './dto/cart.dto';
import { plainToClass } from 'class-transformer';
import { Cart } from './entities/cart.entity';

@Injectable()
export class CartService {
  constructor(
    private readonly cartRepository: CartRepository
  ) { }

  async create(createCarDto: CreateCartDto): Promise<CartDto> {
    return await this.cartRepository.create({
      ...createCarDto,
    });
  }

  async findAll() {
    const carts = await this.cartRepository.findAll();
    let cartDto: CartDto[];

    if (carts.length)
      cartDto = carts.map((cart: typeof Cart) => plainToClass(CartDto, cart));

    return cartDto;
  }

  async findOneById(id: number): Promise<CartDto> {
    return await this.cartRepository.findOneById(id);
  }

  async update(id: number, updateCartDto: UpdateCartDto): Promise<CartDto> {
    return await this.cartRepository.update(id, updateCartDto);
  }

  async remove(id: number): Promise<string> {
    const result = await this.cartRepository.remove(id);
    return result.rowCount > 0
      ? "Deleted successfully"
      : "Deleted failed";
  }
}
