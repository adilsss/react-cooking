import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';

import { GlobalStyle } from './core/global-styles';
import { App } from './core/App/App';
import { store } from './store';

ReactDOM.render(
  <StylesProvider injectFirst>
    <Provider store={store}>
      <GlobalStyle />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StylesProvider>,
  document.getElementById('root')
);
