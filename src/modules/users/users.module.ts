import { Module } from '@nestjs/common';

import { UsersRepository } from './users.repository';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { LoggerModule } from 'src/common/helpers/logger/logger.module';

@Module({
  controllers: [UsersController],
  providers: [
    UsersRepository,
    UsersService,
  ],
  exports: [UsersService],
})

export class UsersModule { }
