import React from 'react';
import uuidV4 from 'uuid/v4';
import PostLink from '../../components/PostLink';

class Index extends React.Component {
  static getInitialProps() {
    // console.log('initial', this.props)
  }

  state = { todo: '' };

  componentDidMount() {
    const { subscribeToNewTodos } = this.props;
    subscribeToNewTodos();
    // console.log('mounted',this.props)
  }

  createTodo = () => {
    const todo = {
      name: this.state.todo,
      id: uuidV4(),
      completed: false,
    };
    this.props.createTodo(todo);
    this.setState({ todo: '' });
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
          <p className="t_todo" key={index}>{todo.name}</p>
        ))}
        <ul>
          <li><PostLink title="Hello Next.js" name="hello" /></li>
          <li><PostLink title="Learn Next.js is awesome" name="learn" /></li>
          <li><PostLink title="Deploy Indexs with Zeit" name="deploy" /></li>
        </ul>
      </div>
    );
  }
}

export default Index;
