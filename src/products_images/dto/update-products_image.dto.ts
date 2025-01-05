import { PartialType } from '@nestjs/mapped-types';
import { CreateProductsImageDto } from './create-products_image.dto';

export class UpdateProductsImageDto extends PartialType(CreateProductsImageDto) {}
