import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]:
        event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setMessage("");
    setLoading(true);

    try {
      const response = await fetch(
        "/api/login.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const text = await response.text();

      let data;

      try {
        data = JSON.parse(text);
      } catch {
        throw new Error(
          "PHP did not return valid JSON. Check login.php."
        );
      }

      if (
        !response.ok ||
        data.success === false
      ) {
        throw new Error(
          data.message ||
            "Login failed."
        );
      }

      localStorage.setItem(
        "nocturnioUser",
        JSON.stringify(data.user)
      );

      navigate("/");

    } catch (error) {

      console.error(
        "Login error:",
        error
      );

      setMessage(
        error.message ||
          "Unable to connect to the server."
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="auth-page">

      <div className="auth-card">

        <p className="eyebrow">
          WELCOME BACK
        </p>

        <h1>
          Login
        </h1>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="gold-button full-width"
            disabled={loading}
          >
            {loading
              ? "Logging in..."
              : "Login"}
          </button>

        </form>

        {message && (
          <p className="error-message">
            {message}
          </p>
        )}

        <p className="auth-link">
          Don't have an account?{" "}
          <Link to="/register">
            Register
          </Link>
        </p>

      </div>

    </section>
  );
}

export default Login;