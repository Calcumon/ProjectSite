import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
configure({adapter: new Adapter()});
import Navbar from '../';

describe('<Footer />', () => {
  it('has selected page prop', () => {
    const wrapper = mount(
        <Navbar selected="landing" />);
    expect(wrapper.props().selected).toEqual("landing");
  });

  it('renders heading', () => {
    const wrapper = mount(
        <Navbar selected="landing" />);
    expect(wrapper.find('ul')).toHaveLength(1);
    // UPDATE when more li are added
    expect(wrapper.find('li')).toHaveLength(1);
    expect(wrapper.find('img')).toHaveLength(1);
  });

});