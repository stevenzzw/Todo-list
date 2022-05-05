import React, { Component } from 'react'
import '../item.css'
export default class Item extends Component {
    state = { mouse: false }

    handleMouse = (flag) => {
        return () => {
            this.setState({ mouse: flag })
        }
    }
        handlecheck = (id) => {
            return (e) => {
                this.props.updateTodo(id, e.target.checked)
            }
        }
    handleDelete = (id) => {
        return () => {
            console.log(id);
            this.props.deleteTodo(id)
        }
    }
    render() {
        const { id, name, done } = this.props
        const { mouse } = this.state
        return (
            <li style={{ backgroundColor: mouse ? '#ddd' : 'white',listStyle: 'none' }} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label >
                    <input type="checkbox" checked={done} onChange={this.handlecheck(id)} />
                    <span>{name}</span>
                </label>
                <button onClick={this.handleDelete(id)} className="btn btn-danger" style={{ display: mouse ? 'inline' : 'none',marginLeft:'90px' }}>delete</button>
            </li>
        )
    }
}
