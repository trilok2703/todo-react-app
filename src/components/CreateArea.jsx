import React, { useEffect, useState, useRef } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import UpdateIcon from "@mui/icons-material/Update";
import useNotes from "../hooks/useNotes";

const CreateArea = () => {
    const { editingNote, addNotes, updateNote, editId, cancelEdit } =
        useNotes();

    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    const [error, setError] = useState("");

    const [isExpanded, setIsExpanded] = useState(false);
    const inputRef = useRef(null);

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

    useEffect(()=>{
        if(isExpanded && inputRef.current) {
            inputRef.current.focus();
        }
    },[isExpanded]);

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === "title") {
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

        if (note.title.trim() === "") {
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

    const handleCancel = () => {
        cancelEdit();

        setNote({title:"",content:""});
        setIsExpanded(false);
    }

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
                        ref={inputRef}
                    />
                    {error && <p className="error-message">{error}</p>}
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
            <div className="note-actions">
                <Fab
                    color="primary"
                    aria-label={editId !== null ? "update" : "Add"}
                    onClick={submitNote}
                >
                    {editId !== null ? <UpdateIcon /> : <AddIcon />}
                </Fab>

                {editId !== null && (
                    <button type="button" onClick={handleCancel} className="cancel-edit-btn">Cancel</button>
                )}
            </div>
        </form>
    );
};

export default CreateArea;
