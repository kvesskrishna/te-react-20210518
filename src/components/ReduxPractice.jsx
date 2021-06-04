import React from 'react';
import { createStore } from 'redux';

let initialState = {
    todos: []
}
function myReducer(state = initialState, action) {
    console.log(state, action)
    // let a = 'd';
    // let b = 'e';
    // while (a != b) {
    //     console.log('adsf')
    // }
    switch (action.type) {
        case 'ADD_TODO':
            let todos = [...state.todos]
            todos.push(action.payload)
            return { ...state, todos: todos }

        default: return state;
    }
}


const store = createStore(myReducer);

function createTodoAction(task) {
    return {
        type: 'ADD_TODO',
        payload: task
    }
}

export default function ReduxPractice() {
    store.dispatch(createTodoAction('shopping'));
    store.dispatch(createTodoAction('dinner'));
    store.dispatch(createTodoAction('drive home'));
    console.log(store.getState())
    return (
        <>
            <div>Redux practice</div>
        </>
    );
}
