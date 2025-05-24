/**
 * Interface for dynamically loaded plugins.
 */
export interface IPlugin {
  /** Human readable plugin name. */
  name: string;
  /** Initialize plugin resources. */
  initialize(): Promise<void>;
}
