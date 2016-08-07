const PromptIntervalButtonView = require('./prompt-interval-button-view.js');

class PromptIntervalSettingsView {

  constructor({ containerElement, onPromptIntervalSelected, initialPromptInterval }) {
    this.onPromptIntervalSelected = onPromptIntervalSelected;

    this.promptIntervalButtonViews = Array.from(containerElement.querySelectorAll('button')).map((buttonElement) => {
      return new PromptIntervalButtonView({ buttonElement, onClick: (promptIntervalButtonView) => this.onPromptIntervalButtonClicked(promptIntervalButtonView) });
    });

    this.selectPromptInterval(initialPromptInterval);
  }

  onPromptIntervalButtonClicked(clickedPromptIntervalButtonView) {
    this.selectPromptInterval(clickedPromptIntervalButtonView.promptInterval);
    this.onPromptIntervalSelected(clickedPromptIntervalButtonView.promptInterval);
  }

  selectPromptInterval(promptInterval) {
    for (const promptIntervalButtonView of this.promptIntervalButtonViews) {
      if (promptIntervalButtonView.promptInterval === promptInterval) {
        promptIntervalButtonView.setSelected();
      }
      else {
        promptIntervalButtonView.setUnselected();
      }
    }
  }
}

module.exports = PromptIntervalSettingsView;
