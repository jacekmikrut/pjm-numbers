class NumberToStringConverter {

  convert({ number, paddingCharacter, length }) {
    const numberAsString = String(number);
    const background = new Array(length + 1).join(paddingCharacter);
    return background.substring(0, background.length - numberAsString.length) + numberAsString;
  }
}

module.exports = NumberToStringConverter;
