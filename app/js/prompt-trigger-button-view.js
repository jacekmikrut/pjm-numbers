const PromptTriggerData = require('./prompt-trigger-data.js');
const PromptTriggerType = require('./prompt-trigger-type.js');

class PromptTriggerButtonView {

  constructor({ buttonElement, onClick }) {
    this.buttonElement = buttonElement;
    this.promptTriggerData = new PromptTriggerData({ type: PromptTriggerType.INTERVAL, value: Number(this.buttonElement.getAttribute('data-prompt-trigger-value')) });
    this.buttonElement.addEventListener('click', () => { this.buttonElement.blur(); onClick(this); });
  }

  setSelected() {
    this.buttonElement.classList.add('selected');
  }

  setUnselected() {
    this.buttonElement.classList.remove('selected');
  }
}

module.exports = PromptTriggerButtonView;
