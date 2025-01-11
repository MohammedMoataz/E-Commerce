import { Module } from '@nestjs/common';

import { UsersRepository } from './users.repository';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { LoggerService } from 'src/common/helpers/logger/logger.service';

@Module({
  controllers: [UsersController],
  providers: [
    UsersRepository,
    UsersService,
    LoggerService
  ],
  exports: [UsersService],
})

export class UsersModule { }
