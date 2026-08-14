import React from "react";
import Note from "./Note";
import useNotes from "../hooks/useNotes";

const NoteList = () => {
    const { notes } = useNotes();

    return (
        <div>
            {notes.map((noteItem, index) => (
                <Note key={index} id={index} data={noteItem} />
            ))}
        </div>
    );
};

export default NoteList;
