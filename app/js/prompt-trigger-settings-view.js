const PromptTriggerButtonView = require('./prompt-trigger-button-view.js');

class PromptTriggerSettingsView {

  constructor({ containerElement, onPromptTriggerDataSelected, initialPromptTriggerData }) {
    this.onPromptTriggerDataSelected = onPromptTriggerDataSelected;

    this.promptTriggerButtonViews = Array.from(containerElement.querySelectorAll('button')).map((buttonElement) => {
      return new PromptTriggerButtonView({ buttonElement, onClick: (promptTriggerData) => this.onPromptTriggerButtonClicked(promptTriggerData) });
    });

    this.selectPromptTriggerData(initialPromptTriggerData);
  }

  onPromptTriggerButtonClicked(promptTriggerData) {
    this.selectPromptTriggerData(promptTriggerData);
    this.onPromptTriggerDataSelected(promptTriggerData);
  }

  selectPromptTriggerData(promptTriggerData) {
    for (const promptTriggerButtonView of this.promptTriggerButtonViews) {
      if (promptTriggerButtonView.promptTriggerData.isEqual(promptTriggerData)) {
        promptTriggerButtonView.setSelected();
      }
      else {
        promptTriggerButtonView.setUnselected();
      }
    }
  }
}

module.exports = PromptTriggerSettingsView;
