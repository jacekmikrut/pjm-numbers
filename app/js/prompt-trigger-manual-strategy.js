const PromptTriggerStrategy = require('./prompt-trigger-strategy.js');
const PromptTriggerType     = require('./prompt-trigger-type.js');

class PromptTriggerManualStrategy extends PromptTriggerStrategy {

  constructor({ manualPromptTriggerSectionView }) {
    super();
    this.manualPromptTriggerSectionView = manualPromptTriggerSectionView;
  }

  promptTriggerType() {
    return PromptTriggerType.MANUAL;
  }

  activate() {
    this.manualPromptTriggerSectionView.setActivated();
  }

  deactivate() {
    this.manualPromptTriggerSectionView.unsetActivated();
  }
}

module.exports = PromptTriggerManualStrategy;
