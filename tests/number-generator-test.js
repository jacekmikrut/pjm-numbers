const NumberGenerator = require('../app/js/number-generator.js');

describe('NumberGenerator', () => {
  let numberGenerator;

  describe('#generate', () => {

    describe('for numbers pool []', () => {
      const numbersPool = [];

      beforeEach(() => {
        numberGenerator = new NumberGenerator({ numbersPool });
      });

      it('returns undefined', () => {
        for (let i = 0; i < 100; i++) {
          const generatedNumber = numberGenerator.generate();
          expect(generatedNumber).toBeUndefined();
        }
      });
    });

    describe('for numbers pool [1]', () => {
      const numbersPool = [1];

      beforeEach(() => {
        numberGenerator = new NumberGenerator({ numbersPool });
      });

      it('returns 1', () => {
        for (let i = 0; i < 100; i++) {
          const generatedNumber = numberGenerator.generate();
          expect(generatedNumber).toEqual(1);
        }
      });
    });

    describe('for numbers pool [1,3,7]', () => {
      const numbersPool = [1,3,7];

      beforeEach(() => {
        numberGenerator = new NumberGenerator({ numbersPool });
      });

      it('returns 1 or 3 or 7', () => {
        for (let i = 0; i < 100; i++) {
          const generatedNumber = numberGenerator.generate();
          expect(generatedNumber.toString()).toMatch(/^(1|3|7)$/);
        }
      });
    });
  });
});
