import { ApiProperty } from "@nestjs/swagger";
import {
    IsString,
    IsEmail,
    MinLength,
    MaxLength
} from 'class-validator';

export class SignUpDto {
    @ApiProperty({ description: 'First name of the user.' })
    @IsString()
    @MinLength(2)
    @MaxLength(50)
    firstName: string;

    @ApiProperty({ description: 'Last name of the user.' })
    @IsString()
    @MinLength(2)
    @MaxLength(50)
    lastName: string;

    @ApiProperty({ description: 'Email address of the user for authentication.' })
    @IsEmail()
    email: string;

    @ApiProperty({ description: 'Password for the user account.', minLength: 8 })
    @IsString()
    @MinLength(8)
    password: string;
}


export class SignInDto {
    @ApiProperty({ description: 'Email address of the user for authentication.' })
    @IsEmail()
    email: string;

    @ApiProperty({ description: 'Password for the user account.' })
    @IsString()
    @MinLength(8)
    password: string;
}

export class ResetPasswordDto {
    @ApiProperty({ description: 'Email address of the user to reset the password.' })
    @IsEmail()
    email: string;
}