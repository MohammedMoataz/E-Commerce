import { ApiProperty } from "@nestjs/swagger";
import {
  IsEmail,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from "class-validator";

export class CreateUserDto {
  @ApiProperty({ description: 'First name of the user.' })
  @IsString()
  firstName: string;

  @ApiProperty({ description: 'Last name of the user.' })
  @IsString()
  lastName: string;

  @ApiProperty({ description: 'Email address of the user.' })
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'Username for the user.' })
  @IsString()
  username: string;

  @ApiProperty({ description: 'Password for the user.' })
  @IsString()
  password: string;

  @ApiProperty({ description: 'Role of the user in the system.' })
  @IsString()
  role: string;

  @ApiProperty({ description: 'Gender of the user.' })
  @IsEnum(['male', 'female'])
  gender: string;

  @ApiProperty({ description: 'Profile picture URL of the user.', required: false })
  @IsOptional()
  @IsString()
  avatar?: string;

  @ApiProperty({ description: 'Age of the user.', required: false })
  @IsOptional()
  @IsNumber()
  age?: number;

  @ApiProperty({ description: 'Phone number of the user.', required: false })
  @IsOptional()
  @IsString()
  phoneNumber?: string;

  @ApiProperty({ description: 'Address of the user.', required: false })
  @IsOptional()
  @IsString()
  address?: string;

  @ApiProperty({ description: 'Status of the user account.', required: false })
  @IsOptional()
  @IsString()
  status?: string;
}
