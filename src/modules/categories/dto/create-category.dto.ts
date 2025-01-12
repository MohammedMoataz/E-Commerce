import { PartialType } from "@nestjs/mapped-types";
import { UUID } from "crypto";
import { CategoryDto } from "./category.dto";

export class CreateCategoryDto extends PartialType(CategoryDto) {
    createdAt: Date;
    createdBy: UUID;
}
