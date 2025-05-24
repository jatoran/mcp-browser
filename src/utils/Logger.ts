import { ConsoleFormatter } from './formatters/ConsoleFormatter';
import { FormatFunction } from './formatters/BaseFormatter';

/**
 * Logging levels in increasing order of severity.
 */
export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3,
}

export interface LoggerOptions {
  level?: LogLevel;
  formatter?: FormatFunction;
}

/**
 * Simple console logger with pluggable formatter.
 */
export class Logger {
  private level: LogLevel;
  private formatter: FormatFunction;

  constructor(options: LoggerOptions = {}) {
    this.level = options.level ?? LogLevel.INFO;
    this.formatter = options.formatter ?? ConsoleFormatter;
  }

  /**
   * Log a message using the given level and optional data.
   */
  log(level: LogLevel, message: string, data?: unknown): void {
    if (level < this.level) {
      return;
    }
    const output = this.formatter(level, message, data);
    // eslint-disable-next-line no-console
    console.log(output);
  }

  /** Log a debug message. */
  debug(message: string, data?: unknown): void {
    this.log(LogLevel.DEBUG, message, data);
  }

  /** Log an info message. */
  info(message: string, data?: unknown): void {
    this.log(LogLevel.INFO, message, data);
  }

  /** Log a warning. */
  warn(message: string, data?: unknown): void {
    this.log(LogLevel.WARN, message, data);
  }

  /** Log an error. */
  error(message: string, data?: unknown): void {
    this.log(LogLevel.ERROR, message, data);
  }
}
