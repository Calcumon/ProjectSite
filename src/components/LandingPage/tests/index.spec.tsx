import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
configure({adapter: new Adapter()});
import LandingPage from '..';
import LandingPageFeature from '../components/LandingPageFeature';
import Container from '../../Container';

describe('<LandingPage />', () => {
    it('has no props', () => {
      const wrapper = mount(
          <LandingPage />);
      expect(wrapper.props()).toEqual({});
    });
  
    it('renders', () => {
      const wrapper = mount(
          <LandingPage />);
      expect(wrapper.find(LandingPageFeature)).toHaveLength(4);
      expect(wrapper.find(Container)).toHaveLength(1);
      expect(wrapper.find('img')).toHaveLength(6); // 2 in container, 1 for each Feature
      expect(wrapper.find('h1')).toHaveLength(2);
    });
  
  });