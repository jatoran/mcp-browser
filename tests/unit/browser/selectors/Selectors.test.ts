import { CSSSelector } from '../../../../src/browser/selectors/CSSSelector';
import { XPathSelector } from '../../../../src/browser/selectors/XPathSelector';
import { TextSelector } from '../../../../src/browser/selectors/TextSelector';

describe('Element selectors', () => {
  it('should create locators using page API', () => {
    const page = { locator: (sel: string) => sel } as any;
    const css = new CSSSelector('.btn');
    const xpath = new XPathSelector('//div');
    const text = new TextSelector('Click me');
    expect(css.select(page)).toBe('.btn');
    expect(xpath.select(page)).toBe('xpath=//div');
    expect(text.select(page)).toBe('text=Click me');
  });
});
