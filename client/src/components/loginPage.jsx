import { useState } from "react";
import { useNavigate } from "react-router-dom";

const users = [
  { username: "ponpandian", password: "1234it" },
  { username: "laserbeam", password: "1234it" },
];

const LoginPage = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Please fill in all fields.");
      return;
    }

    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      sessionStorage.setItem("isAuthenticated", "true");
      setIsAuthenticated(true);
      navigate("/dashboard");
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <main className="login-container">
      <section className="login-card">
        <header className="login-header">
          <h1>SIGN IN</h1>
        </header>
        <form className="login-form" onSubmit={handleSubmit}>
          <fieldset className="form-group">
            <label htmlFor="username">Username </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
            />
          </fieldset>
          <fieldset className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
          </fieldset>
          {error && (
            <div className="error-modal">
              <span className="close-btn" onClick={() => setError("")}>
                &times;
              </span>
              *{error}
            </div>
          )}

          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </section>
    </main>
  );
};

export default LoginPage;
