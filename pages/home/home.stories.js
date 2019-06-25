import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import Index from './_component';
import ResetStyle from '../../components/ResetStyle';

const defaultProps = {
  createTodo: () => {},
  subscribeToNewTodos: () => {},
  todos: [],
};

storiesOf('homepage', module).add('default', () => (
  <Fragment>
    <ResetStyle />
    <Index {...defaultProps} />
  </Fragment>
));
