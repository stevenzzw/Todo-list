import React, { Component } from 'react'

export default class Header extends Component {

    handleKeyUp = (e) => {
        const { keyCode, target } = e
        if (keyCode !== 13) return
        if (target.value.trim() === '') {
            alert('enter blank')
            return
        }


        const todoobj = { id: target.value, name: target.value, done: false }
        this.props.add(todoobj)

        target.value = ''
    }


    render() {

        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type='text' placeholder='enter pls' />

            </div>
        )
    }
}
