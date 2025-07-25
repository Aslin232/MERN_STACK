import React, { useState, useEffect } from "react";

function NoteForm({ onAdd, onUpdate, editingNote }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setContent(editingNote.content);
    } else {
      setTitle("");
      setContent("");
    }
  }, [editingNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return;

    const note = { title, content };
    if (editingNote) {
      onUpdate(editingNote._id, note);
    } else {
      onAdd(note);
    }

    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Note Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ width: "100%", marginBottom: "10px" }}
      />
      <textarea
        placeholder="Note Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows="4"
        style={{ width: "100%", marginBottom: "10px" }}
      />
      <button type="submit">{editingNote ? "Update Note" : "Add Note"}</button>
    </form>
  );
}

export default NoteForm;
