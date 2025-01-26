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

import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Serialize } from 'src/common/interceptors/serialize.interceptor';
import { ProductDto } from './dto/product.dto';

@ApiTags('Products APIs')
@Controller('v1/products/')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Serialize(ProductDto)
  @Post()
  async create(@Body() createProductDto: CreateProductDto): Promise<ProductDto> {
    return await this.productsService.create(createProductDto);
  }

  @Serialize(ProductDto)
  @Get()
  async findAll(): Promise<ProductDto[]> {
    return await this.productsService.findAll();
  }

  @Serialize(ProductDto)
  @Get(':id')
  async findOneById(@Param('id') id: number): Promise<ProductDto> {
    return await this.productsService.findOneById(id);
  }

  @Serialize(ProductDto)
  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateProductDto: UpdateProductDto): Promise<ProductDto> {
    return await this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<boolean> {
    return this.productsService.remove(id);
  }
}
