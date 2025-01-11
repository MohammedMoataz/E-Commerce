import {
  Inject,
  Injectable
} from '@nestjs/common';

import { ProductsImagesRepository } from './products_images.repository';
import { CreateProductImageDto } from './dto/create-product_image.dto';
import { UpdateProductImageDto } from './dto/update-product_image.dto';

@Injectable()
export class ProductsImagesService {
  constructor(
    @Inject()
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
    return this.ProductsImagesRepository.findOne(id);
  }

  update(id: number, updateProductImageDto: UpdateProductImageDto) {
    return this.ProductsImagesRepository.update(id, updateProductImageDto);
  }

  remove(id: number) {
    return this.ProductsImagesRepository.remove(id);
  }
}
