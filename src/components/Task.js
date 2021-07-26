import React, { Component } from 'react';
import { FaRegTimesCircle } from 'react-icons/fa';

export class Task extends Component {
  // dinamic styling
  getStyle = () => {
    return this.props.todo.completed ? 'task task-completed' : 'task';
  };

  render() {
    const { id, title, completed } = this.props.todo;
    return (
      <li className={this.getStyle()}>
        <p className="todo-text">
          <input
            type="checkbox"
            className="check-box"
            defaultChecked={completed}
            onChange={this.props.onToggleChange.bind(this, id)}
          />{' '}
          {title}
        </p>
        <FaRegTimesCircle
          className="close-icon"
          onClick={this.props.onDelete.bind(this, id)}
        />
      </li>
    );
  }
}

export default Task;
