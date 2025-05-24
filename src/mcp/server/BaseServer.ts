import { EventBus } from '../../events/EventBus';
import { MCPRequest, MCPResponse, MCPTool, MCPToolHandler, MCPError } from '../types';

/**
 * Base MCP server handling tool registration and routing requests.
 */
export abstract class BaseServer {
  protected tools: Map<string, MCPToolHandler> = new Map();
  protected bus: EventBus;

  constructor(bus?: EventBus) {
    this.bus = bus ?? new EventBus();
  }

  /** Register a tool and its handler. */
  registerTool(tool: MCPTool, handler: MCPToolHandler): void {
    this.tools.set(tool.name, handler);
    this.bus.emit('toolRegistered', tool);
  }

  /** Handle an incoming request and return a response. */
  async handle(request: MCPRequest): Promise<MCPResponse> {
    const handler = this.tools.get(request.tool);
    if (!handler) {
      return {
        id: request.id,
        success: false,
        error: { code: 'NOT_FOUND', message: 'Tool not registered' } as MCPError,
      };
    }
    try {
      const data = await handler(request.parameters ?? {});
      return { id: request.id, success: true, data };
    } catch (err: any) {
      return {
        id: request.id,
        success: false,
        error: { code: 'EXEC_ERROR', message: err.message, details: err },
      };
    }
  }

  /** Start accepting connections. */
  abstract start(): Promise<void>;

  /** Stop server and clean up. */
  abstract stop(): Promise<void>;
}
