import { FormImplementationAngular2Page } from './app.po';

describe('form-implementation-angular2 App', function() {
  let page: FormImplementationAngular2Page;

  beforeEach(() => {
    page = new FormImplementationAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
