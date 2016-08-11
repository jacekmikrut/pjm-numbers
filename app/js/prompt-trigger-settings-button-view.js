const PromptTriggerData = require('./prompt-trigger-data.js');

class PromptTriggerSettingsButtonView {

  constructor({ buttonElement, onClick }) {
    this.buttonElement = buttonElement;
    this.promptTriggerData = new PromptTriggerData({
      type: this.buttonElement.getAttribute('data-prompt-trigger-type'),
      value: Number(this.buttonElement.getAttribute('data-prompt-trigger-value'))
    });
    this.buttonElement.addEventListener('click', () => { this.buttonElement.blur(); onClick(this.promptTriggerData); });
  }

  setSelected() {
    this.buttonElement.classList.add('selected');
  }

  setUnselected() {
    this.buttonElement.classList.remove('selected');
  }
}

module.exports = PromptTriggerSettingsButtonView;
