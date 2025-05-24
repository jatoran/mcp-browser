import { BaseClient } from '../client/BaseClient';

/**
 * Manages a pool of MCP client connections.
 */
export class ConnectionManager {
  private clients: Set<BaseClient> = new Set();

  /** Add a client to the manager. */
  add(client: BaseClient): void {
    this.clients.add(client);
  }

  /** Remove a client from the manager. */
  remove(client: BaseClient): void {
    this.clients.delete(client);
  }

  /** Connect all registered clients. */
  async connectAll(): Promise<void> {
    for (const client of Array.from(this.clients)) {
      await client.connect();
    }
  }

  /** Disconnect all registered clients. */
  async disconnectAll(): Promise<void> {
    for (const client of Array.from(this.clients)) {
      await client.disconnect();
    }
  }

  /** Simple health check that all clients are connected. */
  async healthCheck(): Promise<boolean> {
    for (const client of Array.from(this.clients)) {
      if (!client.isConnected()) {
        return false;
      }
    }
    return true;
  }
}
