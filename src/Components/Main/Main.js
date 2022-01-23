import React, { useState } from 'react';
import Content from '../Content/Content';
import Header from '../Header/Header';

const Main = () => {
    const [todos, setTodos] = useState([
        {
            text: 'Add your task here',
            done: false
        }
    ]);

    const addNewTodo = (e, text, onDone) => {
        e.preventDefault();
        if (text) {
            let newTodos = [...todos];
            newTodos = [...newTodos, { text, done: false }];
            setTodos(newTodos);
            onDone();
        }
    }

    const onCompleteTodo = index => {
        const newTodos = [...todos];
        const isDone = todos[index].done;
        newTodos[index].done = !isDone;
        setTodos(newTodos);
    }

    const onRemoveTodo = (e, index) => {
        e.stopPropagation();
        const newTodos = [...todos];
        const removeTodo = newTodos.splice(index, 1);
        console.log(removeTodo)
        setTodos(newTodos);
    }

    return (
        <div>
            <Header addNewTodo={addNewTodo} />
            <Content todos={todos} onCompleteTodo={onCompleteTodo} onRemoveTodo={onRemoveTodo} />
        </div>
    );
};

export default Main;