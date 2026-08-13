import { useState } from 'react';
import './App.css';
import CreateArea from './components/CreateArea';
import Header from './components/Header';
import Note from './components/Note';
import Footer from './components/Footer';

function App() {

  const [notes, setNotes] = useState([]);

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

  return (
   <>
   <Header/>
   <CreateArea onAdd={addNotes}/>
   <div>
      {notes.map((noteItem,index) => <Note key={index} id={index} data={noteItem} onDelete={deleteNote}/>)}
   </div>
    <Footer/>
   </>
  )
}

export default App
