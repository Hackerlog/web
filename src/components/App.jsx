import React from 'react';
import { Provider } from 'mobx-react';
import { Router } from 'react-router-dom';
import { GoogleFont, TypographyStyle } from 'react-typography';
import { ThemeProvider } from 'styled-components';

import theme from '../theme';
import typography from '../assets/typography';
import Pages from '../pages';
import RootStore, { history } from '../RootStore';
import OfflineBanner from '../modules/offline';

let DevTools;

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line
  DevTools = require('mobx-react-devtools').default;
  // eslint-disable-next-line
  const { connectReduxDevtools } = require('mst-middlewares');
  // eslint-disable-next-line
  connectReduxDevtools(require('remotedev'), RootStore);
}

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
