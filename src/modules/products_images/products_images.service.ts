import { Injectable } from '@nestjs/common';

import { ProductsImagesRepository } from './products_images.repository';
import { CreateProductImageDto } from './dto/create-product_image.dto';

@Injectable()
export class ProductsImagesService {
  constructor(
    private readonly ProductsImagesRepository: ProductsImagesRepository
  ) { }

  create(createProductImageDto: CreateProductImageDto) {
    return this.ProductsImagesRepository.create({
      id: createProductImageDto.id,
      productId: createProductImageDto.productId,
      ...createProductImageDto,
    });
  }

  findAll() {
    return this.ProductsImagesRepository.findAll();
  }

  findOne(id: number) {
    return this.ProductsImagesRepository.findOneById(id);
  }

  remove(id: number) {
    return this.ProductsImagesRepository.remove(id);
  }
}
