import { PartialType } from "@nestjs/mapped-types";
import { UUID } from "crypto";
import { ProductDto } from "./product.dto";

export class DeleteProductDto extends PartialType(ProductDto) {
    deletedAt: Date;
    deletedBy: UUID;
}
