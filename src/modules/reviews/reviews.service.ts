import { Injectable } from '@nestjs/common';

import { ReviewsRepository } from './reviews.repository';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { ReviewDto } from './dto/review.dto';
import { Review } from './entities/review.entity';
import { plainToClass } from 'class-transformer';

@Injectable()
export class ReviewsService {
  constructor(
    private readonly reviewsRepository: ReviewsRepository
  ) { }

  async create(createReviewDto: CreateReviewDto): Promise<ReviewDto> {
    return await this.reviewsRepository.create({
      ...createReviewDto,
    });
  }

  async findAll(): Promise<ReviewDto[]> {
    const reviews = await this.reviewsRepository.findAll();
    let reviewsDto: ReviewDto[];

    if (reviews.length)
      reviewsDto = reviews.map((review: typeof Review) => plainToClass(ReviewDto, review));

    return reviewsDto;
  }

  async findOne(id: number): Promise<ReviewDto> {
    return await this.reviewsRepository.findOneById(id);
  }

  async update(id: number, updateReviewDto: UpdateReviewDto): Promise<ReviewDto> {
    return await this.reviewsRepository.update(id, updateReviewDto);
  }

  async remove(id: number): Promise<string> {
    const result = await this.reviewsRepository.remove(id);
    return result.rowCount > 0
      ? "Deleted successfully"
      : "Deleted failed";
  }
}
