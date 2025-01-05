import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsImagesService } from './products_images.service';
import { CreateProductsImageDto } from './dto/create-products_image.dto';
import { UpdateProductsImageDto } from './dto/update-products_image.dto';

@Controller('products-images')
export class ProductsImagesController {
  constructor(private readonly productsImagesService: ProductsImagesService) {}

  @Post()
  create(@Body() createProductsImageDto: CreateProductsImageDto) {
    return this.productsImagesService.create(createProductsImageDto);
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
  update(@Param('id') id: string, @Body() updateProductsImageDto: UpdateProductsImageDto) {
    return this.productsImagesService.update(+id, updateProductsImageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsImagesService.remove(+id);
  }
}
