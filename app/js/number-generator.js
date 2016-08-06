const RandomIntegerGenerator = require('./random-integer-generator.js');

class NumberGenerator {

  constructor({ min, max }) {
    this.randomIntegerGenerator = new RandomIntegerGenerator();
    this.min = min;
    this.max = max;
  }

  generate() {
    return this.randomIntegerGenerator.generate(this.min, this.max);
  }
}

module.exports = NumberGenerator;
