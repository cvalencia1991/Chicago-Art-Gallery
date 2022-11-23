import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../Redux/configurestore';
import Aboutme from '../components/Aboutme';

it('renders correctly', () => {
  const navbar = renderer
    .create(<Provider store={store}><Router><Aboutme /></Router></Provider>)
    .toJSON();
  expect(navbar).toMatchSnapshot();
});
