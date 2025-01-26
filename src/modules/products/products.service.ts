import { Injectable } from '@nestjs/common';

import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsRepository } from './products.repository';
import { ProductDto } from './dto/product.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly productsRepository: ProductsRepository) { }

  async create(createProductDto: CreateProductDto): Promise<ProductDto> {
    return await this.productsRepository.create({
      ...createProductDto,
    });
  }


  async findAll(): Promise<ProductDto[]> {
    return await this.productsRepository.findAll();
  }

  async findOneById(id: number): Promise<ProductDto> {
    return await this.productsRepository.findOneById(id);
  }

  async update(id: number, updateProductDto: UpdateProductDto): Promise<ProductDto> {
    return await this.productsRepository.update(id, updateProductDto);
  }

  async remove(id: number): Promise<boolean> {
    return await this.productsRepository.remove(id);
  }
}
