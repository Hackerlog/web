import isEmpty from 'lodash/isEmpty';
import startCase from 'lodash/startCase';

export default class IsRequiredIf {
  constructor(comparedFieldName, comparedFieldValue) {
    this.comparedFieldValue = comparedFieldValue;
    this.comparedFieldName = comparedFieldName;
  }

  validate = (fieldValue, form) => {
    if (
      form.fields[this.comparedFieldName].value === this.comparedFieldValue &&
      isEmpty(fieldValue)
    ) {
      return `This field is required since ${startCase(this.comparedFieldName)} is ${
        this.comparedFieldValue
      }`;
    }
    return null;
  };
}
