// import dependencies
import React from "react";

import Schedule from "../schedule";
import renderer from "react-test-renderer";

describe("Schedule", () => {
  let ScheduleCompoent;
  const title = "testTitle";
  const info = "testInfo";

  beforeEach(() => {
    ScheduleCompoent = <Schedule title={title} info={info} />;
  });

  it("render", () => {
    const component = renderer.create(ScheduleCompoent).toJSON();

    expect(component).toMatchSnapshot();
  });
});
