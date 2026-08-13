import React, { useState } from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const CreateArea = ({onAdd}) =>{

    const [note, setNote] = useState({
        title:"",
        content:""
    })

    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpanded = () => {
        setIsExpanded(true);
    }

    const handleChange = (event) =>{
        const {name, value} = event.target;

        setNote((prevNote) =>{
            return {
                ...prevNote,
                [name] : value
            }
        })
    }

    const submitNote = (event) => {
        onAdd(note);
        setNote({
            title:"",
            content:""
        });
        event.preventDefault();
    }

    return (
        <form className="create-note">
            {isExpanded && (
                <input
                    name="title"
                    type="text"
                    placeholder="Title"
                    onChange={handleChange}
                    value={note.title}
                />
            )}

            <textarea
                name="content"
                placeholder="Enter content..."
                rows={isExpanded ? 3 : 1}
                onChange={handleChange}
                value={note.content}
                onClick={handleExpanded}
            />
            <Fab color="primary" aria-label="add" onClick={submitNote}>
                <AddIcon />
            </Fab>
        </form>
    );
}

export default CreateArea;