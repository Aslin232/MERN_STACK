import React from "react";
import axios from "axios";

function DeadlineList({ deadline, onStatusChange }) {
  const markCompleted = async (id) => {
    try {
      const res = await axios.patch(
        `http://localhost:5001/api/tasks/${id}/complete`
      );
      onStatusChange(res.data); // Update the state in App
    } catch (err) {
      console.error("Error marking as completed:", err);
    }
  };
  return (
    <ul>
      {deadline.map((d) => (
        <li key={d._id}>
          {d.title} - <strong>{d.priority}</strong> -{" "}
          {d.completed ? (
            "✅ Completed"
          ) : (
            <>
              ❌ Not Completed{" "}
              <button onClick={() => markCompleted(d._id)}>Mark as Done</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default DeadlineList;
