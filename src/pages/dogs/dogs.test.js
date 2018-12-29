import React from "react";
import ReactDOM from "react-dom";
import { Dogs } from "./index";
import { shallow } from "enzyme";

it("renders the dogs page without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Dogs />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders the h1 element", () => {
  const DogsComponent = shallow(<Dogs />);
  const header = <h1>Dogs are my favourite!</h1>;
  expect(DogsComponent).toContainReact(header);
});
