import { Injectable } from '@nestjs/common';

import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsRepository } from './products.repository';

@Injectable()
export class ProductsService {
  constructor(
    private readonly productsRepository: ProductsRepository
  ) { }

  async create(createProductDto: CreateProductDto) {
    return this.productsRepository.create({
      ...createProductDto,
    });
  }

  async findAll() {
    return this.productsRepository.findAll();
  }

  async findOneById(id: number) {
    return this.productsRepository.findOneById(id);
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    return this.productsRepository.update(id, updateProductDto);
  }

  async remove(id: number) {
    return this.productsRepository.remove(id);
  }
}
