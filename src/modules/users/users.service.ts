import {
  Inject,
  Injectable
} from '@nestjs/common';
import { UUID } from 'crypto';
import { eq } from 'drizzle-orm';

import db from 'src/infrastructure/config/db/db.config';
import { User } from './entities/user.entity';
import { UsersRepository } from './users.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoggerService } from 'src/common/utils/logger/logger.service';

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
      .from(User)
      .where(eq(User.email, email));
  }

  async update(id: UUID, updateUserDto: UpdateUserDto) {
    return await this.usersRepository.update(id, updateUserDto);
  }

  async remove(id: UUID) {
    return await this.usersRepository.remove(id);
  }
}
