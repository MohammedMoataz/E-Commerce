import { ApiProperty } from "@nestjs/swagger";
import {
    IsNumber,
    IsOptional,
    IsString
} from "class-validator";

export class CategoryDto {
    @ApiProperty({ description: 'Unique identifier for the category.' })
    @IsNumber()
    id: number;

    @ApiProperty({ description: 'Name of the category.' })
    @IsString()
    name: string;

    @ApiProperty({ description: 'A brief description of the category.', required: false })
    @IsOptional()
    @IsString()
    description?: string;
}