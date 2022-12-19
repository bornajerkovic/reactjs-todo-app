import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
  state = {
    todos: [
      { text: "Learn React", completed: false },
      { text: "Build a Todo app", completed: false }
    ],
    newTodo: ""
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      todos: [
        ...this.state.todos,
        { text: this.state.newTodo, completed: false }
      ],
      newTodo: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.newTodo}
            onChange={(e) => this.setState({ newTodo: e.target.value })}
          />
          <button type="submit">Add Todo</button>
        </form>
        {this.state.todos.map((todo, index) => (
          <Todo key={index} text={todo.text} completed={todo.completed} />
        ))}
      </div>
    );
  }
}

export default TodoList;
