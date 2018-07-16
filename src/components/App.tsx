import * as React from 'react';
import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import DevTools from 'mobx-react-devtools';
import { GoogleFont, TypographyStyle } from 'react-typography';

import { ThemeProvider, theme } from '../theme';
import globalStyles from '../theme/global';
import typography from '../assets/typography';
import RootStore from '../RootStore';
import Pages from '../pages';

const browserHistory = createBrowserHistory();
const routingStore: RouterStore = new RouterStore();
const history = syncHistoryWithStore(browserHistory, routingStore);
const stores = {
  routing: routingStore,
  root: new RootStore(),
};

globalStyles();

const App = () => (
  <React.Fragment>
    <TypographyStyle typography={typography} />
    <GoogleFont typography={typography} />
    <Provider {...stores}>
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <Pages />
        </Router>
      </ThemeProvider>
    </Provider>
    <DevTools position={{ bottom: 12, right: 12 }} />
  </React.Fragment>
);

export default App;
