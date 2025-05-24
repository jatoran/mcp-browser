import { ConnectionManager } from '../../../src/mcp/connections/Manager';
import { BaseClient } from '../../../src/mcp/client/BaseClient';
import { MCPRequest, MCPResponse } from '../../../src/mcp/types';

class DummyClient extends BaseClient {
  protected async performConnect(): Promise<void> {
    this.connected = true;
  }
  protected async performDisconnect(): Promise<void> {
    this.connected = false;
  }
  async send(request: MCPRequest): Promise<MCPResponse> {
    return { id: request.id, success: true };
  }
}

describe('ConnectionManager', () => {
  it('should manage client connections', async () => {
    const manager = new ConnectionManager();
    const client = new DummyClient();
    manager.add(client);
    await manager.connectAll();
    const healthy = await manager.healthCheck();
    expect(healthy).toBe(true);
    await manager.disconnectAll();
    expect(client.isConnected()).toBe(false);
  });
});
