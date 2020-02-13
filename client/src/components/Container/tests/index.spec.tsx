import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { mount, configure } from "enzyme";
configure({ adapter: new Adapter() });

import { BrowserRouter } from "react-router-dom";

import Container from "../index";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

describe("<Container />", () => {
  function createComponent(page: string, color: string) {
    return mount(
      <BrowserRouter>
        <Container currentPage={page} bgColor={color}>
          <p>Hello</p>
        </Container>
      </BrowserRouter>
    );
  }
  it("allows us to set props", () => {
    const wrapper = createComponent("landing", "green");
    expect(wrapper.find(Container).props().currentPage).toEqual("landing");
    wrapper.setProps({ currentPage: "blue" });
    expect(wrapper.props().currentPage).toEqual("blue");
  });

  it("renders navbar and footer", () => {
    const wrapper = createComponent("landing", "green");
    expect(wrapper.exists(Navbar)).toEqual(true);
    expect(wrapper.exists(Footer)).toEqual(true);
  });
});
