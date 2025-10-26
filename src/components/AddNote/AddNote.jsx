import { useState, useContext } from "react";
import axios from "axios";

import { NoteListUpdateFunctionContext } from "../../App";
import "./AddNote.styles.css";

const AddNote = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const setNotes = useContext(NoteListUpdateFunctionContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (title.trim().length > 0) {
      if (body.trim().length === 0 || body === null || body === undefined) {
        body = "";
      }
      setIsLoading(true);
      const API_URL = "http://127.0.0.1:8000";
      const { data } = await axios.post(`${API_URL}/note`, { title, body });
      setNotes((prev) => [...prev, data]);
    } else {
      setError("Title is required");
    }
    setTitle("");
    setBody("");
    setIsLoading(false);
  };

  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event)} id="add-note-form">
        <input
          type="text"
          name="title"
          id="title-input"
          placeholder="Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <textarea
          name="body"
          id="body-input"
          placeholder="Body"
          value={body}
          onChange={(event) => setBody(event.target.value)}
        />
        <button type="submit" id="add-note-button" disabled={isLoading}>
          {isLoading ? "Adding..." : "Add Note"}
        </button>
        {error && <p id="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default AddNote;
