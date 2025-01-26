import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";
import { LoggerService } from "src/common/helpers/logger/logger.service";

@Injectable()
export default class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        try {
            LoggerService.info(`[${req.method}] ${req.url}`);
            next();
        } catch (err: Error | any) {
            LoggerService.error(`[${req.method}] ${req.url}`);
            LoggerService.error(err.message);
            return { error: "Internal error occurred: " + err.message };
        }
    }
}