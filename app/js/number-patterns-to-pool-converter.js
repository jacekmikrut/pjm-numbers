class NumberPatternsToPoolConverter {

  constructor({ numberToStringConverter }) {
    this.numberToStringConverter = numberToStringConverter;
  }

  convert(selectedNumberPatternsSet) {
    const selectedNumberPatterns = [...selectedNumberPatternsSet];

    const selectedNumbersFrom000To009 = this._generateNumbersFrom000To009(selectedNumberPatterns);
    const selectedNumbersFrom010To019 = this._generateNumbersFrom010To019(selectedNumberPatterns);
    const selectedNumbersFrom020To099 = this._generateNumbersFrom020To099(selectedNumberPatterns, selectedNumbersFrom000To009);
    const selectedNumbersFrom000To999 = this._generateNumbersFrom000To999(selectedNumberPatterns,
      [].concat(selectedNumbersFrom000To009, selectedNumbersFrom010To019, selectedNumbersFrom020To099));

    return selectedNumbersFrom000To999;
  }

  _generateNumbersFrom000To009(selectedNumberPatterns) {
    return selectedNumberPatterns
      .filter((numberPattern) => numberPattern.match(/^\d$/))
      .map((numberPattern) => Number(numberPattern));
  }

  _generateNumbersFrom010To019(selectedNumberPatterns) {
    return selectedNumberPatterns
      .filter((numberPattern) => numberPattern.match(/^1\d$/))
      .map((numberPattern) => Number(numberPattern));
  }

  _generateNumbersFrom020To099(selectedNumberPatterns, selectedNumbersFrom000To009) {
    return selectedNumberPatterns
      .filter((numberPattern) => numberPattern.match(/^[2-9]x$/))
      .reduce((numbers, numberPattern) =>
        [...numbers, ...selectedNumbersFrom000To009.map((numberFrom0To9) => Number(numberPattern.replace(/x/, numberFrom0To9)))], []);
  }

  _generateNumbersFrom000To999(selectedNumberPatterns, selectedNumbersFrom000To099) {
    return selectedNumberPatterns
      .filter((numberPattern) => numberPattern.match(/^[0-9]xx$/))
      .reduce((numbers, numberPattern) =>
        [...numbers, ...selectedNumbersFrom000To099.map((numberFrom000To099) => Number(numberPattern.replace(/xx/, this._convertToString(numberFrom000To099, 2))))], []);
  }

  _convertToString(number, length) {
    return this.numberToStringConverter.convert({ number, paddingCharacter: "0", length });
  }
}

module.exports = NumberPatternsToPoolConverter;
