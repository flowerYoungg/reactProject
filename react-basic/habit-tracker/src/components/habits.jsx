import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
    //다시 한번 강의 듣고 클론 코딩 해보기 
    state = {
        habits:[
            {id : 1 , name : 'Sleeping', count : 0},
            {id : 2 , name : 'Running', count : 0},
            {id : 3 , name : 'Coding', count : 0},
        ]
    };

    //Increment
    handleIncrement =(habit) =>{
        console.log(`handleIncrement ${habit.name}`);
    };
    
    //Decrement
    handleDecrement =(habit) =>{
        console.log(`handleDecrement ${habit.name}`);
    };

    //Delete
    handleDelete =(habit) =>{
        console.log(`handleDelete ${habit.name}`);
    }

    render() {
        return (
            <ul>
                {this.state.habits.map(habit => (
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