import { Route, Routes, useNavigate } from "react-router-dom";
import { LoginForm } from "./components/LoginForm/LoginForm";
import "./custom.css";

export default function App() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/sign-up");
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<button onClick={handleClick}>Register!</button>}
      />
      <Route path="/sign-up" element={<LoginForm />} />
    </Routes>
  );
}
