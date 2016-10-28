class NumberPatternsToPoolConverter {

  convert(selectedNumberPatternsSet) {
    const selectedNumbersFrom000To009 = this._generateNumbersFrom000To009(selectedNumberPatternsSet);
    const selectedNumbersFrom010To019 = this._generateNumbersFrom010To019(selectedNumberPatternsSet);
    const selectedNumbersFrom020To099 = this._generateNumbersFrom020To099(selectedNumberPatternsSet, selectedNumbersFrom000To009);
    const selectedNumbersFrom000To099 = selectedNumbersFrom000To009.concat(selectedNumbersFrom010To019, selectedNumbersFrom020To099);

    return selectedNumbersFrom000To099;
  }

  _generateNumbersFrom000To009(selectedNumberPatternsSet) {
    return [...selectedNumberPatternsSet]
      .filter((numberPattern) => numberPattern.match(/^\d$/))
      .map((numberPattern) => Number(numberPattern));
  }

  _generateNumbersFrom010To019(selectedNumberPatternsSet) {
    return [...selectedNumberPatternsSet]
      .filter((numberPattern) => numberPattern.match(/^1\d$/))
      .map((numberPattern) => Number(numberPattern));
  }

  _generateNumbersFrom020To099(selectedNumberPatternsSet, selectedNumbersFrom000To009) {
    return [...selectedNumberPatternsSet]
      .filter((numberPattern) => numberPattern.match(/^[2-9]x$/))
      .reduce((numbers, numberPattern) =>
        [...numbers, ...selectedNumbersFrom000To009.map((numberFrom0To9) => Number(numberPattern.replace(/x/, numberFrom0To9)))], []);
  }
}

module.exports = NumberPatternsToPoolConverter;
