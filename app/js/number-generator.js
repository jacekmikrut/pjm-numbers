const RandomIntegerGenerator = require('./random-integer-generator.js');

class NumberGenerator {

  constructor({ numbersPool }) {
    this.randomIntegerGenerator = new RandomIntegerGenerator();
    this.setNumbersPool(numbersPool);
  }

  setNumbersPool(numbersPool) {
    this.numbersPool = numbersPool;
  }

  generate() {
    return this.numbersPool[this.randomIntegerGenerator.generate(0, this.numbersPool.length - 1)];
  }
}

module.exports = NumberGenerator;
