/**
 * Represents a modular component that can be started and stopped.
 */
export interface IModule {
  /** Perform any startup logic. */
  init(): Promise<void>;
  /** Perform graceful shutdown operations. */
  shutdown(): Promise<void>;
}
