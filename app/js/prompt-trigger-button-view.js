class PromptTriggerButtonView {

  constructor({ buttonElement, onClick }) {
    this.buttonElement = buttonElement;
    this.promptInterval = Number(this.buttonElement.getAttribute('data-prompt-interval'));
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
