import React from 'react';
import { Provider } from 'mobx-react';
import { Router } from 'react-router-dom';
import { GoogleFont, TypographyStyle } from 'react-typography';
import { ThemeProvider } from 'styled-components';
import createBrowserHistory from 'history/createBrowserHistory';
import { syncHistoryWithStore } from 'mobx-react-router';

import OfflineBanner from './modules/offline';
import Logger from './services/logger';
import { AuthApi, UsersApi } from './services/api';
import theme from './modules/theme';
import typography from './assets/typography';
import Pages from './pages';
import RootStore from './store';

const store = new RootStore({
  logger: new Logger(),
  authApi: new AuthApi(),
  userApi: new UsersApi(),
});

const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, store.routing);

let DevTools;

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line
  DevTools = require('mobx-react-devtools').default;
}

const App = () => (
  <React.Fragment>
    <TypographyStyle typography={typography} />
    <GoogleFont typography={typography} />
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <Pages />
        </Router>
      </ThemeProvider>
    </Provider>
    {process.env.NODE_ENV === 'development' ? (
      <DevTools position={{ bottom: 12, right: 12 }} />
    ) : null}
    <OfflineBanner />
  </React.Fragment>
);

export default App;
