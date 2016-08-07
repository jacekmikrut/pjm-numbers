class ChangingNumberGenerator {

  constructor({ numberGenerator }) {
    this.recentlyGeneratedNumber = undefined;
    this.numberGenerator = numberGenerator;
  }

  setNumbersPool(numbersPool) {
    this.numberGenerator.setNumbersPool(numbersPool);
  }

  generate() {
    let newlyGeneratedNumber = this.numberGenerator.generate();

    if (newlyGeneratedNumber === this.recentlyGeneratedNumber && this.numberGenerator.hasMultipleNumbersInPool()) {
      return this.generate();
    }

    this.recentlyGeneratedNumber = newlyGeneratedNumber;
    return newlyGeneratedNumber;
  }
}

module.exports = ChangingNumberGenerator;
