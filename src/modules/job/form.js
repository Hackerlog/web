import { Form } from 'mobx-react-form';
import validatorjs from 'validatorjs';

export default class JobForm extends Form {
  plugins() {
    return { dvr: validatorjs };
  }

  setup() {
    return {
      fields: [
        {
          name: 'companyName',
          label: 'Company Name',
          placeholder: 'Microsoft',
          rules: 'required|string|between:3,100',
          value: '',
        },
      ],
    };
  }

  /*
  Event Hooks
*/
  hooks() {
    return {
      onSuccess(form) {
        // get field values
        console.log('Form Values!', form.values());
      },

      onError(form) {
        // get all form errors
        console.log('All form errors', form.errors());
      },
    };
  }
}
