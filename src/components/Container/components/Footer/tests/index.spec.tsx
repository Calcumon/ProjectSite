import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
configure({adapter: new Adapter()});
import Footer from '../';

describe('<Footer />', () => {
  it('has no props', () => {
    const wrapper = mount(
        <Footer />);
    expect(wrapper.props()).toEqual({});
  });

  it('renders heading', () => {
    const wrapper = mount(
        <Footer />);
    expect(wrapper.find('h2')).toHaveLength(1);
    expect(wrapper.find('input')).toHaveLength(1);
    expect(wrapper.find('button')).toHaveLength(1);
  });

});