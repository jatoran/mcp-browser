import { SessionManager } from '../../../../src/browser/sessions/SessionManager';
import { Session } from '../../../../src/browser/sessions/Session';

class TestSession extends Session {
  async start(): Promise<void> {}
  async stop(): Promise<void> {}
}

describe('SessionManager', () => {
  it('should manage session lifecycle', async () => {
    const manager = new SessionManager();
    // MOCK: use TestSession instead of real Session
    (manager as any).create = async () => {
      const session = new TestSession();
      (manager as any).sessions.set(session.id, session);
      return session;
    };
    const session = await (manager as any).create();
    expect(manager.get(session.id)).toBe(session);
    await manager.close(session.id);
  });
});
