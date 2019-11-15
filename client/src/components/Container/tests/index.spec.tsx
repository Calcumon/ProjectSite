import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
configure({adapter: new Adapter()});

import Container from '../index';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

describe('<Container />', () => {
  it('allows us to set props', () => {
    const wrapper = mount(
        <Container currentPage="landing" bgColor="green">
            <p>Hello</p>
        </Container>);
    expect(wrapper.props().currentPage).toEqual('landing');
    wrapper.setProps({ currentPage: 'blue' });
    expect(wrapper.props().currentPage).toEqual('blue');
  });

  it('renders navbar and footer', () => {
    const wrapper = mount(
        <Container currentPage="landing" bgColor="green">
            <p>Hello</p>
        </Container>);
    expect(wrapper.exists(Navbar)).toEqual(true);
    expect(wrapper.exists(Footer)).toEqual(true);
  });

});