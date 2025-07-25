import React from "react";

const NotesList = ({ notes, onEdit, onDelete }) => {
  if (notes.length === 0) {
    return <p>No notes yet</p>;
  }
  return (
    <div>
      {notes.map((note) => (
        <div
          key={note._id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <button onClick={() => onEdit(note)} style={{ marginRight: "10px" }}>
            Edit
          </button>
          <button onClick={() => onDelete(note._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default NotesList;
