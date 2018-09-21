import { IsRequired, IsRequiredIf } from '../../../modules/form/validators/index';

const formSchema = [
  {
    name: 'companyName',
    label: 'Company name?',
    placeholder: 'Microsoft',
    validators: [new IsRequired()],
    initialValue: '',
  },
  {
    name: 'position',
    label: 'Job title?',
    placeholder: 'Software Engineer',
    validators: [new IsRequired()],
    initialValue: '',
  },
  {
    name: 'isCurrentJob',
    label: 'Current job?',
    placeholder: '',
    initialValue: false,
  },
  {
    name: 'startDate',
    label: 'Start date?',
    validators: [new IsRequired()],
    initialValue: '02/17',
  },
  {
    name: 'endDate',
    label: 'End date?',
    validators: [new IsRequiredIf('isCurrentJob', false)],
    initialValue: '05/18',
  },
  {
    name: 'isRemoteJob',
    label: 'Is this job remote?',
    initialValue: false,
    placeHolder: '',
  },
  {
    name: 'city',
    label: `Company's city?`,
    placeholder: 'Foster City',
    initialValue: '',
    validators: [new IsRequiredIf('isRemoteJob', false)],
  },
  {
    name: 'state',
    label: `Company's state`,
    placeholder: 'CA',
    initialValue: '',
    validators: [new IsRequiredIf('isRemoteJob', false)],
  },
  {
    name: 'description',
    label: 'Write about your job just as you would in your resume (use Markdown)',
    validators: [new IsRequired()],
    initialValue: null,
  },
];

export default formSchema;
