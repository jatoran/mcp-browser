# AGENTS.md

```markdown
# Agent Development Guide

Welcome, Agent! You are working on the MCP Browser Agent project. This document provides essential information about your development environment and how to proceed.

## ⚠️ CRITICAL ENVIRONMENT NOTICE ⚠️

**NO NPM DEPENDENCIES ARE INSTALLED**

The environment you're working in has:
- Node.js and npm available
- Basic file system access
- NO external packages installed (no TypeScript, no Playwright, no Jest, etc.)

You must develop with this limitation in mind.

## Development Approach Under Constraints

### What You CAN Do:
1. **Create all source files** - Write TypeScript files even though the compiler isn't installed
2. **Create test files** - Write Jest tests even though Jest isn't installed
3. **Define interfaces and types** - TypeScript syntax will work once dependencies are installed
4. **Build module structure** - Create the complete file architecture
5. **Write documentation** - All markdown and comment documentation
6. **Create configuration files** - package.json, tsconfig.json, etc.

### What You CANNOT Do:
1. **Run TypeScript compilation** - `tsc` is not available
2. **Execute tests** - Jest is not installed
3. **Import external packages** - No node_modules exist
4. **Test browser automation** - Playwright is not installed
5. **Use any npm scripts** - Dependencies are missing

### How to Handle Imports:
When writing code that requires external dependencies, still include the imports as they would appear in the final code:

```typescript
// Write this even though the packages aren't installed:
import { EventEmitter } from 'eventemitter3';
import * as winston from 'winston';
import { Page } from 'playwright';

// Your code here...
```

## Testing Strategy Without Dependencies

Since you cannot run tests, you should:

1. **Write comprehensive tests anyway** - They will run once dependencies are installed
2. **Use detailed comments** to explain expected behavior
3. **Create mock implementations** in comments showing expected outcomes
4. **Document test scenarios** thoroughly

Example:
```typescript
// NavigationTools.test.ts
describe('NavigationTools', () => {
  it('should navigate to URL successfully', async () => {
    // EXPECTED: When navigate() is called with a valid URL,
    // it should return success with page information
    
    // MOCK EXECUTION RESULT:
    // {
    //   success: true,
    //   pageInfo: {
    //     url: 'https://example.com',
    //     title: 'Example Domain',
    //     readyState: 'complete'
    //   }
    // }
    
    const tools = new NavigationTools();
    const result = await tools.navigate({ url: 'https://example.com' });
    expect(result.success).toBe(true);
    expect(result.pageInfo.url).toBe('https://example.com');
  });
});
```

## Important Documents

1. **README.md** - High-level project overview and design document
2. **DEV_PLAN.md** - Detailed phased development plan (STILL ACCURATE - follow this plan)
3. **AGENTS.md** - This document

## Project Structure to Create

You should create the full directory structure:

```
src/
├── browser/          # Browser automation modules
├── mcp/             # MCP protocol implementation
├── intelligence/    # NLP and planning
├── integrations/    # External service integrations
├── orchestration/   # Coordination layer
├── features/        # Advanced capabilities
├── ui/              # User interface layer
├── optimization/    # Performance modules
├── learning/        # Adaptive behavior
├── events/          # Event system
├── config/          # Configuration
├── utils/           # Shared utilities
├── interfaces/      # TypeScript interfaces
tests/
├── unit/            # Unit tests
├── integration/     # Integration tests
├── e2e/             # End-to-end tests
└── mocks/           # Mock implementations
```

## Configuration Files to Create

### package.json
Create this with all dependencies listed (even though not installed):

```json
{
  "name": "mcp-browser-agent",
  "version": "0.1.0",
  "description": "MCP Browser Agent - Natural language browser automation",
  "main": "dist/index.js",
  "scripts": {
    "build": "tsc",
    "dev": "nodemon --watch src --ext ts --exec ts-node src/index.ts",
    "test": "jest",
    "test:watch": "jest --watch",
    "type-check": "tsc --noEmit",
    "lint": "eslint src/**/*.ts"
  },
  "dependencies": {
    "axios": "^1.6.0",
    "dotenv": "^16.0.0",
    "eventemitter3": "^5.0.0",
    "joi": "^17.0.0",
    "p-queue": "^8.0.0",
    "playwright": "^1.40.0",
    "uuid": "^9.0.0",
    "winston": "^3.11.0"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^6.0.0",
    "@types/jest": "^29.0.0",
    "@types/node": "^20.0.0",
    "@typescript-eslint/eslint-plugin": "^6.0.0",
    "@typescript-eslint/parser": "^6.0.0",
    "concurrently": "^8.0.0",
    "cross-env": "^7.0.0",
    "eslint": "^8.0.0",
    "jest": "^29.0.0",
    "nodemon": "^3.0.0",
    "prettier": "^3.0.0",
    "ts-jest": "^29.0.0",
    "ts-node": "^10.0.0",
    "typescript": "^5.0.0"
  }
}
```

## Development Guidelines

### 1. Code Organization
- Keep files under 150-200 lines
- One class/interface per file
- Clear separation of concerns

### 2. Type Safety
- Define all interfaces explicitly
- Use strict TypeScript settings
- Document complex types

### 3. Module Pattern
```typescript
// EventBus.ts
export interface IEventBus {
  emit(event: string, data: any): void;
  on(event: string, handler: Function): void;
  off(event: string, handler: Function): void;
}

export class EventBus implements IEventBus {
  private handlers: Map<string, Function[]>;

  constructor() {
    this.handlers = new Map();
  }

  emit(event: string, data: any): void {
    // Implementation
  }

  // ... rest of implementation
}
```

### 4. Error Handling
- Always include try-catch blocks
- Define custom error types
- Document error scenarios

### 5. Documentation
- JSDoc comments for all public methods
- README.md for each major module
- Inline comments for complex logic

## Working Within Limitations

Remember:
1. **You're building for the future** - Code as if dependencies were installed
2. **Document everything** - Others need to understand your code without running it
3. **Follow the plan** - DEV_PLAN.md is still the blueprint
4. **Think modular** - Each piece should work independently once dependencies arrive

## Your Mission

Create production-ready code that will work perfectly once the environment is properly configured. Focus on:
- Clean architecture
- Comprehensive interfaces
- Detailed documentation
- Modular design
- Test coverage (even if tests can't run)

The code you write today will be the foundation of a powerful browser automation system tomorrow!
```

---
