import "./App.css";
import Header from "./components/Header";
import CreateArea from "./components/CreateArea";
import Footer from "./components/Footer";
import NoteList from "./components/NoteList";
import {NotesProvider} from "./context/NotesContext";

function App() {
    return (
        <NotesProvider>
            <Header />
            <CreateArea />
            <NoteList/>
            <Footer />
        </NotesProvider>
    );
}

export default App;
