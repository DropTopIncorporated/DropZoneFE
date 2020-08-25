import React from 'react';
import { render } from 'react-dom';
import App from './components/App/App';
import AppProvider from './providers/AppProvider';
import AuthProvider from './providers/AuthProvider';
import { Provider } from 'react-redux';
import store from './store';


render(
  <AuthProvider>
    <AppProvider>
      <Provider store = {store} >
        <App />
      </Provider>
    </AppProvider>
  </AuthProvider>,
  document.getElementById('root')
);
