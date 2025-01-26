import { ApiProperty } from "@nestjs/swagger";
import {
    IsString,
    IsEmail,
    MinLength,
} from 'class-validator';

export class SignInDto {
    @ApiProperty({ description: 'Email address of the user for authentication.' })
    @IsEmail()
    email: string;

    @ApiProperty({ description: 'Password for the user account.' })
    @IsString()
    @MinLength(8)
    password: string;
}
