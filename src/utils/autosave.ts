import { onSnapshot } from 'mobx-state-tree';
import debounce from 'lodash-es/debounce';

import { SESSION_KEY } from './constants';

export const local = (store, key) => {
  onSnapshot(
    store,
    debounce(snapshot => {
      try {
        localStorage.setItem(SESSION_KEY(key), JSON.stringify(snapshot));
      } catch (_) {
        // do nothing
      }
    }, 2000)
  );
};
