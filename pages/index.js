import gql from "graphql-tag";
import { graphql, compose } from "react-apollo";
import withData from "../withData";
import uuidV4 from "uuid/v4";
import Link from "next/link";

const PostLink = props => (
  <li>
    <Link as={`/post/${props.title}`} href={`/post?title=${props.title}`}>
      <a>{props.title} TEST</a>
    </Link>
  </li>
);

const query = gql`
  query listTodos {
    listTodos {
      items {
        id
        name
        completed
      }
    }
  }
`;

const mutation = gql`
  mutation createTodo($id: ID!, $name: String!, $completed: Boolean!) {
    createTodo(input: { id: $id, name: $name, completed: $completed }) {
      id
      name
      completed
    }
  }
`;

const subscription = gql`
  subscription onCreateTodo {
    onCreateTodo {
      id
      name
      completed
    }
  }
`;

class Index extends React.Component {
  static getInitialProps() {
    // console.log('initial', this.props)
  }

  state = { todo: "" };
  componentDidMount() {
    this.props.subscribeToNewTodos();
    // console.log('mounted',this.props)
  }
  createTodo = () => {
    const todo = {
      name: this.state.todo,
      id: uuidV4(),
      completed: false
    };
    this.props.createTodo(todo);
    this.setState({ todo: "" });
  };
  render() {
    return (
      <div>
        <p>Hello World</p>
        <input
          value={this.state.todo}
          onChange={e => this.setState({ todo: e.target.value })}
        />
        <button onClick={this.createTodo}>Create Todo</button>
        {this.props.todos.map((todo, index) => (
          <p key={index}>{todo.name}</p>
        ))}
        <ul>
          <PostLink title="Hello Next.js" name="hello" />
          <PostLink title="Learn Next.js is awesome" name="learn" />
          <PostLink title="Deploy Indexs with Zeit" name="deploy" />
        </ul>
      </div>
    );
  }
}

const IndexWithTodos = compose(
  graphql(mutation, {
    props: props => ({
      createTodo: todo => {
        props.mutate({
          variables: todo,
          optimisticResponse: {
            __typename: "Mutation",
            createTodo: { ...todo, __typename: "Todo" }
          },
          update: (proxy, { data: { createTodo } }) => {
            const data = proxy.readQuery({ query: query });
            data.listTodos.items.unshift(createTodo);
            proxy.writeQuery({ query: query, data });
          }
        });
      }
    })
  }),
  graphql(query, {
    options: {
      fetchPolicy: "cache-and-network"
    },
    props: props => ({
      todos: props.data.listTodos ? props.data.listTodos.items : [],
      subscribeToNewTodos: params => {
        props.data.subscribeToMore({
          document: subscription,
          updateQuery: (
            prev,
            {
              subscriptionData: {
                data: { onCreateTodo }
              }
            }
          ) => {
            console.log("onCreateTodo: ", onCreateTodo);
            return {
              ...prev,
              listTodos: {
                __typename: "TodoConnection",
                items: [
                  onCreateTodo,
                  ...prev.listTodos.items.filter(
                    todo => todo.id !== onCreateTodo.id
                  )
                ]
              }
            };
          }
        });
      }
    })
  })
)(Index);

export default withData(IndexWithTodos);
