import { Module } from '@nestjs/common';

import { ProductsImagesRepository } from './products_images.repository';
import { ProductsImagesService } from './products_images.service';
import { ProductsImagesController } from './products_images.controller';

@Module({
  controllers: [ProductsImagesController],
  providers: [ProductsImagesRepository, ProductsImagesService],
})
export class ProductsImagesModule { }
