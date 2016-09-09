const EmptyNumbersPoolError = require('./empty-numbers-pool-error.js');

class NumberPrompter {

  constructor({ numberGenerator, numberView }) {
    this.numberGenerator = numberGenerator;
    this.numberView = numberView;
  }

  promptNumber() {
    try {
      this.numberView.showNumber(this.numberGenerator.generate());
    }
    catch (error) {
      if (error instanceof EmptyNumbersPoolError) {
        this.numberView.showEmptyNumbersPoolInfo();
      }
      else { throw error; }
    }
  }
}

module.exports = NumberPrompter;
