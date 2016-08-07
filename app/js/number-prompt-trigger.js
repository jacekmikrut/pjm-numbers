class NumberPromptTrigger {

  constructor({ numberPrompter }) {
    this.numberPrompter = numberPrompter;
  }

  triggerPeriodically(period) {
    if (this.intervalId) { clearInterval(this.intervalId); }
    this.intervalId = setInterval(() => this.triggerNow(), period);
  }

  triggerNow() {
    this.numberPrompter.promptNumber();
  }
}

module.exports = NumberPromptTrigger;
