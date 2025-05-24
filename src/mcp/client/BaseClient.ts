import { EventBus } from '../../events/EventBus';
import { MCPRequest, MCPResponse } from '../types';

/**
 * Abstract MCP client handling connection lifecycle and message framing.
 */
export abstract class BaseClient {
  protected bus: EventBus;
  protected connected = false;

  constructor(bus?: EventBus) {
    this.bus = bus ?? new EventBus();
  }

  /** Establish connection to remote server. */
  async connect(): Promise<void> {
    if (this.connected) return;
    await this.performConnect();
    this.connected = true;
  }

  /** Close connection to remote server. */
  async disconnect(): Promise<void> {
    if (!this.connected) return;
    await this.performDisconnect();
    this.connected = false;
  }

  /** Check if the client is currently connected. */
  isConnected(): boolean {
    return this.connected;
  }

  /** Send a request and await response. */
  abstract send(request: MCPRequest): Promise<MCPResponse>;

  /** Implementation specific connection logic. */
  protected abstract performConnect(): Promise<void>;

  /** Implementation specific disconnect logic. */
  protected abstract performDisconnect(): Promise<void>;
}
