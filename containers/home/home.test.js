/* eslint-env jest */

import React from 'react';
import * as renderer from 'react-test-renderer';
import Index from './_component';

const env = process.env.NODE_ENV || 'development';

if (env !== 'production') {
  const defaultProps = {
    createTodo: () => {},
    subscribeToNewTodos: () => {},
    todos: [],
  };

  describe('Home page', () => {
    it('matches the snapshot"', () => {
      const component = renderer.create(<Index {...defaultProps} />);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
}
