const NumberSettingsToPoolConverter = require('../app/js/number-settings-to-pool-converter.js');

describe('NumberSettingsToPoolConverter', () => {
  const numberSettingsToPoolConverter = new NumberSettingsToPoolConverter();

  describe('#convert', () => {

    describe('for selected numbers: 2, 5, 14, 30, 70', () => {
      const selectedNumbersSet = new Set([2, 5, 14, 30, 70]);

      it('returns [2, 5, 14, 32, 35, 72, 75]', () => {
        const output = numberSettingsToPoolConverter.convert(selectedNumbersSet);
        expect(output).toEqual(jasmine.arrayContaining([2, 5, 14, 32, 35, 72, 75]));
        expect(output.length).toEqual(7);
      });
    });

    describe('when no numbers are selected', () => {
      const selectedNumbersSet = new Set([]);

      it('returns []', () => {
        const output = numberSettingsToPoolConverter.convert(selectedNumbersSet);
        expect(output.length).toEqual(0);
      });
    });
  });
});
