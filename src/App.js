import React from 'react';
import ToDoList from './components/TodoList';
import TodoForm from "./components/TodoForm";

const toDoItems = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      toDoItems: toDoItems
    }
  }

  addItem = itemName => {
    const newItem = {
      task: itemName,
      id: new Date(),
      completed: false
    }
    this.setState({
      toDoItems: [...this.state.toDoItems, newItem]
    })
  }

  toggleItem = itemId => {
    this.setState({
      toDoItems: this.state.toDoItems.map(item => {
        if (item.id === itemId) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    })
  }

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      toDoItems: this.state.toDoItems.filter(item => !item.completed)
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addItem} />
        <ToDoList 
          toggleItem={this.toggleItem}
          list={this.state.toDoItems} 
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
