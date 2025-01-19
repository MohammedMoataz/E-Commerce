import {
    ArgumentsHost,
    Catch,
    HttpException,
    HttpStatus,
    ExceptionFilter
} from "@nestjs/common";
import { Logger } from "winston";

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
    private readonly logger: Logger;

    catch(exception: unknown, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const status = exception instanceof HttpException
            ? exception.getStatus()
            : HttpStatus.INTERNAL_SERVER_ERROR;
        const message = exception instanceof HttpException
            ? exception.getResponse()
            : { message: 'Internal server error' };

        console.debug(exception);
        response.status(status).json({
            success: false,
            statusCode: status,
            error: message,
        });
    }
}
