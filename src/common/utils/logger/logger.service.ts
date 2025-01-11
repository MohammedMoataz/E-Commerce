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
  private readonly logger: Logger;

  constructor() {
    this.logger = createLogger(winstonCofig);
  }

  log(message: string) {
    this.logger.info({
      timestamp: new Date().toISOString(),
      level: LogLevel.INFO,
      message
    });
  }

  error(message: string) {
    this.logger.error({
      timestamp: new Date().toISOString(),
      level: LogLevel.ERROR,
      message
    });
  }
}
