import { MISSystemPage } from './app.po';

describe('mis-system App', () => {
  let page: MISSystemPage;

  beforeEach(() => {
    page = new MISSystemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
