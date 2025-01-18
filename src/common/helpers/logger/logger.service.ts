import { Injectable } from '@nestjs/common';
import { createLogger, Logger } from 'winston';
import { winstonCofig } from 'src/infrastructure/config/logger/logger.config';

enum LogLevel {
  INFO = 'INFO',
  ERROR = 'ERROR',
  DEBUG = 'DEBUG',
  WARN = 'WARN',
  VERBOSE = 'VERBOSE',
  SILLY = 'SILLY',
}

@Injectable()
export class LoggerService {
  private static readonly logger: Logger = createLogger(winstonCofig);

  static log(message: string) {
    LoggerService.logger.info({
      timestamp: new Date(),
      level: LogLevel.INFO,
      message
    });
  }

  static error(message: string) {
    LoggerService.logger.error({
      timestamp: new Date(),
      level: LogLevel.ERROR,
      message
    });
  }
}
