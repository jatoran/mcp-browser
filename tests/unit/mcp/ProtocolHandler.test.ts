import { ProtocolHandler } from '../../../src/mcp/protocol/Handler';
import { MCPRequest } from '../../../src/mcp/types';

describe('ProtocolHandler', () => {
  it('should encode and decode requests', () => {
    const handler = new ProtocolHandler();
    const req: MCPRequest = { id: '1', tool: 'ping' };
    const encoded = handler.encodeRequest(req);
    const decoded = handler.decodeRequest(encoded);
    expect(decoded).toEqual(req);
  });
});
