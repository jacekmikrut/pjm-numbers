class NumberPromptTrigger {

  constructor({ numberPrompter }) {
    this.numberPrompter = numberPrompter;
  }

  setPromptTriggerData(promptTriggerData) {
    if (this.intervalId) { clearInterval(this.intervalId); }
    this.intervalId = setInterval(() => this.triggerNow(), promptTriggerData.value);
  }

  triggerNow() {
    this.numberPrompter.promptNumber();
  }
}

module.exports = NumberPromptTrigger;
