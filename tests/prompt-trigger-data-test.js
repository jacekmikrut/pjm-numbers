const PromptTriggerData = require('../app/js/prompt-trigger-data.js');
const PromptTriggerType = require('../app/js/prompt-trigger-type.js');

describe('PromptTriggerData', () => {
  let promptTriggerData, otherPromptTriggerData;

  describe('#isEqual', () => {
    beforeEach(() => {
      promptTriggerData = new PromptTriggerData({
        type: PromptTriggerType.INTERVAL,
        value: 1000
      });
    });

    describe('when the other object is undefined', () => {
      beforeEach(() => {
        otherPromptTriggerData = undefined;
      });
      it('returns false', () => {
        expect(promptTriggerData.isEqual(otherPromptTriggerData)).toBe(false);
      });
    });

    describe('when the other object is a PromptTriggerData and has the same attrs', () => {
      beforeEach(() => {
        otherPromptTriggerData = new PromptTriggerData({
          type: PromptTriggerType.INTERVAL,
          value: 1000
        });
      });
      it('returns true', () => {
        expect(promptTriggerData.isEqual(otherPromptTriggerData)).toBe(true);
      });
    });

    describe('when the other object is a PromptTriggerData and has different attrs', () => {
      beforeEach(() => {
        otherPromptTriggerData = new PromptTriggerData({
          type: PromptTriggerType.INTERVAL,
          value: 2000
        });
      });
      it('returns false', () => {
        expect(promptTriggerData.isEqual(otherPromptTriggerData)).toBe(false);
      });
    });

    describe('when the other object is not a PromptTriggerData and has the same attrs', () => {
      beforeEach(() => {
        otherPromptTriggerData = {
          type: PromptTriggerType.INTERVAL,
          value: 1000
        };
      });
      it('returns false', () => {
        expect(promptTriggerData.isEqual(otherPromptTriggerData)).toBe(false);
      });
    });
  });
});
