/** Generic resource reference used in MCP */
export interface MCPResource {
  /** Type of the resource (e.g., 'page', 'image') */
  type: string;
  /** Resource location URL */
  url: string;
  /** Optional metadata about the resource */
  metadata?: Record<string, any>;
}
