import { PartialType } from "@nestjs/mapped-types";
import { UUID } from "crypto";
import { CategoryDto } from "./category.dto";

export class DeleteCategoryDto extends PartialType(CategoryDto) {
    deletedAt: Date;
    deletedBy: UUID;
}
