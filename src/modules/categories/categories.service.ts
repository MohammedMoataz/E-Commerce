import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';

import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoriesRepository } from './categories.repository';
import { CategoryDto } from './dto/category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor(private readonly categoriesRepository: CategoriesRepository) { }

  async create(createCategoryDto: CreateCategoryDto): Promise<CategoryDto> {
    return await this.categoriesRepository.create({
      ...createCategoryDto,
    });
  }

  async findAll(): Promise<CategoryDto[]> {
    const categories = await this.categoriesRepository.findAll();
    let CategoriesDto: CategoryDto[];

    if (categories.length)
      CategoriesDto = categories.map((category: typeof Category) => plainToClass(CategoryDto, category));

    return CategoriesDto;
  }

  async findOneById(id: number): Promise<CategoryDto> {
    return await this.categoriesRepository.findOneById(id);
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto): Promise<CategoryDto> {
    updateCategoryDto['updatedAt'] = Date.now();
    return await this.categoriesRepository.update(id, updateCategoryDto);
  }

  async remove(id: number): Promise<string> {
    const result = await this.categoriesRepository.remove(id);
    return result.rowCount > 0
      ? "Deleted successfully"
      : "Deleted failed";
  }
}
