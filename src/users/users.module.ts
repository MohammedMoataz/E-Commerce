import { Module } from '@nestjs/common';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UsersRepository } from './users.repository';
import { LoggerService } from 'src/logger/logger.service';

@Module({
  controllers: [UsersController],
  providers: [UsersRepository, UsersService, LoggerService],
  exports: [UsersService],
})

export class UsersModule { }
