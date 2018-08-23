import isEmpty from 'lodash/isEmpty';

export default class IsRequired {
  validate = fieldValue => (isEmpty(fieldValue) ? 'This field is required.' : null);
}
