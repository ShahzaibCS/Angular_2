import { DirectiveImpPage } from './app.po';

describe('directive-imp App', function() {
  let page: DirectiveImpPage;

  beforeEach(() => {
    page = new DirectiveImpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
