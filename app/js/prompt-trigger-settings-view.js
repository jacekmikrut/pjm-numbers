const PromptTriggerButtonView = require('./prompt-trigger-button-view.js');

class PromptTriggerSettingsView {

  constructor({ containerElement, onPromptIntervalSelected, initialPromptInterval }) {
    this.onPromptIntervalSelected = onPromptIntervalSelected;

    this.promptTriggerButtonViews = Array.from(containerElement.querySelectorAll('button')).map((buttonElement) => {
      return new PromptTriggerButtonView({ buttonElement, onClick: (promptTriggerButtonView) => this.onPromptTriggerButtonClicked(promptTriggerButtonView) });
    });

    this.selectPromptInterval(initialPromptInterval);
  }

  onPromptTriggerButtonClicked(clickedPromptTriggerButtonView) {
    this.selectPromptInterval(clickedPromptTriggerButtonView.promptInterval);
    this.onPromptIntervalSelected(clickedPromptTriggerButtonView.promptInterval);
  }

  selectPromptInterval(promptInterval) {
    for (const promptTriggerButtonView of this.promptTriggerButtonViews) {
      if (promptTriggerButtonView.promptInterval === promptInterval) {
        promptTriggerButtonView.setSelected();
      }
      else {
        promptTriggerButtonView.setUnselected();
      }
    }
  }
}

module.exports = PromptTriggerSettingsView;
