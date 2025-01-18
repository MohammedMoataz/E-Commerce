import { Module } from '@nestjs/common';

import { UsersRepository } from './users.repository';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { CustomCacheModule } from 'src/common/helpers/cache/cache.module';
import { CACHE_MANAGER, CacheModule } from '@nestjs/cache-manager';
import { LoggerModule } from 'src/common/helpers/logger/logger.module';

@Module({
  imports: [CustomCacheModule, LoggerModule],
  controllers: [UsersController],
  providers: [
    UsersRepository,
    UsersService,
    {
      provide: CACHE_MANAGER,
      useFactory: async () => CacheModule.register(), // Ensure CACHE_MANAGER is provided
    },
  ],
  exports: [UsersService],
})

export class UsersModule { }
