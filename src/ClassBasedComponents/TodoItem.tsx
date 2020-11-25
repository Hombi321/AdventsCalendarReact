import React from "react"

function TodoItem(props : any) {
    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.todo.completed} />
           
            <h3>{props.todo.text}</h3>
            
        </div>
    )
}

export default TodoItem