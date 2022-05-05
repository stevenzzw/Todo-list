import React, { Component } from 'react'

export default class Footer extends Component {

handleCheckAll=(e)=>{
this.props.checkAllTodo(e.target.checked)

}

handleClearAll=()=>{
this.props.clearAllDone()
}
    render() {
        const { todo} = this.props
        const donecount = todo.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)
        const total = todo.length
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" onChange={this.handleCheckAll} checked={donecount ===total&&total !==0 ? true:false}/>
                </label>
                <span>
                    <span>已完成{donecount}</span> /全部{total}

                </span>
                <button onClick={this.handleClearAll} className="btn btn-danger">清除已完成任务</button>
            </div>
        )
    }
}
