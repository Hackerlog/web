import { observable, computed, action, runInAction } from 'mobx';

export default class Field {
  form = null;
  name = '';
  label = '';
  placeholder = '';
  /* prettier-ignore */
  @observable initialValue = null;
  /* prettier-ignore */
  @observable value = null;
  /* prettier-ignore */
  @observable isTouched = false;
  /* prettier-ignore */
  @observable.ref validators = [];

  @computed
  get isValid() {
    return this.errors.length === 0;
  }

  @computed
  get isDirty() {
    return this.initialValue !== this.value;
  }

  @computed
  get errors() {
    return this.validators
      .map(validator => validator.validate(this.value, this.form))
      .filter(result => typeof result === 'string');
  }

  @computed
  get hasErrors() {
    return this.errors.length > 0;
  }

  constructor(form, props) {
    runInAction(() => {
      const { name = '', label = '', placeholder = '', validators = [], initialValue = '' } = props;
      this.form = form;
      this.name = name;
      this.label = label;
      this.placeholder = placeholder;
      this.initialValue = initialValue;
      this.value = initialValue;
      this.addValidator(validators);
    });
  }

  @action('addValidator')
  addValidator(validators) {
    validators.forEach(validator => {
      this.validators.push(validator);
    });
  }

  @action('updateValue')
  updateValue(value) {
    this.value = value;
    this.isTouched = true;
  }

  @action('setInitialValue')
  setInitialValue(value, reset = true) {
    this.initialValue = value;

    if (reset) {
      this.value = value;
      this.isTouched = false;
    }
  }

  @action('reset')
  reset() {
    this.value = this.initialValue;
    this.isTouched = false;
  }
}
