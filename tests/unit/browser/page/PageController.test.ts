import { PageController } from '../../../../src/browser/page/PageController';

describe('PageController', () => {
  it('should navigate to a URL', async () => {
    const page = { goto: async (url: string) => url, url: () => 'http://test', title: async () => 'title', goBack: async () => {}, goForward: async () => {}, reload: async () => {} } as any;
    const ctrl = new PageController(page);
    await ctrl.navigate('http://example.com');
    expect(ctrl.getCurrentUrl()).toBe('http://test');
  });
});
