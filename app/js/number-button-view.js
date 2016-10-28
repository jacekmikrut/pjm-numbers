class NumberButtonView {

  constructor({ buttonElement, onClick }) {
    this.buttonElement = buttonElement;
    this.numberPattern = this.buttonElement.getAttribute('data-number-pattern');
    this.buttonElement.addEventListener('click', () => { this.buttonElement.blur(); onClick(this); });
  }

  isSelected() {
    return this.buttonElement.classList.contains('selected');
  }

  setSelected() {
    this.buttonElement.classList.add('selected');
  }

  setUnselected() {
    this.buttonElement.classList.remove('selected');
  }
}

module.exports = NumberButtonView;
