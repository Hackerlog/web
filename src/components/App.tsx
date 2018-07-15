import * as React from 'react';
import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import DevTools from 'mobx-react-devtools';
import { GoogleFont, TypographyStyle } from 'react-typography';

import { ThemeProvider, theme } from '../theme';
import globalStyles from '../theme/global';
import typography from '../assets/typography';
import RootStore from '../RootStore';
import Home from '../pages/Home';

globalStyles();

const browserHistory = createBrowserHistory();
const routingStore: RouterStore = new RouterStore();

const stores = {
  routing: routingStore,
  root: new RootStore(),
};

const history = syncHistoryWithStore(browserHistory, routingStore);

const App = () => (
  <React.Fragment>
    <TypographyStyle typography={typography} />
    <GoogleFont typography={typography} />
    <Provider {...stores}>
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
    <DevTools position={{ bottom: 12, right: 12 }} />
  </React.Fragment>
);

export default App;
