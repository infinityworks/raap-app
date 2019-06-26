import { graphql, compose } from 'react-apollo';
import withData from '../../withData';
import { query, mutation, subscription } from './_graphql';
import Index from './_component';

const ComposedComponent = compose(
  graphql(mutation, {
    props: props => ({
      createTodo: todo => {
        props.mutate({
          variables: todo,
          optimisticResponse: {
            __typename: 'Mutation',
            createTodo: { ...todo, __typename: 'Todo' },
          },
          update: (proxy, { data: { createTodo } }) => {
            const data = proxy.readQuery({ query });
            data.listTodos.items.unshift(createTodo);
            proxy.writeQuery({ query, data });
          },
        });
      },
    }),
  }),
  graphql(query, {
    options: {
      fetchPolicy: 'cache-and-network',
    },
    props: props => ({
      todos: props.data.listTodos ? props.data.listTodos.items : [],
      subscribeToNewTodos: () => {
        props.data.subscribeToMore({
          document: subscription,
          updateQuery: (
            prev,
            {
              subscriptionData: {
                data: { onCreateTodo },
              },
            },
          ) => ({
            ...prev,
            listTodos: {
              __typename: 'TodoConnection',
              items: [
                onCreateTodo,
                ...prev.listTodos.items.filter(
                  todo => todo.id !== onCreateTodo.id,
                ),
              ],
            },
          }),
        });
      },
    }),
  }),
)(Index);

export default withData(ComposedComponent);
