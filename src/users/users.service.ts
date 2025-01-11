import { Inject, Injectable } from '@nestjs/common';
import {
  eq
} from 'drizzle-orm';

import db from 'src/infrastructure/config/db/db.config';
import { UsersEntity } from './entities/users.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoggerService } from 'src/logger/logger.service';
import { UsersRepository } from './users.repository';
import { UUID } from 'crypto';

@Injectable()
export class UsersService {
  constructor(
    private readonly loggerService: LoggerService,
    @Inject(UsersRepository)
    private readonly usersRepository: UsersRepository
  ) { }

  async create(createUserDto: CreateUserDto) {
    this.loggerService.log(`Creating user: ${createUserDto.email}`);
    return await this.usersRepository.create({
      email: createUserDto.email,
      username: createUserDto.username,
      firstName: createUserDto.firstName,
      lastName: createUserDto.lastName,
      passwordHash: createUserDto.password,
      ...createUserDto,
    });
  }

  async findAll() {
    return await this.usersRepository.findAll();
  }

  async findOne(id: UUID): Promise<any> {
    return await this.usersRepository.findOne(id);
  }

  async findOneByEmail(email: string): Promise<any> {
    return await db
      .select()
      .from(UsersEntity)
      .where(eq(UsersEntity.email, email));
  }

  async update(id: UUID, updateUserDto: UpdateUserDto) {
    return await this.usersRepository.update(id, updateUserDto);
  }

  async remove(id: UUID) {
    return await this.usersRepository.remove(id);
  }
}
