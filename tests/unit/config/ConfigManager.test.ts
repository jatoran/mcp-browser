import { ConfigManager } from '../../../src/config/ConfigManager';
import { GlobalConfig } from '../../../src/config/schemas/GlobalConfig';

describe('ConfigManager', () => {
  it('should override defaults with env variables', () => {
    process.env.MCP_LOGLEVEL = 'debug';
    const manager = new ConfigManager();
    manager.loadFromEnv('MCP');
    const level = manager.get('logLevel');
    expect(level).toBe('debug');
  });

  it('should load from file', () => {
    const fs = require('fs');
    const path = require('path');
    const configPath = path.join(__dirname, 'temp.json');
    fs.writeFileSync(configPath, JSON.stringify({ dataDir: '/tmp' }));
    const manager = new ConfigManager();
    manager.loadFromFile(configPath);
    const dir = manager.get('dataDir');
    expect(dir).toBe('/tmp');
    fs.unlinkSync(configPath);
  });
});
