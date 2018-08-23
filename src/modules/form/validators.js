import isEmpty from 'lodash/isEmpty';
import startCase from 'lodash/startCase';

export const json = value => JSON.stringify(value, null, 2);
export const isRequired = value => (isEmpty(value) ? 'This field is required.' : null);

export const isRequiredIf = (value, field, comparedField, comparedFieldValue) => {
  if (field.form.fields[comparedField].value === comparedFieldValue && isEmpty(value)) {
    return `This field is required since ${startCase(comparedField)} is ${comparedFieldValue}`;
  }
  return null;
};
