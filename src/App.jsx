import { useState, useEffect, createContext } from "react";
import axios from "axios";

import AddNote from "./components/AddNote";
import NoteList from "./components/NoteList";

import "./App.css";
import "./utility.styles.css";

export const NoteListUpdateFunctionContext = createContext(null);

const App = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const getNotes = async () => {
      const API_URL = "http://127.0.0.1:8000";
      const { data } = await axios.get(`${API_URL}/notes`);
      setNotes(data);
    };
    getNotes();
  }, []);

  return (
    <div>
      <NoteListUpdateFunctionContext.Provider value={setNotes}>
        <div>
          <h1 id="app-title">Note It Down</h1>
          <AddNote />
          <NoteList notes={notes} />
        </div>
      </NoteListUpdateFunctionContext.Provider>
    </div>
  );
};

export default App;
