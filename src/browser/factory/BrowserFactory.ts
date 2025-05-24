import { Browser, chromium, firefox, webkit } from 'playwright';
import { BrowserConfig, DEFAULT_BROWSER_CONFIG } from '../config/BrowserConfig';

/**
 * Factory for creating Playwright browser instances.
 */
export class BrowserFactory {
  /**
   * Launch a browser using the given configuration.
   */
  static async launch(config: Partial<BrowserConfig> = {}): Promise<Browser> {
    const options: BrowserConfig = { ...DEFAULT_BROWSER_CONFIG, ...config };
    switch (options.browserType) {
      case 'firefox':
        return firefox.launch({
          headless: options.headless,
          executablePath: options.executablePath,
          args: options.args,
        });
      case 'webkit':
        return webkit.launch({
          headless: options.headless,
          executablePath: options.executablePath,
          args: options.args,
        });
      default:
        return chromium.launch({
          headless: options.headless,
          executablePath: options.executablePath,
          args: options.args,
        });
    }
  }
}
