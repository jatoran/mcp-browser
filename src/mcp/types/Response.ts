import { MCPError } from './Error';

export interface MCPResponse<T = unknown> {
  /** ID of the corresponding request */
  id: string;
  /** Whether the request succeeded */
  success: boolean;
  /** Response payload if success */
  data?: T;
  /** Error information if failed */
  error?: MCPError;
}
