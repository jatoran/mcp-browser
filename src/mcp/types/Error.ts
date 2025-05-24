/** Error details for failed MCP responses */
export interface MCPError {
  /** Machine readable error code */
  code: string;
  /** Human readable message */
  message: string;
  /** Optional additional details */
  details?: any;
}
