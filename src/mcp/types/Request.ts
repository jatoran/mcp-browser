export interface MCPRequest {
  /** Unique ID for the request */
  id: string;
  /** Name of the tool being invoked */
  tool: string;
  /** Arbitrary parameters for the tool */
  parameters?: Record<string, any>;
}
