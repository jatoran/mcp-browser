/**
 * Global configuration shape for the application.
 */
export interface GlobalConfig {
  logLevel: string;
  dataDir: string;
}

/** Default configuration values. */
export const DEFAULT_GLOBAL_CONFIG: GlobalConfig = {
  logLevel: 'info',
  dataDir: './data',
};
