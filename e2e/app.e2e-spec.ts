import { ComicsPage } from './app.po';

describe('comics App', () => {
  let page: ComicsPage;

  beforeEach(() => {
    page = new ComicsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
