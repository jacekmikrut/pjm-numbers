class ManualPromptTriggerSectionView {

  constructor({ element }) {
    this.element = element;
  }

  setActivated() {
    this.element.classList.add('active');
  }

  unsetActivated() {
    this.element.classList.remove('active');
  }
}

module.exports = ManualPromptTriggerSectionView;
