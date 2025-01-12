import { PartialType } from '@nestjs/swagger';
import { UUID } from 'crypto';
import { ProductDto } from './product.dto';

export class UpdateProductDto extends PartialType(ProductDto) {
    updatedAt: Date;
    updatedBy: UUID;
}
