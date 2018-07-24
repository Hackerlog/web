import * as React from 'react';
import { Provider } from 'mobx-react';
import { Router } from 'react-router-dom';
import { GoogleFont, TypographyStyle } from 'react-typography';

import { ThemeProvider, theme } from '../theme';
import globalStyles from '../theme/global';
import typography from '../assets/typography';
import Pages from '../pages';
import RootStore, { history } from '../RootStore';
import OfflineBanner from '../modules/offline';

let DevTools;

if (process.env.NODE_ENV === 'development') {
  // tslint:disable-next-line:no-var-requires
  DevTools = require('mobx-react-devtools').default;
  // tslint:disable-next-line:no-var-requires
  const { connectReduxDevtools } = require('mst-middlewares');
  // tslint:disable-next-line:no-var-requires
  connectReduxDevtools(require('remotedev'), RootStore);
}

globalStyles();

const App = () => (
  <React.Fragment>
    <TypographyStyle typography={typography} />
    <GoogleFont typography={typography} />
    <Provider store={RootStore}>
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
