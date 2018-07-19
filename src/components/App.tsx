import * as React from 'react';
import { Provider } from 'mobx-react';
import { syncHistoryWithStore } from 'mobx-react-router';
import { Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import DevTools from 'mobx-react-devtools';
import { GoogleFont, TypographyStyle } from 'react-typography';

import { ThemeProvider, theme } from '../theme';
import globalStyles from '../theme/global';
import typography from '../assets/typography';
import RootStore from '../RootStore';
import Pages from '../pages';

const rootStore = new RootStore();
const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, rootStore.routerStore);

globalStyles();

const App = () => (
  <React.Fragment>
    <TypographyStyle typography={typography} />
    <GoogleFont typography={typography} />
    <Provider store={rootStore}>
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <Pages />
        </Router>
      </ThemeProvider>
    </Provider>
    {process.env.NODE_ENV === 'development' ? (
      <DevTools position={{ bottom: 12, right: 12 }} />
    ) : null}
  </React.Fragment>
);

export default App;
