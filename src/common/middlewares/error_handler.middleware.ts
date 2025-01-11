import { Injectable, NestMiddleware } from "@nestjs/common";
import { LoggerService } from "src/common/utils/logger/logger.service";

@Injectable()
export class ErrorHandlerMiddleware implements NestMiddleware {
    constructor(private readonly loggerService: LoggerService) { }

    use(req: any, res: any, next: (error?: Error | any) => void) {
        try {
            next();
        } catch (err: Error | any) {
            this.loggerService.log("Internal error occurred: " + err.message);
            return res.status(500).json({ error: "Internal error occurred: " + err.message });
        }
    }
}