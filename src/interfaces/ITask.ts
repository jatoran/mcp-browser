/**
 * Defines a unit of work with typed parameters and result.
 */
export interface ITask<TParams = unknown, TResult = unknown> {
  /** Unique task identifier. */
  id: string;
  /** Task input parameters. */
  params: TParams;
  /** Execute the task and return a result. */
  execute(): Promise<TResult>;
}
