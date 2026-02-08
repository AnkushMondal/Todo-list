import {useContext, createContext} from 'react';


export const TodoContext = createContext({
    // default value
    todos: [
        {
            id:1,
            todo: "Todo msg",
            completed: false
        }
    ],

    // functions

    addTodos: (todo) => {},
    UpdateTodo: (id , todo) => {},
    DeleteTodo: (id) => {},
    toggleComplete: (id) => {}
});

export const useTodo = ()=> {
    return useContext(TodoContext);
}


export const TodoContextProvider = TodoContext.Provider;
    