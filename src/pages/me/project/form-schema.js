import { IsRequired } from '../../../modules/form/validators/index';

const formSchema = [
  {
    name: 'name',
    label: 'Project name?',
    placeholder: 'prettier',
    validators: [new IsRequired()],
    initialValue: '',
  },
  {
    name: 'source',
    label: 'Where is the project located?',
    placeholder: 'Github',
    validators: [new IsRequired()],
    initialValue: '',
  },
  {
    name: 'createdOn',
    label: 'When was the project created?',
    placeholder: '06/2016',
    initialValue: '',
  },
  {
    name: 'description',
    label: 'Explain what this project accomplishes (use Markdown)',
    validators: [new IsRequired()],
    initialValue: '02/17',
  },
  {
    name: 'mainLanguage',
    label: 'What is the main language used? (Choose one)',
    validators: [new IsRequired()],
    placeholder: 'javascript',
    initialValue: '',
  },
  {
    name: 'numOfCommits',
    label: 'How many commits have been made on this project?',
    initialValue: 0,
    placeHolder: 132,
  },
  {
    name: 'numOfContributors',
    label: 'How many contributors have helped with this project?',
    initialValue: null,
    placeHolder: 1,
  },
  {
    name: 'numOfStars',
    label: 'How many stars does the project have?',
    initialValue: null,
    placeHolder: 12,
  },
];

export default formSchema;
