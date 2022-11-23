import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../Redux/configureStore';
import References from '../components/References';

it('renders correctly', () => {
  const navbar = renderer
    .create(<Provider store={store}><Router><References /></Router></Provider>)
    .toJSON();
  expect(navbar).toMatchSnapshot();
});
