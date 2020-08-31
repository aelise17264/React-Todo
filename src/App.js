import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './components/Todo.css'


const todoData =[
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todo: todoData
    };
  }
  
toggleList = (addedItem) => {
  this.setState({
    todo: this.state.todo.map((item) => {
      if(item.id === addedItem){
        return{
          ...item,
          completed: !item.completed
        };
      }else{
        return item
      }
    })
  })
}

addList = (itemName) => {
  const newList = {
    task: itemName,
    id: new Date(),
    completed: false
  }
  this.setState({
    todo: [...this.state.todo, newList]
  })
}

  render() {
    return (
      <div className='App'>
        <div className='listHeader'>
          <h1>Todo List</h1>
          <TodoForm
          addList={this.addList}
          />
          <TodoList
          todo={this.state.todo}
          toggleList={this.toggleList}
          />
        </div>
        
      </div>
    );
  }
}

export default App;
