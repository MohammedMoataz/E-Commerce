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

import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Serialize } from 'src/common/interceptors/serialize.interceptor';
import { CategoryDto } from './dto/category.dto';

@ApiTags('Categories APIs')
@Controller('v1/categories/')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) { }

  @Serialize(CategoryDto)
  @Post()
  async create(@Body() createCategoryDto: CreateCategoryDto): Promise<CategoryDto> {
    return await this.categoriesService.create(createCategoryDto);
  }

  @Get()
  async findAll(): Promise<CategoryDto[]> {
    return await this.categoriesService.findAll();
  }

  @Serialize(CategoryDto)
  @Get(':id')
  async findOneById(@Param('id') id: number): Promise<CategoryDto> {
    return await this.categoriesService.findOneById(id);
  }

  @Serialize(CategoryDto)
  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateCategoryDto: UpdateCategoryDto): Promise<CategoryDto> {
    return await this.categoriesService.update(id, updateCategoryDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<string> {
    return await this.categoriesService.remove(id);
  }
}
