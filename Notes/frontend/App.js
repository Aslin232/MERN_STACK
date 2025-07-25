import React, { useState, useEffect } from "react";
import axios from "axios";
import NoteForm from "./components/NoteForm";
import NotesList from "./components/NotesList";

function App() {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    const res = await axios.get("http://localhost:5001/api/notes");
    setNotes(res.data);
  };

  const addNote = async (note) => {
    const res = await axios.post("http://localhost:5001/api/notes", note);
    setNotes([...notes, res.data]);
  };

  const updateNote = async (id, updatedNote) => {
    const res = await axios.put(
      `http://localhost:5001/api/notes/${id}`,
      updatedNote
    );
    setNotes(notes.map((note) => (note._id === id ? res.data : note)));
    setEditingNote(null);
  };

  const deleteNote = async (id) => {
    await axios.delete(`http://localhost:5001/api/notes/${id}`);
    setNotes(notes.filter((note) => note._id !== id));
  };

  return (
    <div style={{ maxWidth: "600px", margin: "30px auto", padding: "10px" }}>
      <h2>📝 Notes App</h2>
      <NoteForm
        onAdd={addNote}
        onUpdate={updateNote}
        editingNote={editingNote}
      />
      <NotesList notes={notes} onEdit={setEditingNote} onDelete={deleteNote} />
    </div>
  );
}

export default App;
