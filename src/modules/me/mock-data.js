export const job = {
  id: 1,
  companyName: 'Guidewire Inc.',
  position: 'Software Engineer',
  startDate: '07/2017',
  endDate: null,
  isCurrentJob: true,
  city: 'Birmingham',
  state: 'AL',
  description: `*[Company 1][] description, particularly if not well-known.*
  
  **Position Title (include alternate titles in parentheses)** (Start Date - End Date)
  
  Lorem ipsum dolor sit amet consectetur adipiscing elit ad urna litora, nascetur integer tellus eu cursus vulputate neque nisl rhoncus, tristique risus donec hac arcu pretium enim platea non. Cursus elementum aptent ultrices dapibus dignissim justo imperdiet nibh ut, parturient curabitur pharetra libero nunc neque sed netus, arcu suscipit potenti ad at interdum quisque suspendisse.
  
  - Accomplishment that contains **bold text**.
  - Accomplishment
  - Accomplishment
  - Accomplishment
  `,
};

export const project = {
  id: 1,
  name: 'react-components',
  source: 'github',
  createdOn: 'Feb 2016',
  description: `Licuit Cycnus titulum cortice. Ales gravis illo, tenebras, rupisset
  [in](http://tamen-quarum.io/) lucemque, Phinea? Cytherea novitate, capiat
  umeroque at maius *hora quoque urbe* thalamoque, commonuit iuvenci e porto.
  Alcmenae et saepe.`,
  mainLanguage: 'javascript',
  numOfCommits: 212,
  numOfContributors: 7,
  numOfStars: 14,
};

export const user = {
  id: 1,
  token: 'some-secret-token',
  firstName: 'John',
  lastName: 'Davidson',
  email: 'jon@davidson.com',
  title: 'Software Engineer',
  website: 'https://davidson.com',
  keywords: ['javascript', 'aws', 'node', 'react', 'vue', 'go', 'mysql', 'postgres', 'ubuntu'],
  twitterUrl: 'https://twitter.com/deez',
  linkedInUrl: 'https://linkedin.com/deez',
  jobs: [job],
  projects: [project],
};
