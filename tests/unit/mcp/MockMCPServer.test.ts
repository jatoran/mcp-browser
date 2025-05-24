import { MockMCPServer } from '../../mocks/MockMCPServer';
import { MCPRequest } from '../../../src/mcp/types';

describe('MockMCPServer', () => {
  it('should start and stop correctly', async () => {
    const server = new MockMCPServer();
    await server.start();
    expect(server.isRunning()).toBe(true);
    await server.stop();
    expect(server.isRunning()).toBe(false);
  });

  it('should handle registered tools', async () => {
    const server = new MockMCPServer();
    server.register('ping', 'responds with pong', async () => 'pong');
    await server.start();
    const request: MCPRequest = { id: '1', tool: 'ping' };
    const response = await server.handle(request);
    expect(response.success).toBe(true);
    expect(response.data).toBe('pong');
  });
});
