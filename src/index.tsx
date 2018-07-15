import * as React from 'react';
import { render } from 'react-dom';

import App from './components/App';

const renderApp = () => {
  render(<App />, document.getElementById('root') as HTMLElement);
};

renderApp();

declare const module: { hot: any };
if (module.hot) {
  module.hot.accept(['./components/App'], () => {
    renderApp();
  });
}
