class NumbersPoolDependentNumberPromptTrigger {

  constructor({ numberPromptTrigger, numbersPool }) {
    this.numberPromptTrigger = numberPromptTrigger;
    this.numbersPool = numbersPool;
  }

  learnThatNumbersPoolWasSelected(numbersPool) {
    const originalNumbersPool = this.numbersPool;
    this.numbersPool = numbersPool;

    if (originalNumbersPool.length === 0 && numbersPool.length  >  0) { this.numberPromptTrigger.triggerNow(); }
    if (originalNumbersPool.length  >  0 && numbersPool.length === 0) { this.numberPromptTrigger.triggerNow(); }
  }
}

module.exports = NumbersPoolDependentNumberPromptTrigger;
