import { Session } from './Session';
import { BrowserConfig } from '../config/BrowserConfig';

/**
 * Manages multiple browser sessions.
 */
export class SessionManager {
  private sessions: Map<string, Session> = new Map();

  /** Create and start a new session. */
  async create(config: Partial<BrowserConfig> = {}): Promise<Session> {
    const session = new Session(config);
    await session.start();
    this.sessions.set(session.id, session);
    return session;
  }

  /** Retrieve a session by its ID. */
  get(id: string): Session | undefined {
    return this.sessions.get(id);
  }

  /** Stop and remove a session. */
  async close(id: string): Promise<void> {
    const session = this.sessions.get(id);
    if (!session) return;
    await session.stop();
    this.sessions.delete(id);
  }

  /** Close all active sessions. */
  async closeAll(): Promise<void> {
    for (const id of Array.from(this.sessions.keys())) {
      await this.close(id);
    }
  }
}
