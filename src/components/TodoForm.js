import React from 'react'

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            item: ''
        };
    }
    listChanges = event => {
        this.setState({
            item: event.target.value
        })
    }
    
    submitList = event => {
        event.preventDefault();
        this.props.addList(this.state.item)
        
    }

    render() {
        return (
          <form onSubmit={this.submitList}>
            <input
            placeholder='add todo'
            type='text'
            name='item'
            value={this.state.item}
            onChange={this.listChanges}
            
            />
            <button >Add Todo</button>
            
          </form>
        );

        }

}

export default TodoForm