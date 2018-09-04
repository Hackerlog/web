/* eslint-disable import/no-extraneous-dependencies */
const Chance = require('chance');

const chance = new Chance();

const jobTitles = ['Software Engineer', 'Web Developer', 'App Developer', 'Mobile App Developer'];
const keywords = ['javascript', 'aws', 'node', 'react', 'vue', 'go', 'mysql', 'postgres', 'ubuntu'];

const user = () => ({
  id: chance.integer({ min: 0, max: 99 }),
  token: chance.string({ length: 120 }),
  firstName: chance.first(),
  lastName: chance.last(),
  email: chance.email(),
  title: chance.pickone(jobTitles),
  website: chance.url(),
  keywords: chance.pickset(keywords, 6),
  twitterUrl: `https://twitter.com/${chance.twitter()}`,
  linkedInUrl: `https://linkedin.com/${chance.twitter()}`,
});

const createUser = (times = 1) =>
  times === 1 ? user() : new Array(times).fill(1).map(() => user());

export default createUser;
