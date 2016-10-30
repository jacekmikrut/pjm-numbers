const NumberPatternsToPoolConverter = require('../app/js/number-patterns-to-pool-converter.js');
const NumberToStringConverter = require('../app/js/number-to-string-converter.js');

describe('NumberPatternsToPoolConverter', () => {
  const numberPatternsToPoolConverter = new NumberPatternsToPoolConverter({
    numberToStringConverter: new NumberToStringConverter()
  });

  describe('#convert', () => {

    describe('for selected number patterns: "2", "5", "14", "3x", "7x", "0xx", "5xx"', () => {
      const selectedNumberPatternsSet = new Set(['2', '5', '14', '3x', '7x', '0xx', '5xx']);

      it('returns [2, 5, 14, 32, 35, 72, 75, 502, 505, 514, 532, 535, 572, 575]', () => {
        const output = numberPatternsToPoolConverter.convert(selectedNumberPatternsSet);
        expect(output).toEqual(jasmine.arrayContaining([2, 5, 14, 32, 35, 72, 75, 502, 505, 514, 532, 535, 572, 575]));
        expect(output.length).toEqual(14);
      });
    });

    describe('for selected number patterns: "2", "14", "9x", "6xx"', () => {
      const selectedNumberPatternsSet = new Set(['2', '14', '9x', '6xx']);

      it('returns [602, 614, 692]', () => {
        const output = numberPatternsToPoolConverter.convert(selectedNumberPatternsSet);
        expect(output).toEqual(jasmine.arrayContaining([602, 614, 692]));
        expect(output.length).toEqual(3);
      });
    });

    describe('for selected number patterns: "2", "5", "14", "3x", "7x"', () => {
      const selectedNumberPatternsSet = new Set(['2', '5', '14', '3x', '7x']);

      it('returns []', () => {
        const output = numberPatternsToPoolConverter.convert(selectedNumberPatternsSet);
        expect(output.length).toEqual(0);
      });
    });

    describe('for selected number patterns: "0xx", "7xx"', () => {
      const selectedNumberPatternsSet = new Set(['0xx', '7xx']);

      it('returns []', () => {
        const output = numberPatternsToPoolConverter.convert(selectedNumberPatternsSet);
        expect(output.length).toEqual(0);
      });
    });

    describe('when no number patterns are selected', () => {
      const selectedNumberPatternsSet = new Set([]);

      it('returns []', () => {
        const output = numberPatternsToPoolConverter.convert(selectedNumberPatternsSet);
        expect(output.length).toEqual(0);
      });
    });
  });
});
