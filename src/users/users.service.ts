import { Injectable } from '@nestjs/common';
import {
  desc,
  eq
} from 'drizzle-orm';

import db from 'src/infrastructure/config/db/db.config';
import { UsersEntity } from './entities/users.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoggerService } from 'src/logger/logger.service';

@Injectable()
export class UsersService {
  constructor(private readonly loggerService: LoggerService) { }

  async create(createUserDto: CreateUserDto) {
    return "users create user with "
  }

  async findAll() {
    this.loggerService.log(`findAll`);
    this.loggerService.error(`indAll`);
    return await db
      .select()
      .from(UsersEntity);
  }

  async findOne(id: string): Promise<any> {
    return await db
      .select()
      .from(UsersEntity)
      .where(eq(UsersEntity.id, id));
  }

  async findOneByEmail(email: string): Promise<any> {
    return await db
      .select()
      .from(UsersEntity)
      .where(eq(UsersEntity.email, email));
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await db
      .update(UsersEntity)
      .set({
        ...updateUserDto,
        passwordHash: updateUserDto.password!,
      })
      .where(eq(UsersEntity.id, id));
  }

  async remove(id: string) {
    return await db
      .delete(UsersEntity)
      .where(eq(UsersEntity.id, id));
  }
}
