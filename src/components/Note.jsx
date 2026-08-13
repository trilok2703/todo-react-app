import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

const Note = ({data, id, onDelete}) => {
    const {title,content} = data;

    const deleteNote = (event) =>{
        onDelete(id);
    }

    return(
        <div className="note">  
        <div className="note-header">{title}</div>
        <p className="note-content">{content}</p>
        <button className="delete-note-btn" onClick={deleteNote}>
            <DeleteIcon/>
        </button>
        </div>
    );
};

export default Note;