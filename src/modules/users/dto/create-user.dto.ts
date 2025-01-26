import { ApiProperty } from "@nestjs/swagger";
import {
  IsEmail,
  IsEnum,
  IsNumber,
  IsOptional,
  IsPhoneNumber,
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

  @ApiProperty({ description: 'Phone number of the user.', pattern: '^[0-9]{11}$' })
  @IsString()
  @IsPhoneNumber('EG', { message: 'Phone number must be a valid Egyptian phone number', })
  phoneNumber: string;

  @ApiProperty({ description: 'Age of the user.' })
  @IsNumber()
  age: number;

  @ApiProperty({ description: 'Role of the user in the system.' })
  @IsOptional()
  @IsString()
  role?: string;

  @ApiProperty({ description: 'Gender of the user.' })
  @IsOptional()
  @IsEnum(['male', 'female'])
  gender?: string;

  @ApiProperty({ description: 'Profile picture URL of the user.' })
  @IsOptional()
  @IsString()
  avatar?: string;

  @ApiProperty({ description: 'Address of the user.' })
  @IsOptional()
  @IsString()
  address?: string;

  @ApiProperty({ description: 'Status of the user account.' })
  @IsOptional()
  @IsString()
  status?: string;
}
