class PromptTriggerButtonView {

  constructor({ buttonElement, onClick }) {
    this.buttonElement = buttonElement;
    this.buttonElement.addEventListener('click', onClick);
  }
}

module.exports = PromptTriggerButtonView;
