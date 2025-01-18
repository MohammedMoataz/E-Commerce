import { Injectable } from '@nestjs/common';

import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoriesRepository } from './categories.repository';

@Injectable()
export class CategoriesService {
  constructor(
    private readonly categoriesRepository: CategoriesRepository
  ) { }

  async create(createCategoryDto: CreateCategoryDto) {
    return this.categoriesRepository.create({
      ...createCategoryDto,
    });
  }

  async findAll() {
    return this.categoriesRepository.findAll();
  }

  async findOneById(id: number) {
    return this.categoriesRepository.findOneById(id);
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return this.categoriesRepository.update(id, updateCategoryDto);
  }

  async remove(id: number) {
    return this.categoriesRepository.remove(id);
  }
}
