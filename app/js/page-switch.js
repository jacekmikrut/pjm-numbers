const PageLinkView = require('./page-link-view.js');
const PageView     = require('./page-view.js');

class PageSwitch {

  constructor({ pageLinkElements, pageElements }) {
    this.pageLinkViews = Array.from(pageLinkElements).map((pageLinkElement) =>
      new PageLinkView({ pageLinkElement, onClick: (pageName) => this.onPageSwitchRequest(pageName) })
    );

    this.pageViews = Array.from(pageElements).map((pageElement) =>
      new PageView({ pageElement })
    );
  }

  onPageSwitchRequest(pageName) {
    for (const pageView of this.pageViews) {
      if (pageView.pageName === pageName) {
        pageView.activate();
      }
      else {
        pageView.deactivate();
      }
    }
  }
}

module.exports = PageSwitch;
