import './App.css';
import React, { Component } from 'react';

import Header from './component/Header';
import List from './component/List';
import Footer from './component/Footer';
class App extends Component {
  state = {
    todo: [
      { id: 0, name: 'Workout', done: true },
      { id: 1, name: 'Project', done: false },
      { id: 2, name: 'Reading', done: false }
    ]
  }

  addToDo = (todoObj) => {

    const { todo } = this.state
    const newTodo = [todoObj, ...todo]

    console.log(newTodo);
    this.setState({ todo: newTodo })

  }

  updateTodo = (id, done) => {

    const { todo } = this.state
    const newTodo = todo.map((todoObj) => {
      if (todoObj.id === id) return { ...todoObj, done }// ...todoObj make a copy, only change done
      else return todoObj
    })
    this.setState({ todo: newTodo })
  }

  deleteTodo = (id) => {
    const { todo } = this.state
    const newTodo = todo.filter((todoObj) => {
      return todoObj.id !== id
    })
    this.setState({ todo: newTodo })

  }
  checkAllTodo = (done) => {
    const { todo } = this.state
    const newTodo = todo.map((todoObj) => {
      return { ...todoObj, done }
    })
    this.setState({ todo: newTodo })

  }
  clearAllDone = () => {
    const { todo } = this.state
    const newObj = todo.filter((todoObj) => {
      return !todoObj.done
    })
    this.setState({ todo: newObj })
  }
  render() {
    const { todo } = this.state
    return (
      <div className="todo-container">
        <div className="todo-warp">
          <p style={{font:'bold,12'}}>To-Do-List</p>
          <Header add={this.addToDo} />
          <List todo={todo} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
          <Footer todo={todo} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone} />
        </div></div>
    )
  }


}


export default App;
