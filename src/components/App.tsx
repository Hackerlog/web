import * as React from 'react';
import * as Loadable from 'react-loadable';
import { Provider } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import styled, { ThemeProvider, theme } from '../theme';
import Loading from './Loading';
import globalStyles from '../theme/global';
import RootStore from '../RootStore';

globalStyles();

const AppWrapper = styled.div``;

const LoadingHeader = Loadable({
  loader: () => import(/* webpackChunkName: "header" */ './Header'),
  loading: Loading,
});

const App = () => (
  <React.Fragment>
    <Provider store={new RootStore()}>
      <ThemeProvider theme={theme}>
        <AppWrapper>
          <LoadingHeader />
          <div>This is the app you were looking for.</div>
          <h1>Lorem ipsum dolor sit amet consectetur adipiscing</h1>
          <h2>Lorem ipsum dolor sit amet consectetur adipiscing</h2>
          <h3>Lorem ipsum dolor sit amet consectetur adipiscing</h3>
          <h4>Lorem ipsum dolor sit amet consectetur adipiscing</h4>
          <h5>Lorem ipsum dolor sit amet consectetur adipiscing</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit facilisis, risus hac id orci per
            cursus quisque, facilisi varius nulla senectus condimentum convallis netus. Mauris ante
            ut euismod ultricies tellus dapibus cum cursus pharetra eu, montes semper quis lacus
            nibh commodo per platea enim felis urna, facilisi conubia faucibus cubilia tristique
            himenaeos sed massa tempus. Non ad condimentum sagittis viverra quam eu ullamcorper
            mauris sit ipsum conubia diam, orci magna nibh platea aliquam pharetra felis porttitor
            mi convallis arcu. Interdum quam placerat ut vulputate vivamus semper tempor eleifend
            phasellus morbi curabitur, viverra ac lorem lectus adipiscing tristique primis per
            lacus. Euismod accumsan hac turpis sagittis laoreet aptent habitasse leo, viverra non mi
            venenatis dapibus
          </p>
        </AppWrapper>
      </ThemeProvider>
    </Provider>
    <DevTools position={{ bottom: 12, right: 12 }} />
  </React.Fragment>
);

export default App;
