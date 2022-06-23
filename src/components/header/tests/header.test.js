// import dependencies
import React from "react";

// import react-testing methods
import { render, screen } from "@testing-library/react";

import Header from "../header";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";

describe("Header", () => {
  let HeaderCompoent;
  let onLogout;

  beforeEach(() => {
    onLogout = jest.fn();
    HeaderCompoent = <Header onLogout={onLogout} />;
  });

  it("render", () => {
    const component = renderer.create(HeaderCompoent).toJSON();

    expect(component).toMatchSnapshot();
  });

  describe("onLogout", () => {
    beforeEach(() => {
      render(HeaderCompoent);
    });

    it('calls onLogout when clicking "로그아웃" button', () => {
      let button = screen.getByTitle("button");
      userEvent.click(button);

      expect(onLogout).toHaveBeenCalled();
    });
  });
});
