import { MockMCPServer } from '../../mocks/MockMCPServer';
import { MCPTool } from '../../../src/mcp/types';

describe('MockMCPServer', () => {
  it('should start and stop correctly', async () => {
    const server = new MockMCPServer();
    await server.start();
    expect(server.started).toBe(true);
    await server.stop();
    expect(server.started).toBe(false);
  });

  it('should handle registered tool requests', async () => {
    const server = new MockMCPServer();
    const tool: MCPTool = { name: 'ping', description: 'return pong' };
    server.registerTool(tool, async () => 'pong');
    const resp = await server.handle({ id: '1', tool: 'ping' });
    expect(resp.success).toBe(true);
    expect(resp.data).toBe('pong');
  });
});
