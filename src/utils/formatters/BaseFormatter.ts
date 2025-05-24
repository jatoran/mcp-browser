import { LogLevel } from '../Logger';

export type FormatFunction = (level: LogLevel, message: string, data?: unknown) => string;
