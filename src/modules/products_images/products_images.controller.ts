import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ProductsImagesService } from './products_images.service';
import { CreateProductImageDto } from './dto/create-product_image.dto';
import { Serialize } from 'src/common/interceptors/serialize.interceptor';
import { ProductImageDto } from './dto/product_image.dto';

@ApiTags('Products Images APIs')
@Controller('v1/products-images/')
export class ProductsImagesController {
  constructor(private readonly productsImagesService: ProductsImagesService) { }

  @Serialize(ProductImageDto)
  @Post()
  create(@Body() createProductImageDto: CreateProductImageDto): Promise<ProductImageDto> {
    return this.productsImagesService.create(createProductImageDto);
  }

  @Get()
  findAll(): Promise<ProductImageDto[]> {
    return this.productsImagesService.findAll();
  }

  @Serialize(ProductImageDto)
  @Get(':id')
  findOne(@Param('id') id: number): Promise<ProductImageDto> {
    return this.productsImagesService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<string> {
    return this.productsImagesService.remove(id);
  }
}
