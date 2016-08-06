class NumberPromptTrigger {

  constructor({ numberPrompter }) {
    this.numberPrompter = numberPrompter;
  }

  triggerPeriodically(period) {
    this.intervalId = setInterval(() => this.triggerNow(), period);
  }

  triggerNow() {
    this.numberPrompter.promptNumber();
  }
}

module.exports = NumberPromptTrigger;
