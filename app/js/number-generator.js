const RandomIntegerGenerator = require('./random-integer-generator.js');
const EmptyNumbersPoolError  = require('./empty-numbers-pool-error.js');

class NumberGenerator {

  constructor({ numbersPool }) {
    this.randomIntegerGenerator = new RandomIntegerGenerator();
    this.setNumbersPool(numbersPool);
  }

  setNumbersPool(numbersPool) {
    this.numbersPool = numbersPool;
  }

  generate() {
    if (this.hasNoNumbersInPool()) { throw new EmptyNumbersPoolError(); }
    return this.numbersPool[this.randomIntegerGenerator.generate(0, this.numbersPool.length - 1)];
  }

  hasMultipleNumbersInPool() {
    return this.numbersPool.length > 1;
  }

  hasNoNumbersInPool() {
    return this.numbersPool.length === 0;
  }
}

module.exports = NumberGenerator;
