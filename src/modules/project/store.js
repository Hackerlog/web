import { types } from 'mobx-state-tree';

const Project = types.model('ProjectModel', {
  id: types.identifierNumber,
  name: types.string,
  source: types.enumeration(['github', 'gitlab', 'bitbucket']),
  createdOn: types.Date,
  description: types.maybeNull(types.string),
  mainLanguage: types.string,
  numOfCommits: types.number,
  numOfContributors: types.number,
  numOfStars: types.number,
});

export default Project;
