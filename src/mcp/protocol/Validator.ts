import { MCPRequest, MCPResponse } from '../types';

/**
 * Basic runtime validation for MCP messages.
 * In a full implementation this would use JSON schema validation.
 */
export class Validator {
  validateRequest(req: MCPRequest): boolean {
    return typeof req.id === 'string' && typeof req.tool === 'string';
  }

  validateResponse(res: MCPResponse): boolean {
    return typeof res.id === 'string' && typeof res.success === 'boolean';
  }
}
