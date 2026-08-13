import React, { useEffect, useState, useContext } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import NotesContext from "../context/NotesContext";

const CreateArea = () => {
    const { notes, addNotes, updateNote, editId } = useContext(NotesContext);

    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        if (editId !== null) {
            const { title, content } = notes[editId];

            setNote({
                title,
                content,
            });

            setIsExpanded(true);
        }
    }, [editId, notes]);

    const handleExpanded = () => {
        setIsExpanded(true);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setNote((prevNote) => {
            return {
                ...prevNote,
                [name]: value,
            };
        });
    };

    const submitNote = (event) => {
        event.preventDefault();

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
