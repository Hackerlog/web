import languages from './languages';
/* eslint-disable import/no-extraneous-dependencies */
const Chance = require('chance');

const chance = new Chance();

const project = () => ({
  id: chance.integer({ min: 0, max: 99 }),
  name: `${chance.word()}-${chance.word()}`,
  source: chance.pickone(['github', 'gitlab', 'bitbucket']),
  mainLanguage: chance.pickone(languages),
  createdOn: `${chance.month({ raw: true }).numeric}/${chance.year({
    min: 2000,
    max: new Date().getFullYear() - 1,
  })}`,
  numOfCommits: chance.integer({ min: 0, max: 999 }),
  numOfContributors: chance.integer({ min: 0, max: 50 }),
  numOfStars: chance.integer({ min: 0, max: 20000 }),
  description: `Licuit Cycnus titulum cortice. Ales gravis illo, tenebras, rupisset
  [in](http://tamen-quarum.io/) lucemque, Phinea? Cytherea novitate, capiat
  umeroque at maius *hora quoque urbe* thalamoque, commonuit iuvenci e porto.
  Alcmenae et saepe.`,
});

const createProject = (times = 1) =>
  times === 1 ? project() : new Array(times).fill(1).map(() => project());

export default createProject;
