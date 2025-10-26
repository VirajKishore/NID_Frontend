import axios from "axios";
import { useState, useContext, useRef } from "react";
import { NoteListUpdateFunctionContext } from "../../../App";

import "./Note.styles.css";

export default function NoteEditor({ note, setNoteView }) {
  const [title, setTitle] = useState(note.title);
  const [body, setBody] = useState(note.body);
  const [isInvalidSave, setIsInvalidSave] = useState(false);
  const setNotes = useContext(NoteListUpdateFunctionContext);
  const noteTitleInputRef = useRef(null);

  const handleNoteSave = async (event, id) => {
    event.preventDefault();
    if (title.length > 0) {
      const API_URL = import.meta.env.VITE_API_URL ?? "http://127.0.0.1:8000";
      await axios.put(`${API_URL}/note/${id}`, {
        title: title,
        body: body,
      });
      const { data } = await axios.get(`${API_URL}/notes`);
      setNotes(data);
      setNoteView("viewing");
    } else {
      setIsInvalidSave(true);
      noteTitleInputRef.current.focus();
    }
  };

  return (
    <form
      id="note-container"
      onSubmit={(event) => handleNoteSave(event, note.id)}
    >
      <input
        type="text"
        placeholder="Enter Note Title"
        id="note-title-edit-input"
        className={isInvalidSave ? "input-error" : ""}
        value={title}
        onChange={(event) => {
          setIsInvalidSave(false);
          setTitle(event.target.value);
        }}
      />
      <textarea
        placeholder="Enter Note"
        id="note-body-edit-input"
        className={isInvalidSave ? "input-error" : ""}
        cols={30}
        rows={5}
        value={body}
        onChange={(event) => {
          setIsInvalidSave(false);
          setBody(event.target.value);
        }}
      />
      <div className="note-buttons-container">
        <button className="save-btn" type="submit">
          Save
        </button>
        <button
          className="neutral-btn"
          type="button"
          onClick={() => setNoteView("viewing")}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
