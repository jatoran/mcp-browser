import { BaseServer } from "../../src/mcp/server/BaseServer";

/**
 * Simple mock MCP server for tests.
 * Provides start/stop lifecycle and can register tools via BaseServer.
 */
export class MockMCPServer extends BaseServer {
  public started = false;

  /** Start the mock server. */
  async start(): Promise<void> {
    this.started = true;
    this.bus.emit('started');
  }

  /** Stop the mock server. */
  async stop(): Promise<void> {
    this.started = false;
    this.bus.emit('stopped');
  }
}
