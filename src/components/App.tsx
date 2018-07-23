import * as React from 'react';
import { Provider } from 'mobx-react';
import { Router } from 'react-router-dom';
import DevTools from 'mobx-react-devtools';
import { GoogleFont, TypographyStyle } from 'react-typography';

import { AuthApi, UsersApi } from '../services/api';
import { ThemeProvider, theme } from '../theme';
import globalStyles from '../theme/global';
import typography from '../assets/typography';
import Pages from '../pages';
import RootStore, { history } from '../RootStore';

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
  </React.Fragment>
);

export default App;
