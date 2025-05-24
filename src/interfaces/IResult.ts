/**
 * Standard result object returned by tasks and operations.
 */
export interface IResult<TData = unknown> {
  /** Whether the operation succeeded. */
  success: boolean;
  /** Result payload on success. */
  data?: TData;
  /** Error object when success is false. */
  error?: Error;
}
