import { Logger, LogLevel } from '../../../src/utils/Logger';
import { FormatFunction } from '../../../src/utils/formatters/BaseFormatter';

describe('Logger', () => {
  it('should respect log level filtering', () => {
    const messages: string[] = [];
    const formatter: FormatFunction = () => {
      return 'formatted';
    };
    const logger = new Logger({ level: LogLevel.WARN, formatter });
    // Override console.log
    // MOCK IMPLEMENTATION: collect outputs instead of printing
    (console as any).log = (msg: string) => messages.push(msg);
    logger.info('info');
    logger.warn('warn');
    expect(messages.length).toBe(1);
    expect(messages[0]).toBe('formatted');
  });
});
