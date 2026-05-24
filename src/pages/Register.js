import { useState, useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";

function Login() {

  const { login } = useContext(StoreContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const handleLogin = () => {
    if (!email) return alert("Enter email");

    login(email);
    navigate("/");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Login</h2>

      <input
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;