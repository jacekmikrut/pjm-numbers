const RandomIntegerGenerator = require('../app/js/random-integer-generator.js');

describe('RandomIntegerGenerator', () => {
  const randomIntegerGenerator = new RandomIntegerGenerator();

  describe('#generate', () => {

    describe('for range: 1, 1', () => {
      const min = 1, max = 1;

      it('generates an integer number within the given range', () => {
        for (let i = 0; i < 100; i++) {
          const generatedNumber = randomIntegerGenerator.generate(min, max);
          expect(generatedNumber).toBeGreaterThan(0);
          expect(generatedNumber).toBeLessThan(2);
        }
      });
    });

    describe('for range: 0, 5', () => {
      const min = 0, max = 5;

      it('generates an integer number within the given range', () => {
        for (let i = 0; i < 100; i++) {
          const generatedNumber = randomIntegerGenerator.generate(min, max);
          expect(generatedNumber).toBeGreaterThan(-1);
          expect(generatedNumber).toBeLessThan(6);
        }
      });
    });
  });
});
