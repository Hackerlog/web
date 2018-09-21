import { computed, observable, action, runInAction } from 'mobx';

export default class Job {
  /* prettier-ignore */
  @observable companyName;
  /* prettier-ignore */
  @observable position;
  /* prettier-ignore */
  @observable startDate;
  /* prettier-ignore */
  @observable endDate;
  /* prettier-ignore */
  @observable isCurrentJob;
  /* prettier-ignore */
  @observable city;
  /* prettier-ignore */
  @observable state;
  /* prettier-ignore */
  @observable description;
  /* prettier-ignore */
  @observable newJob = {};

  constructor(
    user,
    { id, companyName, position, startDate, endDate, isCurrentJob, city, state, description }
  ) {
    runInAction(() => {
      this.user = user;
      this.id = id;
      this.companyName = companyName;
      this.position = position;
      this.startDate = startDate;
      this.endDate = endDate;
      this.isCurrentJob = isCurrentJob;
      this.city = city;
      this.state = state;
      this.description = description;
    });
  }

  @computed
  get date() {
    if (this.isCurrentJob) {
      return `${this.startDate} - Present`;
    }

    return `${this.startDate} - ${this.endDate}`;
  }

  @action
  updateNewFormValue = e => {
    const target = e.currentTarget;
    this.newJob[target.id] = target.value;
  };
}
