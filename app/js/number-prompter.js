class NumberPrompter {

  constructor({ numberGenerator, numberView }) {
    this.numberGenerator = numberGenerator;
    this.numberView = numberView;
  }

  promptNumber() {
    this.numberView.update(this.numberGenerator.generate());
  }
}

module.exports = NumberPrompter;
