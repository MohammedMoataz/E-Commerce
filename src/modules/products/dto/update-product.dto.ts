import { Exclude } from 'class-transformer';
import { PartialType } from '@nestjs/swagger';
import { UUID } from 'crypto';

import { ProductDto } from './product.dto';

export class UpdateProductDto extends PartialType(ProductDto) {
    @Exclude()
    updatedAt: Date;
    @Exclude()
    updatedBy: UUID;
}
