import { observable, computed, action, runInAction } from 'mobx';

import Field from './field';

export default class Form {
  /* prettier-ignore */
  @observable fieldNames = [];
  /* prettier-ignore */
  @observable.ref fields = {};

  @computed
  get isValid() {
    return (
      this.fieldNames.map(name => this.fields[name].isValid).filter(isValid => isValid === false)
        .length === 0
    );
  }

  @computed
  get errors() {
    return this.fieldNames.map(name => this.fields[name].errors);
  }

  @computed
  get isDirty() {
    return this.fieldNames.some(name => this.fields[name].isDirty);
  }

  @computed
  get values() {
    return this.fieldNames.reduce(
      (dataset, name) => ({ ...dataset, [name]: this.fields[name].value }),
      {}
    );
  }

  constructor(fields, initialValues = {}) {
    runInAction(() => {
      this.fieldNames = fields.map(props => props.name);
      this.fields = fields.reduce((dataset, props) => {
        let initialValue = props.initialValue;
        if (props.name === 'description') {
          initialValue = { markdown: initialValues[props.name] || initialValue };
        } else {
          initialValue = initialValues[props.name] || initialValue;
        }
        const newProps = { ...props, initialValue };
        return {
          ...dataset,
          [newProps.name]: new Field(this, newProps),
        };
      }, {});
    });
  }

  @action('showErrors')
  showErrors() {
    this.fieldNames.forEach(name => {
      this.fields[name].isTouched = true;
    });
  }

  @action('reset')
  reset() {
    this.fieldNames.forEach(name => this.fields[name].reset());
  }
}
