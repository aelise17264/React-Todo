import React from 'react'

const Todo = (props)=> {
// console.log(`item${props.item.completed ? "completed" : ""}`)
        return (
          <div 
          onClick={() => props.toggleList(props.item.id)}
        className={`item${props.item.completed ? "completed" : ""}`}
       
          >
              <p>{props.item.task}</p>
          </div>
        );

        }


export default Todo