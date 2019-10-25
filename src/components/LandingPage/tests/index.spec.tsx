import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
configure({adapter: new Adapter()});
import LandingPage, { LandingPageFeature } from '../';
import Container from '../../Container';
import cutie from '../../../assets/cuties/cutie3.png';

describe('<LandingPageFeature />', () => {
    it('has 4 props', () => {
      const wrapper = mount(
          <LandingPageFeature title="Kids love it." description="They love it." image={ cutie } i={ 0 } />);
      expect(wrapper.props().title).toEqual("Kids love it.");
      expect(wrapper.props().description).toEqual("They love it.");
      expect(wrapper.props().image).toEqual(cutie);
      expect(wrapper.props().i).toEqual(0);
    });
  
    it('renders', () => {
        const wrapper = mount(
            <LandingPageFeature title="Kids love it." description="They love it." image={ cutie } i={ 0 } />);
        expect(wrapper.find('div')).toHaveLength(2);
        expect(wrapper.find('img')).toHaveLength(1);
        expect(wrapper.find('h2')).toHaveLength(1);
        expect(wrapper.find('p')).toHaveLength(1);
  });
});

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