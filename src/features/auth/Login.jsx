import React, { useState } from "react";
import { login } from "./authAPI"; // assumes API function

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ email, password });
      const user = response.data.user;

      // Store in localStorage (optional)
      localStorage.setItem("user", JSON.stringify(user));

      // Alert role
      if (user.role === "admin") alert("Welcome, Admin!");
      else if (user.role === "teacher") alert("Welcome, Teacher!");
      else if (user.role === "student") alert("Welcome, Student!");
      else alert("Unknown role");
    } catch (err) {
      setError(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
