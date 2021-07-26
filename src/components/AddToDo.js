import React, { Component } from 'react';
import { BiMessageSquareAdd } from 'react-icons/bi';

export class AddToDo extends Component {
  state = {
    title: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.title);
    this.setState({title: ''})
  }

  handleChange = (e) =>
    this.setState({
      title: e.target.value,
    });

  render() {
    return (
      <form className="form-controle" onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="add-todo__input"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <button className="add-todo__button" type="submit">
          <BiMessageSquareAdd className="add-todo__icon" />
        </button>
      </form>
    );
  }
}

export default AddToDo;
