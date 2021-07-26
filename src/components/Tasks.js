import React, { Component } from 'react';
import Task from './Task';

export class Tasks extends Component {
  render() {
    return (
      <ul className="tasks-container">
        {this.props.todos.map((todo) => (
          <Task
            key={todo.id}
            todo={todo}
            onToggleChange={this.props.onToggleChange}
            onDelete={this.props.onDelete}
          />
        ))}
      </ul>
    );
  }
}

export default Tasks;
