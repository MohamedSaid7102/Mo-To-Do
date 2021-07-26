import React, { Component } from 'react';
import Header from './components/Header';
import uuid from 'uuid';
import Tasks from './components/Tasks';
import AddToDo from './components/AddToDo';
import axios from 'axios';
class App extends Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    axios.get('http://localhost:3002/todos').then((res) =>
      this.setState({ todos: res.data })
    );
  }

  fetchTodo = async (id) => {
    const res = await axios.get(`http://localhost:3002/todos/${id}`);
    return res.data;
  }


  toggleCheck = (todoID) => {
     this.setState({
      todos: this.state.todos.map((todo) => {
        if (todoID === todo.id) {
          axios.put(`http://localhost:3002/todos/${todoID}`, {
            ...todo,
            completed: !todo.completed
          })
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  deleteTask = (todoID) => {
    axios.delete(`http://localhost:3002/todos/${todoID}`)
    .then(res =>
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== todoID),
    }));
  };

  addNewToDo = (title) => {
    title &&
    axios.post('http://localhost:3002/todos', {
      id: uuid.v4(),
      title,
      completed: false,
    }).then(res => 
    this.setState({
      todos: [
        ...this.state.todos,
        res.data
      ],
    }))
  };

  render() {
    return (
      <div className="App">
        <Header />
        <AddToDo onSubmit={this.addNewToDo} />
        <Tasks
          todos={this.state.todos}
          onToggleChange={this.toggleCheck}
          onDelete={this.deleteTask}
        />
      </div>
    );
  }
}

export default App;
