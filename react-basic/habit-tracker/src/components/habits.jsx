import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
    //Increment
    handleIncrement =(habit) =>{
        this.props.onIncrement(habit);
    };
    
    //Decrement
    handleDecrement =(habit) =>{
        this.props.onDecrement(habit);
    };

    //Delete
    handleDelete =(habit) =>{
        this.props.onDelete(habit);
    }

    render() {
        return (
            <ul>
                {this.props.habits.map(habit => (
                    <Habit 
                    key = {habit.id} 
                    habit = {habit} 
                    onIncrement = {this.handleIncrement}
                    onDecrement = {this.handleDecrement}
                    onDelete = {this.handleDelete}
                    />
                ))}
            </ul>
        );
    }
}

export default Habits;