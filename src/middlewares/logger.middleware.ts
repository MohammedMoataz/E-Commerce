import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";
import { LoggerService } from "src/common/helpers/logger/logger.service";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log(`[${req.method}] ${req.url}`);
        LoggerService.info(`[${req.method}] ${req.url}`);
        next();
    }
}