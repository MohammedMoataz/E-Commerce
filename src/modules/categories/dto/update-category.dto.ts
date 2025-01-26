import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class UpdateCategoryDto {
    @ApiProperty({ description: 'Name of the category.' })
    @IsString()
    name: string;

    @ApiProperty({ description: 'A brief description of the category.', required: false })
    @IsOptional()
    @IsString()
    description?: string;
}