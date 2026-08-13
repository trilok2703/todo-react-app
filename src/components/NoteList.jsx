import React, { useContext } from "react";
import NotesContext from "../context/NotesContext";
import Note from "./Note";

const NoteList = () => {
    const { notes } = useContext(NotesContext);

    return (
        <div>
            {notes.map((noteItem, index) => (
                <Note key={index} id={index} data={noteItem} />
            ))}
        </div>
    );
};

export default NoteList;
