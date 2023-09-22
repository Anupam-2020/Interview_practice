import React, { useReducer } from 'react';
import { init, reducer } from './reducer';
import { TODO_ACTIONS } from './case';

const initialState = [];

const Tasks = () => {
    const [todos, dispatch] = useReducer(reducer, initialState, init);

    const onInputChange = (value) => {
        dispatch({type: TODO_ACTIONS.ADD_TASK, payload: value})
    }

    const onDeleteHandler = (id) => {
        dispatch({type: TODO_ACTIONS.DELETE_TASK, payload: id})
    }

    const resetButton = () => {
        dispatch({type: TODO_ACTIONS.RESET_TASKS, payload: initialState});
    }

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <h2>Todo App {todos.length}</h2>
        <div style={{flexDirection: 'row'}}>
        <input placeholder='Add Task' onBlur={(e) => onInputChange(e.target.value)}/>
        <button onClick={resetButton}>Reset</button>
        </div>
        {todos.map(task => {
            return (
                <div 
                    key={task.id} 
                    style={
                        {
                            width: '30vw',
                            display: 'flex', 
                            flexDirection: 'row', 
                            alignItems: 'center', 
                            justifyContent: 'space-around'
                            }}
                        >
                    <h2>{task.name}</h2>
                    <button onClick={() => onDeleteHandler(task.id)}>Delete</button>
                </div>
            )
        })}
    </div>
  )
}

export default Tasks;