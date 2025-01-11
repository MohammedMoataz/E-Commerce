import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete
} from '@nestjs/common';

import { ProductsImagesService } from './products_images.service';
import { CreateProductImageDto } from './dto/create-product_image.dto';

@Controller('products-images')
export class ProductsImagesController {
  constructor(private readonly productsImagesService: ProductsImagesService) { }

  @Post()
  create(@Body() createProductImageDto: CreateProductImageDto) {
    return this.productsImagesService.create(createProductImageDto);
  }

  @Get()
  findAll() {
    return this.productsImagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.productsImagesService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.productsImagesService.remove(id);
  }
}
