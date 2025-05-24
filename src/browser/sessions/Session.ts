import { Browser, Page } from 'playwright';
import { v4 as uuidv4 } from 'uuid';
import { BrowserFactory } from '../factory/BrowserFactory';
import { BrowserConfig } from '../config/BrowserConfig';

/**
 * Represents a single browser session with one or more pages.
 */
export class Session {
  readonly id: string;
  private browser?: Browser;
  private pages: Page[] = [];
  private config: Partial<BrowserConfig>;

  constructor(config: Partial<BrowserConfig> = {}) {
    this.id = uuidv4();
    this.config = config;
  }

  /** Start the browser session. */
  async start(): Promise<void> {
    this.browser = await BrowserFactory.launch(this.config);
  }

  /** Close all pages and the underlying browser. */
  async stop(): Promise<void> {
    if (!this.browser) return;
    await this.browser.close();
    this.browser = undefined;
    this.pages = [];
  }

  /** Create a new page within the session. */
  async newPage(): Promise<Page> {
    if (!this.browser) {
      throw new Error('Session not started');
    }
    const page = await this.browser.newPage({ viewport: this.config.viewport });
    this.pages.push(page);
    return page;
  }

  /** Get all pages opened in this session. */
  getPages(): Page[] {
    return this.pages;
  }
}
