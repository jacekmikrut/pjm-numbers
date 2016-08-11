const NumberSettingsToPoolConverter = require('./number-settings-to-pool-converter.js');
const NumberGenerator     = require('./number-generator.js');
const ChangingNumberGenerator = require('./changing-number-generator.js');
const NumberView          = require('./number-view.js');
const NumberPrompter      = require('./number-prompter.js');
const NumberPromptTrigger = require('./number-prompt-trigger.js');
const PromptTriggerSettingsView = require('./prompt-trigger-settings-view.js');
const NumberSettings      = require('./number-settings.js');
const NumberSettingsView  = require('./number-settings-view.js');

const INITIAL_PROMPT_INTERVAL = 3000;
const INITIALLY_SELECTED_NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 30, 40, 50, 60, 70, 80, 90];

function init() {
  const numberSettingsToPoolConverter = new NumberSettingsToPoolConverter();
  const numberGenerator = new NumberGenerator({ numbersPool: numberSettingsToPoolConverter.convert(INITIALLY_SELECTED_NUMBERS) });
  const changingNumberGenerator = new ChangingNumberGenerator({ numberGenerator });
  const numberView = new NumberView(document.querySelector('#section-number'));
  const numberPrompter = new NumberPrompter({ numberGenerator: changingNumberGenerator, numberView });
  const numberPromptTrigger = new NumberPromptTrigger({ numberPrompter });

  new PromptTriggerSettingsView({
    containerElement: document.querySelector('#section-prompt-trigger-settings'),
    initialPromptInterval: INITIAL_PROMPT_INTERVAL,
    onPromptIntervalSelected: (promptInterval) => numberPromptTrigger.triggerPeriodically(promptInterval) });

  const numberSettingsView = new NumberSettingsView({
    containerElement: document.querySelector('#section-number-settings'),
    onNumberSelected:   (number) => numberSettings.onNumberSelected(number),
    onNumberUnselected: (number) => numberSettings.onNumberUnselected(number)
  });

  const numberSettings = new NumberSettings({
    numberSettingsView,
    selectedNumbers: INITIALLY_SELECTED_NUMBERS,
    numberSettingsToPoolConverter,
    onNumberSelectionChange: (numbersPool) => changingNumberGenerator.setNumbersPool(numbersPool)
  });

  numberPromptTrigger.triggerNow();
  numberPromptTrigger.triggerPeriodically(INITIAL_PROMPT_INTERVAL);
}

document.addEventListener('DOMContentLoaded', init);
