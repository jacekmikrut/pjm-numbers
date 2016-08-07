const NumberButtonView = require('./number-button-view.js');

class NumberSettingsView {

  constructor({ containerElement, onNumberSelected, onNumberUnselected }) {
    this.onNumberSelected   = onNumberSelected;
    this.onNumberUnselected = onNumberUnselected;

    this.numberButtonViews = Array.from(containerElement.querySelectorAll('button')).map((buttonElement) => {
      return new NumberButtonView({ buttonElement, onClick: (numberButtonView) => this.onNumberButtonClicked(numberButtonView) });
    });
  }

  update(selectedNumbersSet) {
    for (const numberButtonView of this.numberButtonViews) {
      if (selectedNumbersSet.has(numberButtonView.number)) {
        numberButtonView.setSelected();
      }
      else {
        numberButtonView.setUnselected();
      }
    }
  }

  onNumberButtonClicked(clickedNumberButtonView) {
    if (clickedNumberButtonView.isSelected()) {
      this.onNumberUnselected(clickedNumberButtonView.number);
    }
    else {
      this.onNumberSelected(clickedNumberButtonView.number);
    }
  }
}

module.exports = NumberSettingsView;
