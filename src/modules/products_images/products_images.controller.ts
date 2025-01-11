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
import { UpdateProductImageDto } from './dto/update-product_image.dto';

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
  findOne(@Param('id') id: string) {
    return this.productsImagesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductImageDto: UpdateProductImageDto) {
    return this.productsImagesService.update(+id, updateProductImageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsImagesService.remove(+id);
  }
}
