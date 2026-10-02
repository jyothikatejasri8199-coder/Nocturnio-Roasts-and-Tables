import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previousForm) => ({
      ...previousForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setMessage("");
    setMessageType("");

    if (form.name.trim() === "") {
      setMessage("Please enter your full name.");
      setMessageType("error");
      return;
    }

    if (form.email.trim() === "") {
      setMessage("Please enter your email address.");
      setMessageType("error");
      return;
    }

    if (form.password.length < 6) {
      setMessage("Password must contain at least 6 characters.");
      setMessageType("error");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setMessage("Passwords do not match.");
      setMessageType("error");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "https://nocturnio-roasts-and-tables.onrender.com/api/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: form.name.trim(),
            email: form.email.trim(),
            password: form.password,
          }),
        }
      );

      const data = await response.json();

      console.log("Register response:", data);

      if (!response.ok || data.success === false) {
        throw new Error(
          data.message || "Registration failed."
        );
      }

      setMessage(
        "Registration successful! Redirecting to login..."
      );
      setMessageType("success");

      setForm({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      setTimeout(() => {
        navigate("/login");
      }, 1500);

    } catch (error) {
      console.error("Registration error:", error);

      setMessage(
        error.message ||
          "Unable to connect to the backend."
      );

      setMessageType("error");

    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="auth-page">
      <div className="auth-card">

        <p className="eyebrow">
          JOIN NOCTURNIO
        </p>

        <h1>
          Create Account
        </h1>

        <p className="auth-description">
          Create your Nocturnio account and
          reserve your table for an unforgettable
          evening.
        </p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Full name"
            value={form.name}
            onChange={handleChange}
            autoComplete="name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={form.email}
            onChange={handleChange}
            autoComplete="email"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            autoComplete="new-password"
            minLength={6}
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            value={form.confirmPassword}
            onChange={handleChange}
            autoComplete="new-password"
            minLength={6}
            required
          />

          <button
            type="submit"
            className="gold-button full-width"
            disabled={loading}
          >
            {loading
              ? "Creating Account..."
              : "Create Account"}
          </button>

        </form>

        {message && (
          <div
            className={
              messageType === "success"
                ? "success-message-box"
                : "error-message"
            }
          >
            {message}
          </div>
        )}

        <p className="auth-link">
          Already have an account?{" "}
          <Link to="/login">
            Login
          </Link>
        </p>

      </div>
    </section>
  );
}

export default Register;