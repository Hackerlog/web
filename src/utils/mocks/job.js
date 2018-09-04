/* eslint-disable import/no-extraneous-dependencies */
const Chance = require('chance');

const chance = new Chance();

const jobTitles = ['Software Engineer', 'Web Developer', 'App Developer', 'Mobile App Developer'];

const job = () => ({
  id: chance.integer({ min: 0, max: 99 }),
  companyName: chance.company(),
  position: chance.pickone(jobTitles),
  startDate: `${chance.month({ raw: true }).numeric}/${chance.year({
    min: 2000,
    max: new Date().getFullYear() - 1,
  })}`,
  endDate: null,
  isCurrentJob: chance.bool(),
  city: chance.city(),
  state: chance.state(),
  description: `*[Company 1][] description, particularly if not well-known.*
  
  **Position Title (include alternate titles in parentheses)** (Start Date - End Date)
  
  Lorem ipsum dolor sit amet consectetur adipiscing elit ad urna litora, nascetur integer tellus eu cursus vulputate neque nisl rhoncus, tristique risus donec hac arcu pretium enim platea non. Cursus elementum aptent ultrices dapibus dignissim justo imperdiet nibh ut, parturient curabitur pharetra libero nunc neque sed netus, arcu suscipit potenti ad at interdum quisque suspendisse.
  
  - Accomplishment that contains **bold text**.
  - Accomplishment
  - Accomplishment
  - Accomplishment
  `,
});

const createJob = (times = 1) => (times === 1 ? job() : new Array(times).fill(1).map(() => job()));

export default createJob;
