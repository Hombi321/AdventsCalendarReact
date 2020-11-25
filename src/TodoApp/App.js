import React from "react"
import TodoItem from "./TodoItem"
import Data from "./Data.json"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: Data.todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(id) {
        
        
            const updatedTodos = this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            this.setState( () => {
            return {
                
                todos: updatedTodos
            }
        })
    }
    
    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
        
        return (
            <div className="todo-list">
                {todoItems}
            </div>
        )    
    }
}

export default App