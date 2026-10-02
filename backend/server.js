const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const pool = require("./db");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ===============================
// HOME
// ===============================
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Nocturnio backend is running!",
  });
});

// ===============================
// TEST DATABASE
// ===============================
app.get("/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");

    res.json({
      success: true,
      message: "Neon PostgreSQL connected successfully!",
      time: result.rows[0].now,
    });
  } catch (error) {
    console.error("Database error:", error);

    res.status(500).json({
      success: false,
      message: "Database connection failed.",
      errorMessage: error.message,
      errorCode: error.code || null,
    });
  }
});

// ===============================
// REGISTER
// ===============================
app.post("/api/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check required fields
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Name, email and password are required.",
      });
    }

    // Check password length
    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must contain at least 6 characters.",
      });
    }

    // Check if email already exists
    const existingUser = await pool.query(
      "SELECT id FROM users WHERE email = $1",
      [email.trim().toLowerCase()]
    );

    if (existingUser.rows.length > 0) {
      return res.status(409).json({
        success: false,
        message: "Email already registered.",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user
    const result = await pool.query(
      `INSERT INTO users (name, email, password)
       VALUES ($1, $2, $3)
       RETURNING id, name, email, created_at`,
      [
        name.trim(),
        email.trim().toLowerCase(),
        hashedPassword,
      ]
    );

    res.status(201).json({
      success: true,
      message: "Registration successful!",
      user: result.rows[0],
    });

  } catch (error) {
    console.error("Registration error:", error);

    res.status(500).json({
      success: false,
      message: "Registration failed.",
      error: error.message,
    });
  }
});

// ===============================
// LOGIN
// ===============================
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required.",
      });
    }

    // Find user
    const result = await pool.query(
      `SELECT id, name, email, password
       FROM users
       WHERE email = $1`,
      [email.trim().toLowerCase()]
    );

    if (result.rows.length === 0) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    const user = result.rows[0];

    // Check password
    const passwordMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!passwordMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    res.json({
      success: true,
      message: "Login successful!",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });

  } catch (error) {
    console.error("Login error:", error);

    res.status(500).json({
      success: false,
      message: "Login failed.",
      error: error.message,
    });
  }
});

// ===============================
// RESERVATION
// ===============================
app.post("/api/reservations", async (req, res) => {
  try {
    const {
      customer_name,
      email,
      reservation_date,
      reservation_time,
      guests,
      notes,
    } = req.body;

    if (
      !customer_name ||
      !email ||
      !reservation_date ||
      !reservation_time ||
      !guests
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required reservation fields.",
      });
    }

    const result = await pool.query(
      `INSERT INTO reservations
       (
         customer_name,
         email,
         reservation_date,
         reservation_time,
         guests,
         notes
       )
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING *`,
      [
        customer_name.trim(),
        email.trim().toLowerCase(),
        reservation_date,
        reservation_time,
        guests,
        notes || null,
      ]
    );

    res.status(201).json({
      success: true,
      message: "Reservation created successfully!",
      reservation: result.rows[0],
    });

  } catch (error) {
    console.error("Reservation error:", error);

    res.status(500).json({
      success: false,
      message: "Reservation failed.",
      error: error.message,
    });
  }
});

// ===============================
// START SERVER
// ===============================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Nocturnio backend running on port ${PORT}`);
});