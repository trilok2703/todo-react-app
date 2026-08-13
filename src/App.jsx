import { useState } from 'react';
import './App.css';
import CreateArea from './components/CreateArea';
import Header from './components/Header';
import Note from './components/Note';
import Footer from './components/Footer';

function App() {

  const [notes, setNotes] = useState([]);
  const [editId, setEditId] = useState(null);

  const addNotes = (newNote) => {
    setNotes((prevNotes)=>{
      return [...prevNotes,newNote ]
    })
  }

  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((note,index) => {
        return index !== id;
      })
    })
  }

  const startEdit = (id) =>{
    setEditId(id);
  }

  const startUpdate = (editId, updatedNote) => {
    setNotes((prevNotes) => {
      return prevNotes.map((notes,index) => {
        if(index == editId) {
          return updatedNote;
        }

        return notes;
      })
    })

    setEditId(null);
  }
  return (
      <>
          <Header />
          <CreateArea
              onAdd={addNotes}
              onUpdate={startUpdate}
              notes={notes}
              editId={editId}
          />
          <div>
              {notes.map((noteItem, index) => (
                  <Note
                      key={index}
                      id={index}
                      data={noteItem}
                      onDelete={deleteNote}
                      onEdit={startEdit}
                  />
              ))}
          </div>
          <Footer />
      </>
  );
}

export default App
