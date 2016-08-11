const PromptTriggerNullStrategy     = require('./prompt-trigger-null-strategy.js');

class NumberPromptTrigger {

  constructor({ numberPrompter, promptTriggerStrategies }) {
    this.numberPrompter = numberPrompter;
    this.promptTriggerStrategies = new Set();
    for (const promptTriggerStrategy of promptTriggerStrategies) {
      this.addPromptTriggerStrategy(promptTriggerStrategy);
    }
    this.promptTriggerStrategy = new PromptTriggerNullStrategy({ promptTrigger: this });
  }

  addPromptTriggerStrategy(promptTriggerStrategy) {
    promptTriggerStrategy.promptTrigger = this;
    this.promptTriggerStrategies.add(promptTriggerStrategy);
  }

  setPromptTriggerData(promptTriggerData) {
    if (promptTriggerData.type !== this.promptTriggerStrategy.promptTriggerType()) {
      this.switchToStrategy(promptTriggerData.type);
    }
    this.promptTriggerStrategy.setPromptTriggerData(promptTriggerData);
  }

  triggerNow() {
    this.numberPrompter.promptNumber();
  }

  switchToStrategy(promptTriggerType) {
    this.promptTriggerStrategy.deactivate();
    this.promptTriggerStrategy = this.findPromptTriggerStrategy(promptTriggerType);
    this.promptTriggerStrategy.activate();
  }

  findPromptTriggerStrategy(promptTriggerType) {
    return [...this.promptTriggerStrategies].find((promptTriggerStrategy) => promptTriggerStrategy.promptTriggerType() === promptTriggerType);
  }
}

module.exports = NumberPromptTrigger;
