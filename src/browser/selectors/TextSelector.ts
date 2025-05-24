import { Page, Locator } from 'playwright';
import { ElementSelector } from './BaseSelector';

/**
 * Selects elements containing the given text.
 */
export class TextSelector implements ElementSelector {
  constructor(private text: string) {}

  select(page: Page): Locator {
    return page.locator(`text=${this.text}`);
  }
}
