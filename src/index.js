import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './Redux/configurestore';
import App from './App';
import { getinfoart } from './Redux/ArtGallery/ArtGallery';

const root = ReactDOM.createRoot(document.getElementById('root'));
store.dispatch(getinfoart());
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,

);
