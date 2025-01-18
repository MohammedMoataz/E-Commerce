import { Exclude } from "class-transformer";
import { OmitType } from "@nestjs/mapped-types";
import { ApiProperty } from "@nestjs/swagger";
import { CategoryDto } from "./category.dto";

export class CreateCategoryDto extends OmitType(CategoryDto, ['id']) {
    @Exclude()
    @ApiProperty({ description: 'Timestamp when the category was created.', required: false })
    readonly createdAt?: Date;
}
