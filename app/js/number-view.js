class NumberView {

  constructor(element) {
    this.element = element;
  }

  update(number) {
    this.element.textContent = number;
  }
}

module.exports = NumberView;
