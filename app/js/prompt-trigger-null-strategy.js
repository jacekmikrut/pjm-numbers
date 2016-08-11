const PromptTriggerStrategy = require('./prompt-trigger-strategy.js');

class PromptTriggerNullStrategy extends PromptTriggerStrategy {

  promptTriggerType() {
    return undefined;
  }
}

module.exports = PromptTriggerNullStrategy;
