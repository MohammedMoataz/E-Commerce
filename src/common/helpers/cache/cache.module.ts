import { CacheModule } from "@nestjs/cache-manager";
import { Module } from "@nestjs/common";
import { redisStore } from "cache-manager-redis-store";

@Module({
    imports: [
        CacheModule.register({
            ttl: 5, // Cache expiration time (seconds)
            max: 100, // Maximum items in cache
        }),
    ],
})
export class CustomCacheModule { }