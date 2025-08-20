//.env

import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import PhotoGallery from "./components/PhotoGallery";
import { AuthProvider } from "./context/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <h2>Login</h2>
        <LoginForm />
        <h2>Register</h2>
        <RegisterForm />
        <h2>Photos</h2>
        <PhotoGallery />
      </div>
    </AuthProvider>
  );
}
