import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">

      {/* HERO SECTION */}

      <section className="luxury-hero">

        <div className="hero-image-overlay"></div>

        <div className="luxury-hero-content">

          <p className="eyebrow">
            NOCTURNIO ROAST & TABLES
          </p>

          <h1>
            Where Every
            <span> Night </span>
            Tells a Story
          </h1>

          <p className="luxury-hero-description">
            Experience handcrafted coffee, midnight desserts and
            sophisticated dining in one extraordinary destination.
          </p>

          <div className="hero-buttons">

            <Link
              to="/menu"
              className="gold-button"
            >
              Explore Menu
            </Link>

            <Link
              to="/order"
              className="outline-button"
            >
              Reserve a Table
            </Link>

          </div>

          <div className="hero-note">
            <span></span>
            Coffee · Cuisine · Conversations
          </div>

        </div>

        <div className="hero-scroll">
          <div></div>
          SCROLL
        </div>

      </section>


      {/* INTRODUCTION */}

      <section className="home-intro">

        <div className="intro-label">

          <span>✦</span>

          <div></div>

          THE NOCTURNIO EXPERIENCE

        </div>

        <div className="intro-content">

          <p className="eyebrow">
            MORE THAN A CAFÉ
          </p>

          <h2>
            A place where
            <em> coffee, food </em>
            and moments come together.
          </h2>

          <p>
            Nocturnio Roast & Tables brings together carefully
            crafted coffee, elegant dining and a warm atmosphere
            designed for slow evenings and meaningful conversations.
          </p>

          <p>
            From the first sip of coffee to the final dessert,
            every detail is created to make your evening memorable.
          </p>

          <Link
            to="/history"
            className="text-link"
          >
            Discover Our Story →
          </Link>

        </div>

      </section>


      {/* ATMOSPHERE */}

      <section className="home-gallery">

        <div className="gallery-heading">

          <p className="eyebrow">
            THE ATMOSPHERE
          </p>

          <h2>
            Designed for
            <span> unforgettable </span>
            evenings.
          </h2>

          <p>
            Step into a world of warm lights, rich aromas,
            elegant tables and relaxed conversations.
          </p>

        </div>


        <div className="gallery-grid">

          {/* ATMOSPHERE IMAGE 1 */}

          <div className="gallery-card gallery-large">

            <img
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1600&q=90"
              alt="Elegant restaurant interior"
            />

            <div className="gallery-overlay">

              <span>
                01 — DINING
              </span>

              <h3>
                The Perfect Table
              </h3>

              <p>
                Elegant spaces created for beautiful evenings.
              </p>

            </div>

          </div>


          {/* ATMOSPHERE IMAGE 2 */}

          <div className="gallery-card">

            <img
              src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1200&q=90"
              alt="Warm coffee shop interior"
            />

            <div className="gallery-overlay">

              <span>
                02 — ROAST
              </span>

              <h3>
                Coffee Rituals
              </h3>

              <p>
                Rich aromas and carefully crafted cups.
              </p>

            </div>

          </div>


          {/* ATMOSPHERE IMAGE 3 */}

          <div className="gallery-card">

            <img
              src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=90"
              alt="Beautiful cafe atmosphere"
            />

            <div className="gallery-overlay">

              <span>
                03 — MOMENTS
              </span>

              <h3>
                After Dark
              </h3>

              <p>
                Where conversations continue late into the night.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* SIGNATURE */}

      <section className="signature-section">

        <div className="signature-image">

          <img
            src="https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=1400&q=90"
            alt="Freshly brewed coffee"
          />

        </div>

        <div className="signature-content">

          <p className="eyebrow">
            OUR SIGNATURE
          </p>

          <h2>
            Crafted
            <br />
            <em>with intention.</em>
          </h2>

          <p>
            Every Nocturnio experience begins with quality.
            From carefully selected coffee beans to beautifully
            presented dishes, we believe the smallest details
            create the biggest memories.
          </p>

          <div className="signature-details">

            <div>
              <strong>01</strong>
              <span>Roasted Coffee</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Fine Dining</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Sweet Moments</span>
            </div>

          </div>

          <Link
            to="/menu"
            className="gold-button"
          >
            Explore Our Menu
          </Link>

        </div>

      </section>


      {/* FINAL CTA */}

      <section className="home-cta">

        <div className="cta-content">

          <p className="eyebrow">
            YOUR TABLE AWAITS
          </p>

          <h2>
            Make tonight
            <br />
            <em>worth remembering.</em>
          </h2>

          <p>
            Come for the coffee. Stay for the food.
            Leave with a story.
          </p>

          <Link
            to="/order"
            className="gold-button"
          >
            Reserve Your Table
          </Link>

        </div>

      </section>

    </div>
  );
}

export default Home;