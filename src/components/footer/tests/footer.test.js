import React from "react";

import Footer from "../footer";
import renderer from "react-test-renderer";

describe("Footer", () => {
  let FooterComponent;

  beforeEach(() => {
    FooterComponent = <Footer />;
  });

  it("render", () => {
    const component = renderer.create(FooterComponent).toJSON();
    expect(component).toMatchSnapshot();
  });
});
