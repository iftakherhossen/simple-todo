import { Divider, IconButton, TextField } from '@mui/material';
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';

const Header = ({ addNewTodo }) => {
    const [input, setInput] = useState('');
    const [visible, setVisible] = useState(false);

    const onDone = () => {
        setInput('');
    }
    const handleVisibility = () => {
        setVisible(!visible);
    }

    return (
        <header>
            <form onSubmit={(e) => addNewTodo(e, input, onDone)}>
                {
                    visible ?
                        <TextField
                            type="text"
                            placeholder="What to do?"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="inputField"
                        />
                        :
                        <h1 id="title" className="Title">Todo List</h1>
                }
                {
                    !visible ?
                        <IconButton>
                            <AddIcon className="Icon" onClick={handleVisibility} />
                        </IconButton>
                        :
                        <IconButton>
                            <ClearIcon className="Icon RedIcon" onClick={handleVisibility} />
                        </IconButton>
                }
            </form>
            <Divider />
        </header>
    );
};

export default Header;