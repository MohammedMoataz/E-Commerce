import { Injectable } from '@nestjs/common';
import { desc, eq } from 'drizzle-orm';

import db from 'src/infrastructure/config/drizzle.config';
import { UsersTable } from './entities/users.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  async create(createUserDto: CreateUserDto) {
    return await db
      .insert(UsersTable)
      .values({
        ...createUserDto,
        passwordHash: createUserDto.password
      })
      .returning()
  }

  async findAll() {
    return await db
      .select()
      .from(UsersTable)
      .orderBy(desc(UsersTable._id));
  }

  async findOne(id: string): Promise<any> {
    return await db
      .select()
      .from(UsersTable)
      .where(eq(UsersTable.id, id));
  }

  async findOneByEmail(email: string): Promise<any> {
    return await db
      .select()
      .from(UsersTable)
      .where(eq(UsersTable.email, email));
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await db
      .update(UsersTable)
      .set({
        ...updateUserDto,
        passwordHash: updateUserDto.password!,
      })
      .where(eq(UsersTable.id, id));
  }

  async remove(id: string) {
    return await db
      .delete(UsersTable)
      .where(eq(UsersTable.id, id));
  }
}
