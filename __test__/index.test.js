/* eslint-env jest */

import React from "react";
import renderer from "react-test-renderer";
import { Index } from "../pages/index.js";

const defaultProps = {
  createTodo: () => {},
  subscribeToNewTodos: () => {},
  todos: [],
}

describe("With Snapshot Testing", () => {
  it('Index shows index page"', () => {
    const component = renderer.create(<Index {...defaultProps}  />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
