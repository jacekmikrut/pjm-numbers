const PromptTriggerSettingsButtonView = require('./prompt-trigger-settings-button-view.js');

class PromptTriggerSettingsView {

  constructor({ containerElement, onPromptTriggerDataSelected, initialPromptTriggerData }) {
    this.onPromptTriggerDataSelected = onPromptTriggerDataSelected;

    this.promptTriggerSettingsButtonViews = Array.from(containerElement.querySelectorAll('button')).map((buttonElement) => {
      return new PromptTriggerSettingsButtonView({ buttonElement, onClick: (promptTriggerData) => this.onPromptTriggerButtonClicked(promptTriggerData) });
    });

    this.selectPromptTriggerData(initialPromptTriggerData);
  }

  onPromptTriggerButtonClicked(promptTriggerData) {
    this.selectPromptTriggerData(promptTriggerData);
    this.onPromptTriggerDataSelected(promptTriggerData);
  }

  selectPromptTriggerData(promptTriggerData) {
    for (const promptTriggerSettingsButtonView of this.promptTriggerSettingsButtonViews) {
      if (promptTriggerSettingsButtonView.promptTriggerData.isEqual(promptTriggerData)) {
        promptTriggerSettingsButtonView.setSelected();
      }
      else {
        promptTriggerSettingsButtonView.setUnselected();
      }
    }
  }
}

module.exports = PromptTriggerSettingsView;
