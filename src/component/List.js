import React, { Component } from 'react'
import Item from './Item'
import '../list.css'

export default class List extends Component {
    render() {
        const { todo,updateTodo,deleteTodo } = this.props
        return (
            <ul className="todo-main">
                {
                    todo.map((todo) => {
                        return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
                    })
                }
            </ul>
        )
    }
}
