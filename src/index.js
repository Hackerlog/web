/* eslint react/jsx-filename-extension: off */
import React from 'react';
import { render } from 'react-dom';
import Modal from 'react-modal';

import App from './components/App';

const rootEl = document.getElementById('root');

Modal.setAppElement(rootEl);

const renderApp = () => {
  render(<App />, rootEl);
};

renderApp();

if (module.hot) {
  module.hot.accept(['./components/App'], () => {
    renderApp();
  });
}
