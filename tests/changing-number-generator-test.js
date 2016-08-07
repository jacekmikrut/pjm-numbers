const ChangingNumberGenerator = require ('../app/js/changing-number-generator.js');

describe('ChangingNumberGenerator', () => {
  let numberGenerator, changingNumberGenerator;

  describe('#generate', () => {

    beforeEach(() => {
      numberGenerator = {
        generate() {},
        hasMultipleNumbersInPool() {}
      };

      changingNumberGenerator = new ChangingNumberGenerator({ numberGenerator });
    });

    describe('when there are multiple numbers in the pool', () => {
      beforeEach(() => {
        spyOn(numberGenerator, 'hasMultipleNumbersInPool').and.returnValue(true);
      });

      describe('when the associated number generator generates the same numbers in a row', () => {
        beforeEach(() => {
          spyOn(numberGenerator, 'generate').and.returnValues(1, 1, 1, 2, 2, 3, 3, 2, 1);
        });

        it('discards the duplicates and returns changing numbers', () => {
          expect(changingNumberGenerator.generate()).toEqual(1);
          expect(changingNumberGenerator.generate()).toEqual(2);
          expect(changingNumberGenerator.generate()).toEqual(3);
          expect(changingNumberGenerator.generate()).toEqual(2);
          expect(changingNumberGenerator.generate()).toEqual(1);
        });
      });
    });

    describe('when there is only one number in the pool', () => {
      beforeEach(() => {
        spyOn(numberGenerator, 'hasMultipleNumbersInPool').and.returnValue(false);
      });

      describe('when the associated number generator generates the same number in a row', () => {
        beforeEach(() => {
          spyOn(numberGenerator, 'generate').and.returnValues(1, 1, 1, 1);
        });

        it('returns that same number multiple times in a row', () => {
          expect(changingNumberGenerator.generate()).toEqual(1);
          expect(changingNumberGenerator.generate()).toEqual(1);
          expect(changingNumberGenerator.generate()).toEqual(1);
          expect(changingNumberGenerator.generate()).toEqual(1);
        });
      });
    });
  });
});
