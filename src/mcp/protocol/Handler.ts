import { MCPRequest, MCPResponse } from '../types';

/**
 * Simple JSON protocol handler for encoding/decoding MCP messages.
 */
export class ProtocolHandler {
  encodeRequest(req: MCPRequest): string {
    return JSON.stringify(req);
  }

  decodeRequest(data: string): MCPRequest {
    return JSON.parse(data) as MCPRequest;
  }

  encodeResponse(res: MCPResponse): string {
    return JSON.stringify(res);
  }

  decodeResponse(data: string): MCPResponse {
    return JSON.parse(data) as MCPResponse;
  }
}
