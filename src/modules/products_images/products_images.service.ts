import { Injectable } from '@nestjs/common';

import { ProductsImagesRepository } from './products_images.repository';
import { CreateProductImageDto } from './dto/create-product_image.dto';
import { ProductImageDto } from './dto/product_image.dto';

@Injectable()
export class ProductsImagesService {
  constructor(
    private readonly ProductsImagesRepository: ProductsImagesRepository
  ) { }

  async create(createProductImageDto: CreateProductImageDto): Promise<ProductImageDto> {
    return await this.ProductsImagesRepository.create({
      ...createProductImageDto,
    });
  }

  async findAll(): Promise<ProductImageDto[]> {
    return await this.ProductsImagesRepository.findAll();
  }

  async findOne(id: number): Promise<ProductImageDto> {
    return await this.ProductsImagesRepository.findOneById(id);
  }

  async remove(id: number): Promise<string> {
    const result = await this.ProductsImagesRepository.remove(id);
    return result.rowCount > 0
      ? "Deleted successfully"
      : "Deleted failed";
  }
}
