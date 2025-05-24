import { readFileSync } from 'fs';
import { resolve } from 'path';
import { Logger, LogLevel } from '../utils/Logger';
import { GlobalConfig, DEFAULT_GLOBAL_CONFIG } from './schemas/GlobalConfig';

/**
 * Manages application configuration from files and environment variables.
 */
export class ConfigManager {
  private config: GlobalConfig;
  private logger: Logger;

  constructor(options: Partial<GlobalConfig> = {}, logger?: Logger) {
    this.config = { ...DEFAULT_GLOBAL_CONFIG, ...options };
    this.logger = logger ?? new Logger({ level: LogLevel.INFO });
  }

  /**
   * Load configuration values from a JSON file.
   * @param filePath Path to JSON config file.
   */
  loadFromFile(filePath: string): void {
    try {
      const abs = resolve(filePath);
      const data = JSON.parse(readFileSync(abs, 'utf-8')) as Partial<GlobalConfig>;
      this.config = { ...this.config, ...data };
    } catch (err) {
      this.logger.error('Failed to load config file', err);
      throw err;
    }
  }

  /**
   * Override configuration with environment variables using a prefix.
   */
  loadFromEnv(prefix = 'MCP'): void {
    for (const key of Object.keys(this.config)) {
      const envKey = `${prefix}_${key}`.toUpperCase();
      const value = process.env[envKey];
      if (value !== undefined) {
        (this.config as any)[key] = value;
      }
    }
  }

  /** Retrieve a configuration value. */
  get<K extends keyof GlobalConfig>(key: K): GlobalConfig[K] {
    return this.config[key];
  }
}
