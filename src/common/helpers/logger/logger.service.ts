import { Injectable } from '@nestjs/common';
import { createLogger, Logger } from 'winston';
import { winstonConfig } from 'src/infrastructure/config/logger/logger.config';

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
  private static readonly logger: Logger = createLogger(winstonConfig);

  static info(message: string) {
    LoggerService.logger.info({ message });
  }

  static error(message: string) {
    LoggerService.logger.error({ message });
  }

  static debug(message: string) {
    LoggerService.logger.debug({ message });
  }

  static warn(message: string) {
    LoggerService.logger.warn({ message });
  }

  static verbose(message: string) {
    LoggerService.logger.verbose({ message });
  }

  static silly(message: string) {
    LoggerService.logger.silly({ message });
  }
}
