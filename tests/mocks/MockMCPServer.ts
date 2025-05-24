import { BaseServer } from '../../src/mcp/server/BaseServer';
import { EventBus } from '../../src/events/EventBus';
import { MCPToolHandler, MCPTool } from '../../src/mcp/types';

/**
 * Simple in-memory mock MCP server for testing purposes.
 * It extends BaseServer and exposes start/stop lifecycle methods
 * without any network connectivity.
 */
export class MockMCPServer extends BaseServer {
  private started = false;

  constructor(bus?: EventBus) {
    super(bus);
  }

  /** Start the mock server. */
  async start(): Promise<void> {
    this.started = true;
    this.bus.emit('serverStarted');
  }

  /** Stop the mock server. */
  async stop(): Promise<void> {
    this.started = false;
    this.bus.emit('serverStopped');
  }

  /**
   * Convenience helper to register a tool with a given handler.
   */
  register(name: string, description: string, handler: MCPToolHandler): void {
    const tool: MCPTool = { name, description };
    super.registerTool(tool, handler);
  }

  /**
   * Indicates whether the server has been started.
   */
  isRunning(): boolean {
    return this.started;
  }
}
