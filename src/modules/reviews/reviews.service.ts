import {
  Inject,
  Injectable
} from '@nestjs/common';

import { ReviewsRepository } from './reviews.repository';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/delete-review.dto';

@Injectable()
export class ReviewsService {
  constructor(
    @Inject()
    private readonly reviewsRepository: ReviewsRepository
  ) { }

  async create(createReviewDto: CreateReviewDto) {
    return await this.reviewsRepository.create({
      productId: createReviewDto.productId,
      userId: createReviewDto.userId,
      rating: createReviewDto.rating,
      ...createReviewDto,
    });
  }

  async findAll() {
    return await this.reviewsRepository.findAll();
  }

  async findOne(id: number) {
    return await this.reviewsRepository.findOneById(id);
  }

  async update(id: number, updateReviewDto: UpdateReviewDto) {
    return await this.reviewsRepository.update(id, updateReviewDto);
  }

  async remove(id: number) {
    return await this.reviewsRepository.remove(id);
  }
}
