class PageView {

  constructor({ pageElement }) {
    this.pageElement = pageElement;
    this.pageName = this._extractPageName(pageElement);
  }

  _extractPageName(pageElement) {
    return pageElement.getAttribute('id').replace(/-page$/, '');
  }

  activate() {
    this.pageElement.classList.add('active');
  }

  deactivate() {
    this.pageElement.classList.remove('active');
  }
}

module.exports = PageView;
