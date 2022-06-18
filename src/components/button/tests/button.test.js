import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import renderer from "react-test-renderer";
import Button from "../button";

describe("Button", () => {
  const name = "buttonTest";
  let ButtonComponent;
  let onClick;

  beforeEach(() => {
    onClick = jest.fn();
    ButtonComponent = <Button onClick={onClick} />;
  });

  it("render", () => {
    const component = renderer.create(ButtonComponent).toJSON();
    expect(component).toMatchSnapshot();
  });

  describe("Button Click", () => {
    beforeEach(() => {
      render(ButtonComponent);
    });

    it("calls onClick when clicking 'button'", () => {
      let button = screen.getByTitle("button");
      userEvent.click(button);

      expect(onClick).toHaveBeenCalled();
    });
  });
});
