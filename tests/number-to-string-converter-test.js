const NumberToStringConverter = require('../app/js/number-to-string-converter.js');

describe('NumberToStringConverter', () => {
  const numberToStringConverter = new NumberToStringConverter();

  describe('#convert', () => {

    it('returns the number with the leading spaces filled with the paddingCharacter', () => {
      expect(numberToStringConverter.convert({ number:  0, paddingCharacter: "0", length: 0 })).toEqual(  "0");
      expect(numberToStringConverter.convert({ number:  2, paddingCharacter: "0", length: 0 })).toEqual(  "2");
      expect(numberToStringConverter.convert({ number: 95, paddingCharacter: "0", length: 0 })).toEqual( "95");
      expect(numberToStringConverter.convert({ number:  0, paddingCharacter: "0", length: 1 })).toEqual(  "0");
      expect(numberToStringConverter.convert({ number:  2, paddingCharacter: "0", length: 1 })).toEqual(  "2");
      expect(numberToStringConverter.convert({ number: 95, paddingCharacter: "0", length: 1 })).toEqual( "95");
      expect(numberToStringConverter.convert({ number:  0, paddingCharacter: "0", length: 2 })).toEqual( "00");
      expect(numberToStringConverter.convert({ number:  2, paddingCharacter: "0", length: 2 })).toEqual( "02");
      expect(numberToStringConverter.convert({ number: 95, paddingCharacter: "0", length: 2 })).toEqual( "95");
      expect(numberToStringConverter.convert({ number:  0, paddingCharacter: "0", length: 3 })).toEqual("000");
      expect(numberToStringConverter.convert({ number:  2, paddingCharacter: "0", length: 3 })).toEqual("002");
      expect(numberToStringConverter.convert({ number: 95, paddingCharacter: "0", length: 3 })).toEqual("095");
      expect(numberToStringConverter.convert({ number:  0, paddingCharacter: " ", length: 3 })).toEqual("  0");
      expect(numberToStringConverter.convert({ number:  2, paddingCharacter: " ", length: 3 })).toEqual("  2");
      expect(numberToStringConverter.convert({ number: 95, paddingCharacter: " ", length: 3 })).toEqual(" 95");
    });
  });
});
