import { observable } from 'mobx';

import EntryStore from './EntryStore';
import { IEntry } from './types';

export default class Entry {
  public id = null;
  public store: EntryStore | null = null;

  @observable public attributes: IEntry | null = null;

  public constructor(store: EntryStore, attributes: IEntry) {
    this.store = store;
    this.attributes = attributes;
  }
}
