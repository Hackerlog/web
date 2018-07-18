import { action, observable } from 'mobx';

import RootStore from '../../RootStore';
import Entry from './EntryModel';
import { IEntry, IEntryUpdate } from './types';

export default class EntryStore {
  private rootStore: RootStore;

  @observable public entries: Entry[] = [];

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @action
  public create(attributes: IEntry): Entry {
    const entry = new Entry(this, attributes);
    // TODO: Make the API call
    this.entries.push(entry);
    return entry;
  }

  public update(entry: Entry, attributes: IEntryUpdate): void {
    
  }

  get root(): RootStore {
    return this.rootStore;
  }
}
