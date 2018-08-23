import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from 'react-testing-library';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'mobx-react';

import RootStore from '../store';
import theme from '../theme';

const renderWithRouter = (
  ui,
  { route = '/', history = createMemoryHistory({ initialEntries: [route] }) } = {}
) => ({
  ...render(
    <Provider store={RootStore} history={history}>
      <ThemeProvider theme={theme}>
        <Router history={history}>{ui}</Router>
      </ThemeProvider>
    </Provider>
  ),
  history,
});

export default renderWithRouter;
