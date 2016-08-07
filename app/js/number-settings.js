class NumberSettings {

  constructor({ numberSettingsView, selectedNumbers, numberSettingsToPoolConverter, onNumberSelectionChange }) {
    this.selectedNumbersSet = new Set(selectedNumbers);
    this.numberSettingsView = numberSettingsView;
    this.numberSettingsToPoolConverter = numberSettingsToPoolConverter;
    this.onNumberSelectionChange = onNumberSelectionChange;

    this.notifyObservers();
  }

  onNumberSelected(number) {
    this.selectedNumbersSet.add(number);
    this.notifyObservers();
  }

  onNumberUnselected(number) {
    this.selectedNumbersSet.delete(number);
    this.notifyObservers();
  }

  notifyObservers() {
    this.numberSettingsView.update(this.selectedNumbersSet);
    this.onNumberSelectionChange(this.numbersPool());
  }

  numbersPool() {
    return this.numberSettingsToPoolConverter.convert(this.selectedNumbersSet);
  }
}

module.exports = NumberSettings;
