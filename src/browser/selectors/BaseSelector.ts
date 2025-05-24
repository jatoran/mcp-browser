import { Page, Locator } from 'playwright';

/**
 * Common interface for locating elements on a page.
 */
export interface ElementSelector {
  /** Return a Playwright locator for the element. */
  select(page: Page): Locator;
}
