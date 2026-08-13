import { createContext, useState } from "react";

const NotesContext = createContext();

const NotesProvider = ({children}) => {
    const [notes, setNotes] = useState([]);
    const [editId, setEditId] = useState(null);

    const addNotes = (newNote) => {
        setNotes((prevNotes) => {
            return [...prevNotes, newNote];
        });
    };

    const deleteNote = (id) => {
        setNotes((prevNotes) => {
            return prevNotes.filter((note, index) => {
                return index !== id;
            });
        });
    };

     const startEdit = (id) => {
        setEditId(id);
    };

    const updateNote = (editId, updatedNote) => {
        setNotes((prevNotes) => {
            return prevNotes.map((notes, index) => {
                if (index == editId) {
                    return updatedNote;
                }

                return notes;
            });
        });

        setEditId(null);
    };

    return (
        <NotesContext.Provider value={{notes, addNotes, deleteNote, startEdit, updateNote, editId}}>
            {children}
        </NotesContext.Provider>
    )
}

export {NotesProvider};
export default NotesContext;