import {
    Injectable,
    NestMiddleware
} from "@nestjs/common";
import { LoggerService } from "src/common/helpers/logger/logger.service";

@Injectable()
export class ErrorHandlerMiddleware implements NestMiddleware {

    use(req: any, res: any, next: (error?: Error | any) => void): any {
        try {
            next();
        } catch (err: Error | any) {
            console.log("Internal error occurred: " + err.message);
            LoggerService.log("Internal error occurred: " + err.message);
            return res.status(500).json({ error: "Internal error occurred: " + err.message });
        }
    }
}