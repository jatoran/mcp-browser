import { EventBus } from '../../../src/events/EventBus';
import { SystemEvent } from '../../../src/events/EventTypes';

describe('EventBus', () => {
  it('should register and emit events', () => {
    const bus = new EventBus();
    let received: any = null;
    const handler = (data: any) => {
      received = data;
    };
    bus.on('test', handler);
    bus.emit('test', 123);
    expect(received).toBe(123);
  });

  it('should remove handlers', () => {
    const bus = new EventBus();
    let called = false;
    const handler = () => {
      called = true;
    };
    bus.on('a', handler);
    bus.off('a', handler);
    bus.emit('a');
    expect(called).toBe(false);
  });

  it('should emit error events when handler throws', () => {
    const bus = new EventBus();
    let errorCaught = false;
    bus.on(SystemEvent.ERROR, () => {
      errorCaught = true;
    });
    bus.on('boom', () => {
      throw new Error('boom');
    });
    bus.emit('boom');
    expect(errorCaught).toBe(true);
  });
});

