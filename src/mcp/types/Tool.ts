/** Description of a tool exposed via MCP */
export interface MCPTool {
  /** Unique tool name */
  name: string;
  /** Human readable description */
  description: string;
  /** JSON schema describing parameters */
  parametersSchema?: Record<string, any>;
}

export type MCPToolHandler = (params: Record<string, any>) => Promise<any>;
