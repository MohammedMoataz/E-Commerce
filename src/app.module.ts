import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { DrizzleModule } from './infrastructure/drizzle/drizzle.module';

@Module({
  imports: [UsersModule, DrizzleModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class AppModule { }
