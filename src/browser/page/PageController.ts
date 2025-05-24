import { Page } from 'playwright';

/**
 * Wrapper around Playwright page providing high-level navigation helpers.
 */
export class PageController {
  constructor(private page: Page) {}

  /** Navigate to a URL and wait for the page to load. */
  async navigate(url: string): Promise<void> {
    await this.page.goto(url);
  }

  /** Navigate back in history. */
  async back(): Promise<void> {
    await this.page.goBack();
  }

  /** Navigate forward in history. */
  async forward(): Promise<void> {
    await this.page.goForward();
  }

  /** Reload the current page. */
  async reload(): Promise<void> {
    await this.page.reload();
  }

  /** Get the current page URL. */
  getCurrentUrl(): string {
    return this.page.url();
  }

  /** Get the current page title. */
  async getTitle(): Promise<string> {
    return this.page.title();
  }
}
