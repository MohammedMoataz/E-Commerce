import { ApiProperty } from "@nestjs/swagger";
import {
  IsNumber,
  IsOptional,
  IsString
} from "class-validator";

export class CreateProductImageDto {
  @ApiProperty({ description: 'Identifier of the product associated with the image.' })
  @IsNumber()
  productId: number;

  @ApiProperty({ description: 'URL or path of the product image.' })
  @IsString()
  image: string;

  @ApiProperty({ description: 'Alternative text for the image, used for accessibility and SEO.', required: false })
  @IsOptional()
  alt_text?: string;
}