import { Module } from '@nestjs/common';
import { ProductsImagesService } from './products_images.service';
import { ProductsImagesController } from './products_images.controller';

@Module({
  controllers: [ProductsImagesController],
  providers: [ProductsImagesService],
})
export class ProductsImagesModule {}
