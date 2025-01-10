import { UUID } from "crypto";

export class UserDto {
    id: UUID;
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    password: string;
    role: string;
    gender: string;
    avatar?: string;
    age?: number;
    phoneNumber?: string;
    address?: string;
    status?: string;
}