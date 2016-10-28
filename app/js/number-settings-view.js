const NumberButtonView = require('./number-button-view.js');

class NumberSettingsView {

  constructor({ containerElement, onNumberPatternSelected, onNumberPatternUnselected }) {
    this.onNumberPatternSelected   = onNumberPatternSelected;
    this.onNumberPatternUnselected = onNumberPatternUnselected;

    this.numberButtonViews = Array.from(containerElement.querySelectorAll('button')).map((buttonElement) => {
      return new NumberButtonView({ buttonElement, onClick: (numberButtonView) => this.onNumberButtonClicked(numberButtonView) });
    });
  }

  update(selectedNumberPatternsSet) {
    for (const numberButtonView of this.numberButtonViews) {
      if (selectedNumberPatternsSet.has(numberButtonView.numberPattern)) {
        numberButtonView.setSelected();
      }
      else {
        numberButtonView.setUnselected();
      }
    }
  }

  onNumberButtonClicked(clickedNumberButtonView) {
    if (clickedNumberButtonView.isSelected()) {
      this.onNumberPatternUnselected(clickedNumberButtonView.numberPattern);
    }
    else {
      this.onNumberPatternSelected(clickedNumberButtonView.numberPattern);
    }
  }
}

module.exports = NumberSettingsView;
