import { EventHandler, SystemEvent } from './EventTypes';

export interface IEventBus {
  emit(event: string, data?: any): void;
  on(event: string, handler: EventHandler): void;
  off(event: string, handler: EventHandler): void;
}

/**
 * Simple in-memory event bus implementing pub/sub pattern.
 */
export class EventBus implements IEventBus {
  private handlers: Map<string, Set<EventHandler>>;

  constructor() {
    this.handlers = new Map();
  }

  /**
   * Emit an event with optional data payload.
   * Handlers are executed sequentially in registration order.
   */
  emit(event: string | SystemEvent, data?: any): void {
    const eventHandlers = this.handlers.get(event);
    if (!eventHandlers) {
      return;
    }
    for (const handler of Array.from(eventHandlers)) {
      try {
        handler(data);
      } catch (err) {
        // Emit internal error event so listeners can react
        const errorHandlers = this.handlers.get(SystemEvent.ERROR);
        if (errorHandlers && event !== SystemEvent.ERROR) {
          for (const errorHandler of Array.from(errorHandlers)) {
            try {
              errorHandler(err);
            } catch {
              // swallow secondary errors
            }
          }
        }
      }
    }
  }

  /**
   * Register an event handler for the specified event.
   */
  on(event: string | SystemEvent, handler: EventHandler): void {
    if (!this.handlers.has(event)) {
      this.handlers.set(event, new Set());
    }
    this.handlers.get(event)!.add(handler);
  }

  /**
   * Remove a previously registered event handler.
   */
  off(event: string | SystemEvent, handler: EventHandler): void {
    const set = this.handlers.get(event);
    if (set) {
      set.delete(handler);
      if (set.size === 0) {
        this.handlers.delete(event);
      }
    }
  }
}

