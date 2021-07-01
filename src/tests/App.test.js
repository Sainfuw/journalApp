import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import App from "../App";

describe("Pruebas en App.test", () => {
  test("asdfasdf", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
