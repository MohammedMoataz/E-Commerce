import { Exclude } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";
import { OmitType } from "@nestjs/mapped-types";
import { ProductImageDto } from "./product_image.dto";

export class CreateProductImageDto extends OmitType(ProductImageDto, ['id', 'product']) {
  @ApiProperty({ description: 'Identifier of the product associated with the image.' })
  @IsNumber()
  productId: number;

  @Exclude()
  @ApiProperty({ description: 'Timestamp when the product image was created.', required: false })
  readonly createdAt?: Date;
}