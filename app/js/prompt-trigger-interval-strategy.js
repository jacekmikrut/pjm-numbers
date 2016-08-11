const PromptTriggerStrategy = require('./prompt-trigger-strategy.js');
const PromptTriggerType     = require('./prompt-trigger-type.js');

class PromptTriggerIntervalStrategy extends PromptTriggerStrategy {

  promptTriggerType() {
    return PromptTriggerType.INTERVAL;
  }

  setPromptTriggerData(promptTriggerData) {
    this.setInterval(promptTriggerData.value);
  }

  deactivate() {
    if (this.intervalId) { clearInterval(this.intervalId); }
  }

  setInterval(interval) {
    if (this.intervalId) { clearInterval(this.intervalId); }
    this.intervalId = setInterval(() => this.promptTrigger.triggerNow(), interval);
  }
}

module.exports = PromptTriggerIntervalStrategy;
