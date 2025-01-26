import {
    CallHandler,
    ExecutionContext,
    NestInterceptor,
    UseInterceptors
} from "@nestjs/common";
import {
    map,
    Observable
} from "rxjs";
import { LoggerService } from "../helpers/logger/logger.service";
import {
    ClassConstructor,
    plainToClass
} from "class-transformer";

export const Serialize = (dto: ClassConstructor<any>) =>
    UseInterceptors(new SerializeInterceptor(dto));

export default class SerializeInterceptor implements NestInterceptor {
    constructor(private readonly dto: ClassConstructor<any>) { }

    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        LoggerService.info(`[${context.getClass().name}] ${context.getHandler().name}`);
        return next.handle().pipe(map((data) => ({
            success: true,
            data: plainToClass(this.dto, data, {
                excludeExtraneousValues: true,
            })
        })));
    }
}