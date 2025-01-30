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

import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { ReviewDto } from './dto/review.dto';
import { Serialize } from 'src/common/interceptors/serialize.interceptor';

@ApiTags('Reviews APIs')
@Controller('v1/reviews/')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) { }

  @Serialize(ReviewDto)
  @Post()
  async create(@Body() createReviewDto: CreateReviewDto): Promise<ReviewDto> {
    return await this.reviewsService.create(createReviewDto);
  }

  @Get()
  async findAll(): Promise<ReviewDto[]> {
    return await this.reviewsService.findAll();
  }

  @Serialize(ReviewDto)
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<ReviewDto> {
    return await this.reviewsService.findOne(id);
  }

  @Serialize(ReviewDto)
  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateReviewDto: UpdateReviewDto): Promise<ReviewDto> {
    return await this.reviewsService.update(id, updateReviewDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<string> {
    return await this.reviewsService.remove(id);
  }
}
