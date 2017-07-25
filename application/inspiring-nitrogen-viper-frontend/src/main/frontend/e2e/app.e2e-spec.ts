import { InspiringNitrogenViperPage } from './app.po';

describe('inspiring-nitrogen-viper App', () => {
  let page: InspiringNitrogenViperPage;

  beforeEach(() => {
    page = new InspiringNitrogenViperPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
