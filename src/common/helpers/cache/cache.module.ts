import { CacheModule } from "@nestjs/cache-manager";
import { Module } from "@nestjs/common";

@Module({
    imports: [
        CacheModule.register({
            ttl: 5, // Cache expiration time (seconds)
            max: 100, // Maximum items in cache
        }),
    ],
})
export class CustomCacheModule { }