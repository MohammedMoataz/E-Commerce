import { Injectable } from '@nestjs/common';

import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsRepository } from './products.repository';
import { ProductDto } from './dto/product.dto';
import { Product } from './entities/product.entity';
import { plainToClass } from 'class-transformer';

@Injectable()
export class ProductsService {
  constructor(private readonly productsRepository: ProductsRepository) { }

  async create(createProductDto: CreateProductDto): Promise<ProductDto> {
    return await this.productsRepository.create({
      ...createProductDto,
    });
  }


  async findAll(): Promise<ProductDto[]> {
    const products = await this.productsRepository.findAll();
    let ProductsDto: ProductDto[];

    if (products.length)
      ProductsDto = products.map((product: typeof Product) => plainToClass(ProductDto, product));

    return ProductsDto;
  }

  async findOneById(id: number): Promise<ProductDto> {
    return await this.productsRepository.findOneById(id);
  }

  async update(id: number, updateProductDto: UpdateProductDto): Promise<ProductDto> {
    return await this.productsRepository.update(id, updateProductDto);
  }

  async remove(id: number): Promise<string> {
    const result = await this.productsRepository.remove(id);
    return result.rowCount > 0
      ? "Deleted successfully"
      : "Deleted failed";
  }
}
