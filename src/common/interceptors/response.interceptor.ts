import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { map, Observable } from "rxjs";
import { LoggerService } from "../helpers/logger/logger.service";

export class ResponseInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        LoggerService.info(`[${context.getClass().name}] ${context.getHandler().name}`);
        return next.handle().pipe(map((data) => ({
            success: true,
            data
        })));
    }
}