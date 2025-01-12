import { PartialType } from "@nestjs/mapped-types";
import { UUID } from "crypto";
import { CategoryDto } from "./category.dto";

export class UpdateCategoryDto extends PartialType(CategoryDto) {
    updatedAt: Date;
    updatedBy: UUID;
}
