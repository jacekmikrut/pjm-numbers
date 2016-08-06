const NumberGenerator     = require('./number-generator.js');
const NumberView          = require('./number-view.js');
const NumberPrompter      = require('./number-prompter.js');
const NumberPromptTrigger = require('./number-prompt-trigger.js');

const PROMPT_PERIOD = 3000;
const MIN_NUMBER =  0;
const MAX_NUMBER = 99;

function init() {
  const numberGenerator = new NumberGenerator({ min: MIN_NUMBER, max: MAX_NUMBER });
  const numberView = new NumberView(document.querySelector('#section-number'));
  const numberPrompter = new NumberPrompter({ numberGenerator, numberView });
  const numberPromptTrigger = new NumberPromptTrigger({ numberPrompter });

  numberPromptTrigger.triggerNow();
  numberPromptTrigger.triggerPeriodically(PROMPT_PERIOD);
}

document.addEventListener('DOMContentLoaded', init);
