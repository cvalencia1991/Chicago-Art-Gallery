import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Navbar from '../Navbar';
import store from '../Redux/configurestore';

it('renders correctly', () => {
  const navbar = renderer
    .create(<Provider store={store}><Router><Navbar /></Router></Provider>)
    .toJSON();
  expect(navbar).toMatchSnapshot();
});
