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

  constructor(fields) {
    runInAction(() => {
      this.fieldNames = fields.map(props => props.name);
      this.fields = fields.reduce(
        (dataset, props) => ({
          ...dataset,
          [props.name]: new Field(props),
        }),
        {}
      );
    });
  }

  @action('reset')
  reset() {
    this.fieldNames.forEach(name => this.fields[name].reset());
  }
}