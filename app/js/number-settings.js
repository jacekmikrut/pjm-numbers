class NumberSettings {

  constructor({ numberSettingsView, selectedNumberPatterns, numberSettingsToPoolConverter, onNumberSelectionChange }) {
    this.selectedNumberPatternsSet = new Set(selectedNumberPatterns);
    this.numberSettingsView = numberSettingsView;
    this.numberSettingsToPoolConverter = numberSettingsToPoolConverter;
    this.onNumberSelectionChange = onNumberSelectionChange;

    this.notifyObservers();
  }

  onNumberPatternSelected(numberPattern) {
    this.selectedNumberPatternsSet.add(numberPattern);
    this.notifyObservers();
  }

  onNumberPatternUnselected(numberPattern) {
    this.selectedNumberPatternsSet.delete(numberPattern);
    this.notifyObservers();
  }

  notifyObservers() {
    this.numberSettingsView.update(this.selectedNumberPatternsSet);
    this.onNumberSelectionChange(this.numbersPool());
  }

  numbersPool() {
    return this.numberSettingsToPoolConverter.convert(this.selectedNumberPatternsSet);
  }
}

module.exports = NumberSettings;
