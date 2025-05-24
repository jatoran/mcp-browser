import { Page, Locator } from 'playwright';
import { ElementSelector } from './BaseSelector';

/**
 * Selects elements using an XPath expression.
 */
export class XPathSelector implements ElementSelector {
  constructor(private expression: string) {}

  select(page: Page): Locator {
    return page.locator(`xpath=${this.expression}`);
  }
}
