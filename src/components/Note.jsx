import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';

const Note = ({data, id, onDelete, onEdit}) => {
    const {title,content} = data;

    const deleteNote = (event) =>{
        onDelete(id);
    }

    const editNote = () =>{
        onEdit(id);
    }

    return (
        <div className="note">
            <div className="note-header">{title}</div>
            <p className="note-content">{content}</p>
            
            <div className="note-btn-container">
                <button className="edit-note-btn" onClick={editNote}>
                <EditIcon />
            </button>
            <button className="delete-note-btn" onClick={deleteNote}>
                <DeleteIcon />
            </button>
            </div>
            
        </div>
    );
};

export default Note;