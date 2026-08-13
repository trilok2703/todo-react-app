import React, { useEffect, useState, useContext } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import NotesContext from "../context/NotesContext";

const CreateArea = () => {
    const { editingNote, addNotes, updateNote, editId } = useContext(NotesContext);

    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    const [error, setError] = useState("");

    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        if (editingNote) {
            const { title, content } = editingNote;

            setNote({
                title,
                content,
            });

            setIsExpanded(true);
        }
    }, [editId]);

    const handleExpanded = () => {
        setIsExpanded(true);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        if(name === "title") {
            setError("");
        }

        setNote((prevNote) => {
            return {
                ...prevNote,
                [name]: value,
            };
        });
    };

    const submitNote = (event) => {
        event.preventDefault();

        if(note.title.trim() === ""){
            setError("Title is required");
            setIsExpanded(true);
            return;
        }

        if (editId !== null) {
            updateNote(editId, note);

            setNote({
                title: "",
                content: "",
            });

            setIsExpanded(false);
            return;
        }

        addNotes(note);
        setNote({
            title: "",
            content: "",
        });
        setIsExpanded(false);
    };

    return (
        <form className="create-note">
            {isExpanded && (
                <>
                    <input
                        name="title"
                        type="text"
                        placeholder="Title"
                        onChange={handleChange}
                        value={note.title}
                    />
                    {error && (
                        <p className="error-message">
                            {error}
                        </p>
                    )}
                </>
                
            )}

            <textarea
                name="content"
                placeholder="Enter content..."
                rows={isExpanded ? 3 : 1}
                onChange={handleChange}
                value={note.content}
                onClick={handleExpanded}
            />
            <Fab
                color="primary"
                aria-label={editId !== null ? "Edit" : "Add"}
                onClick={submitNote}
            >
                {editId !== null ? <EditIcon /> : <AddIcon />}
            </Fab>
        </form>
    );
};

export default CreateArea;
