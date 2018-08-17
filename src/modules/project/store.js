import { observable } from 'mobx';

class Project {
  /* prettier-ignore */
  @observable name
  /* prettier-ignore */
  @observable source
  /* prettier-ignore */
  @observable createdOn
  /* prettier-ignore */
  @observable description
  /* prettier-ignore */
  @observable mainLanguage
  /* prettier-ignore */
  @observable numOfCommits
  /* prettier-ignore */
  @observable numOfContributors
  /* prettier-ignore */
  @observable numOfStars
  constructor({
    id,
    name,
    source,
    createdOn,
    description,
    mainLanguage,
    numOfCommits,
    numOfContributors,
    numOfStars,
  }) {
    this.id = id;
    this.name = name;
    this.source = source;
    this.createdOn = createdOn;
    this.description = description;
    this.mainLanguage = mainLanguage;
    this.numOfCommits = numOfCommits;
    this.numOfContributors = numOfContributors;
    this.numOfStars = numOfStars;
  }
}

export default Project;
