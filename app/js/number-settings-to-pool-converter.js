class NumberSettingsToPoolConverter {

  convert(selectedNumbersSet) {
    const selectedNumbersLessThanTen = [...selectedNumbersSet].filter((number) => number < 10);

    return [...selectedNumbersSet].reduce((pool, number) => {
      if (number < 20) {
        return [...pool, number];
      }
      else {
        return [...pool, ...selectedNumbersLessThanTen.map((digit) => number + digit)];
      }
    }, []);
  }
}

module.exports = NumberSettingsToPoolConverter;
