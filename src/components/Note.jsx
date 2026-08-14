import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
import useNotes from "../hooks/useNotes";

const Note = ({ data, id }) => {
    const { deleteNote, startEdit } = useNotes();

    const { title, content } = data;

    const handleDelete = (event) => {
        deleteNote(id);
    };

    const editNote = () => {
        startEdit(id);
    };

    return (
        <div className="note">
            <div className="note-header">{title}</div>
            <p className="note-content">{content}</p>

            <div className="note-btn-container">
                <button className="edit-note-btn" onClick={editNote}>
                    <EditIcon />
                </button>
                <button className="delete-note-btn" onClick={handleDelete}>
                    <DeleteIcon />
                </button>
            </div>
        </div>
    );
};

export default Note;
