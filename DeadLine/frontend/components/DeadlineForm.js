import { useState } from "react";
import React from "react";
import axios from "axios";

function DeadlineForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("low");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5001/api/tasks", {
        title,
        priority,
      });
      onAdd(res.data);
      setTitle("");
      setPriority("low");
    } catch (err) {
      console.error("Error adding DeadLine", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="DeadLine Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <button type="submit">Add Deadline</button>
    </form>
  );
}
export default DeadlineForm;
