import { Module } from '@nestjs/common';

import { UsersRepository } from './users.repository';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { LoggerService } from 'src/common/helpers/logger/logger.service';
import { CustomCacheModule } from 'src/common/helpers/cache/cache.module';
import { CACHE_MANAGER, CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [CustomCacheModule],
  controllers: [UsersController],
  providers: [
    UsersRepository,
    UsersService,
    LoggerService,
    {
      provide: CACHE_MANAGER,
      useFactory: async () => CacheModule.register(), // Ensure CACHE_MANAGER is provided
    },
  ],
  exports: [UsersService],
})

export class UsersModule { }
