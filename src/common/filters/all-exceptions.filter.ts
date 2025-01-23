import {
    ArgumentsHost,
    Catch,
    HttpException,
    HttpStatus,
    ExceptionFilter
} from "@nestjs/common";
import { LoggerService } from "../helpers/logger/logger.service";

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const status = exception instanceof HttpException
            ? exception.getStatus()
            : HttpStatus.INTERNAL_SERVER_ERROR;
        const message = exception instanceof HttpException
            ? exception.getResponse()
            : { message: 'Internal server error' };

        LoggerService.debug(`${exception}`);
        response.status(status).json({
            success: false,
            statusCode: status,
            error: message,
        });
    }
}
