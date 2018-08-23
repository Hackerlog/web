import { Form } from 'mobx-react-form';

import { states } from '../../utils/constants';

export default class CreateJobForm extends Form {
  static isRequired = ({ field }) => {
    const isEmpty = !!field.value;
    return [isEmpty, 'This field is required.'];
  };

  static requiredIf = (target, value) => ({ field, form }) => {
    const isRequired = form.$(target).value !== value;
    return [isRequired, `The ${field.label} is required since ${form.$(target).label} is ${value}`];
  };

  setup() {
    return {
      fields: {
        companyName: {
          label: 'Company name?',
          placeholder: 'Microsoft',
          validators: [CreateJobForm.isRequired],
          type: 'text',
          value: '',
        },
        position: {
          label: 'Job title?',
          placeholder: 'Software Engineer',
          validators: [CreateJobForm.isRequired],
          type: 'text',
          value: '',
        },
        isCurrentJob: {
          label: 'Current job?',
          type: 'checkbox',
          value: false,
        },
        startDate: {
          label: 'Start date?',
          placeholder: 'July 2016',
          validators: [CreateJobForm.isRequired],
          type: 'date',
          value: '',
        },
        endDate: {
          label: 'End date?',
          placeholder: 'September 2018',
          validators: [CreateJobForm.requiredIf('isCurrentJob', false)],
          type: 'date',
          value: '',
        },
        isRemoteJob: {
          label: 'Is this job remote?',
          type: 'checkbox',
          value: false,
        },
        city: {
          label: `Company's city?`,
          placeholder: 'Fost City',
          validators: [CreateJobForm.requiredIf('isRemoteJob', false)],
          type: 'text',
          value: '',
        },
        state: {
          label: `Company's state`,
          placeholder: 'CA',
          validators: [CreateJobForm.requiredIf('isRemoteJob', false)],
          type: 'select',
          options: states,
          value: '',
        },
        description: {
          label: 'Write about your job just as you would in your resume',
          validators: [CreateJobForm.isRequired],
          type: 'input',
          value: `# Markdown Support
          Feel free to user _markdown_ here to really make your job description shine!`,
        },
      },
    };
  }

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
