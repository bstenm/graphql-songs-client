import React from 'react';
import { Route } from 'react-router-dom';
import { shallow } from 'enzyme';
import routes from '../../config/routes';
import About from '../About';
import App from './App';
import Header from '../Header';

let wrapper;

beforeEach(() => {
      wrapper = shallow(<App />);
});

// Route
it('Displays a Route component pointing to the shopping cart', () => {
      const route = wrapper.find(Route).filterWhere(e => e.props().path === routes.About);
      expect(route.props().component).toEqual(About);
});

// Header
it('Displays a Header component', () => {
      expect(wrapper.find(Header).length).toEqual(1);
});
