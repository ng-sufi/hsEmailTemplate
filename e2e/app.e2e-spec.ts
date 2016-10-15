import { HsEmailTemplatePage } from './app.po';

describe('hs-email-template App', function() {
  let page: HsEmailTemplatePage;

  beforeEach(() => {
    page = new HsEmailTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
