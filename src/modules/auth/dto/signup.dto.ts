import { ApiProperty } from "@nestjs/swagger";
import { Exclude, Expose } from "class-transformer";
import {
    IsString,
    IsEmail,
    MinLength,
    MaxLength,
    IsNumber,
    IsPhoneNumber
} from 'class-validator';

export class SignUpDto {
    @ApiProperty({ description: 'First name of the user.', required: true, })
    @IsString()
    @MinLength(2)
    @MaxLength(50)
    @Expose()
    firstName: string;

    @ApiProperty({ description: 'Last name of the user.', required: true, })
    @IsString()
    @MinLength(2)
    @MaxLength(50)
    @Expose()
    lastName: string;

    @ApiProperty({ description: 'Email address of the user for authentication.', required: true, })
    @IsEmail()
    @MaxLength(50)
    @Expose()
    email: string;

    @ApiProperty({ description: 'Password for the user account.', required: true, })
    @IsString()
    @MinLength(8)
    @MaxLength(50)
    @Exclude()
    password: string;

    @ApiProperty({ description: 'Username for the user account.', required: true, })
    @IsString()
    @MaxLength(50)
    @Expose()
    username: string;

    @ApiProperty({ description: 'Phone number of the user.', required: true, pattern: '01^[0-2]{1}$+^[0-9]{8}$' })
    @IsString()
    @IsPhoneNumber('EG', { message: 'Phone number must be a valid Egyptian phone number', })
    @Expose()
    phoneNumber: string;

    @ApiProperty({ description: 'Age of the user.', required: true, })
    @IsNumber()
    @Expose()
    age: number;
}
