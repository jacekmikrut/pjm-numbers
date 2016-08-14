const PageSwitch                    = require('./page-switch.js');
const NumberSettingsToPoolConverter = require('./number-settings-to-pool-converter.js');
const NumberGenerator     = require('./number-generator.js');
const ChangingNumberGenerator = require('./changing-number-generator.js');
const NumberView          = require('./number-view.js');
const PromptTriggerButtonView = require('./prompt-trigger-button-view.js');
const NumberPrompter      = require('./number-prompter.js');
const PromptTriggerManualStrategy   = require('./prompt-trigger-manual-strategy.js');
const PromptTriggerIntervalStrategy = require('./prompt-trigger-interval-strategy.js');
const NumberPromptTrigger = require('./number-prompt-trigger.js');
const PromptTriggerType   = require('./prompt-trigger-type.js');
const PromptTriggerData   = require('./prompt-trigger-data.js');
const PromptTriggerSettingsView = require('./prompt-trigger-settings-view.js');
const ManualPromptTriggerSectionView = require('./manual-prompt-trigger-section-view.js');
const NumberSettings      = require('./number-settings.js');
const NumberSettingsView  = require('./number-settings-view.js');

const INITIAL_PROMPT_TRIGGER_TYPE = PromptTriggerType.INTERVAL;
const INITIAL_PROMPT_TRIGGER_VALUE = 3000;
const INITIALLY_SELECTED_NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 30, 40, 50, 60, 70, 80, 90];

function init() {
  new PageSwitch({
    pageLinkElements: document.querySelectorAll('.page-link'),
    pageElements:     document.querySelectorAll('.page')
  });
  const numberSettingsToPoolConverter = new NumberSettingsToPoolConverter();
  const numberGenerator = new NumberGenerator({ numbersPool: numberSettingsToPoolConverter.convert(INITIALLY_SELECTED_NUMBERS) });
  const changingNumberGenerator = new ChangingNumberGenerator({ numberGenerator });
  const numberView = new NumberView(document.querySelector('#section-number'));
  const numberPrompter = new NumberPrompter({ numberGenerator: changingNumberGenerator, numberView });
  const manualPromptTriggerSectionView = new ManualPromptTriggerSectionView({
    element: document.querySelector('#section-manual-prompt-trigger')
  });
  const numberPromptTrigger = new NumberPromptTrigger({
    numberPrompter,
    promptTriggerStrategies: [
      new PromptTriggerManualStrategy({ manualPromptTriggerSectionView }),
      new PromptTriggerIntervalStrategy()
    ]
  });
  const initialPromptTriggerData = new PromptTriggerData({ type: INITIAL_PROMPT_TRIGGER_TYPE, value: INITIAL_PROMPT_TRIGGER_VALUE });

  new PromptTriggerButtonView({
    buttonElement: document.querySelector('#section-manual-prompt-trigger'),
    onClick: () => numberPromptTrigger.triggerNow()
  });

  new PromptTriggerSettingsView({
    containerElement: document.querySelector('#section-prompt-trigger-settings'),
    initialPromptTriggerData,
    onPromptTriggerDataSelected: (promptTriggerData) => numberPromptTrigger.setPromptTriggerData(promptTriggerData) });

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
  numberPromptTrigger.setPromptTriggerData(initialPromptTriggerData);
}

document.addEventListener('DOMContentLoaded', init);
