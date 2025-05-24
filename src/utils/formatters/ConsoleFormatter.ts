import { LogLevel } from '../Logger';
import { FormatFunction } from './BaseFormatter';

/**
 * Default console log formatter.
 */
export const ConsoleFormatter: FormatFunction = (
  level: LogLevel,
  message: string,
  data?: unknown,
): string => {
  const timestamp = new Date().toISOString();
  const levelName = LogLevel[level];
  const base = `[${timestamp}] [${levelName}] ${message}`;
  return data !== undefined ? `${base} ${JSON.stringify(data)}` : base;
};
