import { Link } from "react-router-dom";

function Navbar({ user, setUser }) {
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <nav style={{ padding: "10px", backgroundColor: "#eee" }}>
      <Link to="/" style={{ marginRight: "15px" }}>
        Home
      </Link>
      {!user && (
        <>
          <Link to="/login" style={{ marginRight: "10px" }}>
            Login
          </Link>
          <Link to="/register">Register</Link>
        </>
      )}
      {user && (
        <button onClick={handleLogout} style={{ float: "right" }}>
          Logout
        </button>
      )}
    </nav>
  );
}

export default Navbar;
