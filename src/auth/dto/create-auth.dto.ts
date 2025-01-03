import {
    IsEmail,
    IsString,
    MaxLength,
    MinLength
} from 'class-validator';

export class SignUpDto {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export class SignInDto {
    email: string;
    password: string;
}

export class ResetPasswordDto {
    email: string;
}