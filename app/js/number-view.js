class NumberView {

  constructor({ numberElement, emptyNumbersPoolInfoElement }) {
    this.numberElement = numberElement;
    this.emptyNumbersPoolInfoElement = emptyNumbersPoolInfoElement;
  }

  showNumber(number) {
    this.emptyNumbersPoolInfoElement.classList.add('hidden');
    this.numberElement.textContent = number;
    this.numberElement.classList.remove('hidden');
  }

  showEmptyNumbersPoolInfo() {
    this.numberElement.classList.add('hidden');
    this.emptyNumbersPoolInfoElement.classList.remove('hidden');
  }
}

module.exports = NumberView;
