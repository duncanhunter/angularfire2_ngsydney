import { AngularfireNgsydneyPage } from './app.po';

describe('angularfire-ngsydney App', () => {
  let page: AngularfireNgsydneyPage;

  beforeEach(() => {
    page = new AngularfireNgsydneyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
