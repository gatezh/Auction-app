import { Auction1Page } from './app.po';

describe('auction1 App', () => {
  let page: Auction1Page;

  beforeEach(() => {
    page = new Auction1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
