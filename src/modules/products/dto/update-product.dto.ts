import { Exclude } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { OmitType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends OmitType(CreateProductDto, ['createdAt']) {
    @Exclude()
    @ApiProperty({ description: 'Timestamp when the product was last updated.', required: false })
    readonly updatedAt?: Date;
}
