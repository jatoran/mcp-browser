import { BrowserFactory } from '../../../../src/browser/factory/BrowserFactory';

describe('BrowserFactory', () => {
  it('should launch chromium by default', async () => {
    // MOCK: stub Playwright launch methods
    const pw = require('playwright');
    pw.chromium = { launch: async () => 'chromium' };
    const browser = await BrowserFactory.launch();
    expect(browser).toBe('chromium');
  });
});
