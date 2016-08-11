class PromptTriggerData {

  constructor({ type, value }) {
    this.type  = type;
    this.value = value;
  }

  isEqual(other) {
    return other instanceof PromptTriggerData &&
      other.type === this.type &&
      other.value === this.value;
  }
}

module.exports = PromptTriggerData;
