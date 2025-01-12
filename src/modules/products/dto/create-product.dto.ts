import { PartialType } from "@nestjs/mapped-types";
import { UUID } from "crypto";
import { ProductDto } from "./product.dto";

export class CreateProductDto extends PartialType(ProductDto) {
    categoryId: number;
    createdAt: Date;
    createdBy: UUID;
}
