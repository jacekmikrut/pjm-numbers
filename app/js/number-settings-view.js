const NumberPatternButtonView = require('./number-pattern-button-view.js');

class NumberSettingsView {

  constructor({ containerElement, onNumberPatternSelected, onNumberPatternUnselected }) {
    this.onNumberPatternSelected   = onNumberPatternSelected;
    this.onNumberPatternUnselected = onNumberPatternUnselected;

    this.numberPatternButtonViews = Array.from(containerElement.querySelectorAll('button')).map((buttonElement) => {
      return new NumberPatternButtonView({ buttonElement, onClick: (numberPatternButtonView) => this.onNumberPatternButtonClicked(numberPatternButtonView) });
    });
  }

  update(selectedNumberPatternsSet) {
    for (const numberPatternButtonView of this.numberPatternButtonViews) {
      if (selectedNumberPatternsSet.has(numberPatternButtonView.numberPattern)) {
        numberPatternButtonView.setSelected();
      }
      else {
        numberPatternButtonView.setUnselected();
      }
    }
  }

  onNumberPatternButtonClicked(clickedNumberPatternButtonView) {
    if (clickedNumberPatternButtonView.isSelected()) {
      this.onNumberPatternUnselected(clickedNumberPatternButtonView.numberPattern);
    }
    else {
      this.onNumberPatternSelected(clickedNumberPatternButtonView.numberPattern);
    }
  }
}

module.exports = NumberSettingsView;
