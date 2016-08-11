const PromptTriggerButtonView = require('./prompt-trigger-button-view.js');

class PromptTriggerSettingsView {

  constructor({ containerElement, onPromptTriggerDataSelected, initialPromptTriggerData }) {
    this.onPromptTriggerDataSelected = onPromptTriggerDataSelected;

    this.promptTriggerButtonViews = Array.from(containerElement.querySelectorAll('button')).map((buttonElement) => {
      return new PromptTriggerButtonView({ buttonElement, onClick: (promptTriggerButtonView) => this.onPromptTriggerButtonClicked(promptTriggerButtonView) });
    });

    this.selectPromptTriggerData(initialPromptTriggerData);
  }

  onPromptTriggerButtonClicked(clickedPromptTriggerButtonView) {
    this.selectPromptTriggerData(clickedPromptTriggerButtonView.promptTriggerData);
    this.onPromptTriggerDataSelected(clickedPromptTriggerButtonView.promptTriggerData);
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
