import { Exclude } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";
import { OmitType } from "@nestjs/mapped-types";
import { ProductDto } from "./product.dto";

export class CreateProductDto extends OmitType(ProductDto, ['id', 'category']) {
    @ApiProperty({ description: 'Identifier of the category to which the product belongs.' })
    @IsNumber()
    categoryId: number;

    @Exclude()
    @ApiProperty({ description: 'Timestamp when the product was created.', required: false })
    readonly createdAt?: Date;
}