import { useEffect, useState } from "react";
import axios from "axios";
import DeadlineForm from "./components/DeadlineForm";
import DeadlineList from "./components/DeadlineList";

function App() {
  const [deadline, setDeadline] = useState([]);

  const fetchDeadline = async () => {
    const res = await axios.get("http://localhost:5001/api/tasks");

    setDeadline(res.data);
  };

  useEffect(() => {
    fetchDeadline();
  }, []);

  const handleAdd = (newDeadline) => {
    setDeadline([...deadline, newDeadline]);
  };

  const handleStatusChange = (updated) => {
    setDeadline((prev) =>
      prev.map((d) => (d._id === updated._id ? updated : d))
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Deadline Manager</h2>
      <DeadlineForm onAdd={handleAdd} />
      <DeadlineList deadline={deadline} onStatusChange={handleStatusChange} />
    </div>
  );
}

export default App;
