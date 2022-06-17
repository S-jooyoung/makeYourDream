import React from "react";

import { render, screen } from "@testing-library/react";
import Banner from "../banner";
import userEvent from "@testing-library/user-event";
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
