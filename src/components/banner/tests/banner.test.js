import React from "react";

import Banner from "../banner";
import renderer from "react-test-renderer";

describe("Banner", () => {
  const title = "bannerTest";
  const description = "bannerDescription";
  let BannerComponent;

  beforeEach(() => {
    BannerComponent = <Banner title={title} description={description} />;
  });

  it("render", () => {
    const component = renderer.create(BannerComponent).toJSON();
    expect(component).toMatchSnapshot();
  });
});
