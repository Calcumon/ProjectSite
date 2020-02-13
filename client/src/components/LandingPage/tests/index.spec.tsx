import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { mount, configure } from "enzyme";
configure({ adapter: new Adapter() });

import { BrowserRouter } from "react-router-dom";

import LandingPage from "..";
import LandingPageFeature from "../components/LandingPageFeature";
import Container from "../../Container";

describe("<LandingPage />", () => {
  function createComponent() {
    return mount(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    );
  }

  it("has no props", () => {
    const wrapper = createComponent();
    expect(wrapper.find(LandingPage).props()).toEqual({});
  });

  it("renders", () => {
    const wrapper = createComponent();
    expect(wrapper.find(LandingPageFeature)).toHaveLength(4);
    expect(wrapper.find(Container)).toHaveLength(1);
    expect(wrapper.find("img")).toHaveLength(6); // 2 in container, 1 for each Feature
    expect(wrapper.find("h1")).toHaveLength(2);
  });
});
