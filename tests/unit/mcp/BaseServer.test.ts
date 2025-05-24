import { BaseServer } from '../../../src/mcp/server/BaseServer';
import { MCPTool } from '../../../src/mcp/types';

class TestServer extends BaseServer {
  async start(): Promise<void> {}
  async stop(): Promise<void> {}
}

describe('BaseServer', () => {
  it('should route requests to registered tools', async () => {
    const server = new TestServer();
    const tool: MCPTool = { name: 'echo', description: 'echo back' };
    server.registerTool(tool, async params => params);
    const resp = await server.handle({ id: '1', tool: 'echo', parameters: { a: 1 } });
    expect(resp.success).toBe(true);
    expect(resp.data).toEqual({ a: 1 });
  });
});
