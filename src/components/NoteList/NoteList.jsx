import Note from "./Note/Note";

import "./NoteList.styles.css";

const NoteList = ({ notes }) => {
  return (
    <div id="note-list-container">
      <h2 id="notes-list-header">Notes</h2>
      <ul id="notes-list">
        {notes.map((note) => (
          <li key={note.id}>
            <Note note={note} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteList;
