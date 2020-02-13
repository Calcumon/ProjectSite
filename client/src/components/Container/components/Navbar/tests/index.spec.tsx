import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { mount, configure } from "enzyme";
configure({ adapter: new Adapter() });

import { BrowserRouter } from "react-router-dom";

import Navbar from "../";

describe("<Navbar />", () => {
  function createComponent(selected: string) {
    return mount(
      <BrowserRouter>
        <Navbar selected={selected} />
      </BrowserRouter>
    );
  }

  it("has selected page prop", () => {
    const wrapper = createComponent("landing").find(Navbar);
    expect(wrapper.props().selected).toEqual("landing");
  });

  it("renders heading", () => {
    const wrapper = createComponent("landing").find(Navbar);
    expect(wrapper.find("ul")).toHaveLength(1);
    // UPDATE when more li are added
    expect(wrapper.find("li")).toHaveLength(2);
    expect(wrapper.find("img")).toHaveLength(1);
  });
});
