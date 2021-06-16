import React, { Component } from 'react';

class Habit extends Component {
    //Increment
    handleIncrement =() =>{
        // state 오브젝트 안에 있는 count를 증가시킨 뒤 state를 업데이트 한다
        this.props.onIncrement(this.props.habit);
    };
    
    //Decrement
    handleDecrement =() =>{
        this.props.onDecrement(this.props.habit);
    };

    //Delete
    handleDelete =() =>{
        this.props.onDelete(this.props.habit);
    }
    render() {
        const {name, count} = this.props.habit;
        return (
        <li className = "habit">
            <span className="habit-name">{name}</span>
            <span className="habit-count">{count}</span>
            <button className="habit-button habit-increase" onClick={this.handleIncrement}>
                <i className="fas fa-plus-square"></i>
            </button>
            <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
                <i className="fas fa-minus-square"></i>
            </button>
            <button className="habit-button habit-delete" onClick={this.handleDelete}>
                <i className="fas fa-trash"></i>
            </button>
        </li>
        );
    }
}

export default Habit;