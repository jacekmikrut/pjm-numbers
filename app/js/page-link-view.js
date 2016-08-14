class PageLinkView {

  constructor({ pageLinkElement, onClick }) {
    this.pageLinkElement = pageLinkElement;

    const pageName = this._extractPageName(pageLinkElement);
    this.pageLinkElement.addEventListener('click', (event) => { event.preventDefault(); onClick(pageName); });
  }

  _extractPageName(pageLinkElement) {
    return pageLinkElement.getAttribute('href').replace(/^#|-page$/g, '');
  }
}

module.exports = PageLinkView;
