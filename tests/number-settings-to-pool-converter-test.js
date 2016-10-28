const NumberSettingsToPoolConverter = require('../app/js/number-settings-to-pool-converter.js');

describe('NumberSettingsToPoolConverter', () => {
  const numberSettingsToPoolConverter = new NumberSettingsToPoolConverter();

  describe('#convert', () => {

    describe('for selected number patterns: "2", "5", "14", "3x", "7x"', () => {
      const selectedNumberPatternsSet = new Set(['2', '5', '14', '3x', '7x']);

      it('returns [2, 5, 14, 32, 35, 72, 75]', () => {
        const output = numberSettingsToPoolConverter.convert(selectedNumberPatternsSet);
        expect(output).toEqual(jasmine.arrayContaining([2, 5, 14, 32, 35, 72, 75]));
        expect(output.length).toEqual(7);
      });
    });

    describe('when no number patterns are selected', () => {
      const selectedNumberPatternsSet = new Set([]);

      it('returns []', () => {
        const output = numberSettingsToPoolConverter.convert(selectedNumberPatternsSet);
        expect(output.length).toEqual(0);
      });
    });
  });
});
