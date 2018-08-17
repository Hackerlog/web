import { computed, observable } from 'mobx';

class Job {
  @observable
  companyName;

  @observable
  position;

  @observable
  startDate;

  @observable
  endDate;

  @observable
  isCurrentJob;

  @observable
  city;

  @observable
  state;

  @observable
  description;

  constructor(
    user,
    { id, companyName, position, startDate, endDate, isCurrentJob, city, state, description }
  ) {
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
  }

  @computed
  get date() {
    if (this.isCurrentJob) {
      return `${this.startDate} - Present`;
    }

    return `${this.startDate} - ${this.endDate}`;
  }
}

export default Job;
