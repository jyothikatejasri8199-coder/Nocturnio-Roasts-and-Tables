import { useState } from "react";

function Order() {
  const [form, setForm] = useState({
    customer_name: "",
    email: "",
    reservation_date: "",
    reservation_time: "",
    guests: 2,
    notes: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setShowPopup(true);
  };

  return (
    <section className="auth-page">

      <div className="order-card">

        <p className="eyebrow">
          THE TABLES
        </p>

        <h1>
          Reserve Your Table
        </h1>

        <p className="order-intro">
          Step into the Nocturnio evening and make
          your night memorable.
        </p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="customer_name"
            placeholder="Your name"
            value={form.customer_name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label>
            Reservation date
          </label>

          <input
            type="date"
            name="reservation_date"
            value={form.reservation_date}
            onChange={handleChange}
            required
          />

          <label>
            Reservation time
          </label>

          <input
            type="time"
            name="reservation_time"
            value={form.reservation_time}
            onChange={handleChange}
            required
          />

          <label>
            Number of guests
          </label>

          <input
            type="number"
            name="guests"
            min="1"
            max="20"
            value={form.guests}
            onChange={handleChange}
            required
          />

          <textarea
            name="notes"
            placeholder="Special requests (optional)"
            value={form.notes}
            onChange={handleChange}
            rows="4"
          />

          <button
            type="submit"
            className="gold-button full-width"
          >
            Reserve Table
          </button>

        </form>

      </div>

      {showPopup && (
        <div className="reservation-popup-overlay">

          <div className="reservation-popup">

            <div className="popup-check">
              ✓
            </div>

            <p className="eyebrow">
              NOCTURNIO
            </p>

            <h2>
              Reserved Your Table!
            </h2>

            <p>
              Your table has been reserved successfully.
              We look forward to welcoming you.
            </p>

            <button
              type="button"
              className="gold-button"
              onClick={() => setShowPopup(false)}
            >
              Done
            </button>

          </div>

        </div>
      )}

    </section>
  );
}

export default Order;