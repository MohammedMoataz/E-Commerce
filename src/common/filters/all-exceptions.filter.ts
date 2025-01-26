import {
    ArgumentsHost,
    Catch,
    HttpException,
    HttpStatus,
    ExceptionFilter
} from "@nestjs/common";
import { LoggerService } from "../helpers/logger/logger.service";

@Catch()
export default class AllExceptionsFilter implements ExceptionFilter {
    catch(exception: ExceptionFilter, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const status = exception instanceof HttpException
            ? exception.getStatus()
            : HttpStatus.INTERNAL_SERVER_ERROR;
        const message = exception instanceof HttpException
            ? exception.getResponse()
            : { message: 'Internal server error' };

        LoggerService.error(exception as unknown as Error);

        if (process.env.NODE_ENV !== 'production') {
            console.log({
                success: false,
                statusCode: status,
                error: message,
                stack: exception,
            });

            return response.status(status).json({
                success: false,
                statusCode: status,
                error: message,
            });
        }

        response.status(status).json({
            success: false,
            statusCode: status,
            error: message,
        });
    }
}
