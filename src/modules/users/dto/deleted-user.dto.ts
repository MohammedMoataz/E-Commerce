import { PartialType } from '@nestjs/mapped-types';
import { UserDto } from './user.dto';

export class DeletedUserDto extends PartialType(UserDto) {
    deletedAt?: Date;
}
