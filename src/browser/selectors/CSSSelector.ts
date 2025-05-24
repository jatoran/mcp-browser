import { Page, Locator } from 'playwright';
import { ElementSelector } from './BaseSelector';

/**
 * Selects elements using a CSS selector string.
 */
export class CSSSelector implements ElementSelector {
  constructor(private selector: string) {}

  select(page: Page): Locator {
    return page.locator(this.selector);
  }
}
