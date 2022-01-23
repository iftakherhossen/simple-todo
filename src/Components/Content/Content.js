import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

const Content = ({ todos, onCompleteTodo, onRemoveTodo}) => {
    return (
        <div className="TodoContent">
            <ul>
                {
                    todos.length ? todos.map((todo, index) => (
                        <li
                            key={index}
                            onClick={onCompleteTodo.bind(this, index)}
                            className={`todo ${todo.done ? 'completed' : ''}`}
                        >
                            {todo.text}
                            <span
                                onClick={(e) => onRemoveTodo(e, index)} className="remove"
                            >
                                <DeleteIcon />
                            </span>
                        </li>
                    )) : <li className="NoTodo">Nothing to show!</li>
                }
            </ul>
        </div>
    );
};

export default Content;