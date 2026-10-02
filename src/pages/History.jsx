import { Link } from "react-router-dom";

function History() {
  return (
    <section className="story-page">

      <div className="story-hero">

        <div className="story-overlay">

          <p className="eyebrow">
            THE NOCTURNIO STORY
          </p>

          <h1>
            From the First
            <span> Roast </span>
            to the Perfect Table
          </h1>

          <p>
            Nocturnio Roast & Tables was created around one simple idea —
            great coffee, beautiful food and unforgettable moments belong
            at the same table.
          </p>

        </div>

      </div>

      <section className="story-section">

        <div className="story-image">

          <img
            src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=90"
            alt="Aesthetic Nocturnio cafe"
          />

        </div>

        <div className="story-content">

          <p className="eyebrow">
            THE BEGINNING
          </p>

          <h2>
            It Started With a Love for Coffee
          </h2>

          <p>
            Nocturnio began with a passion for carefully roasted coffee
            and the atmosphere created around it. What started as a
            small idea grew into a space where people could slow down,
            meet friends and enjoy a carefully prepared cup of coffee.
          </p>

          <p>
            Every roast became part of the Nocturnio identity — rich,
            warm and created to make every visit feel special.
          </p>

        </div>

      </section>

      <section className="story-section reverse">

        <div className="story-image">

          <img
            src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=90"
            alt="Fresh roasted coffee"
          />

        </div>

        <div className="story-content">

          <p className="eyebrow">
            OUR ROASTS
          </p>

          <h2>
            Crafted One Cup at a Time
          </h2>

          <p>
            Coffee is at the heart of Nocturnio. Our concept celebrates
            the art of roasting, brewing and serving coffee with care.
          </p>

          <p>
            From the first aroma to the final sip, every cup is designed
            to create a warm and memorable experience.
          </p>

          <div className="story-highlight">

            <span>☕</span>

            <p>
              Rich roasts. Slow moments. Good conversations.
            </p>

          </div>

        </div>

      </section>

      <section className="story-section">

        <div className="story-image">

          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=90"
            alt="Elegant restaurant tables"
          />

        </div>

        <div className="story-content">

          <p className="eyebrow">
            THE TABLES
          </p>

          <h2>
            Where Coffee Meets Culinary Moments
          </h2>

          <p>
            Nocturnio grew beyond coffee. The tables became an important
            part of the experience — a place for dinners, celebrations,
            conversations and quiet evenings.
          </p>

          <p>
            Our restaurant concept combines elegant dining with the
            relaxed character of a modern café.
          </p>

        </div>

      </section>

      <section className="story-experience">

        <p className="eyebrow">
          THE NOCTURNIO EXPERIENCE
        </p>

        <h2>
          More Than a Café
        </h2>

        <p>
          Nocturnio Roast & Tables brings together three things:
        </p>

        <div className="story-values">

          <div className="story-value">

            <span>☕</span>

            <h3>
              Roast
            </h3>

            <p>
              Thoughtfully prepared coffee and handcrafted beverages.
            </p>

          </div>

          <div className="story-value">

            <span>🍽️</span>

            <h3>
              Tables
            </h3>

            <p>
              Beautiful dining spaces made for memorable evenings.
            </p>

          </div>

          <div className="story-value">

            <span>✨</span>

            <h3>
              Moments
            </h3>

            <p>
              Experiences that stay with you long after the last sip.
            </p>

          </div>

        </div>

      </section>

      <section className="story-future">

        <div>

          <p className="eyebrow">
            OUR VISION
          </p>

          <h2>
            The Story Continues
          </h2>

          <p>
            Nocturnio continues to grow while staying true to its
            original idea — bringing people together through coffee,
            food and atmosphere.
          </p>

          <Link
            to="/menu"
            className="gold-button"
          >
            Explore Our Menu
          </Link>

        </div>

      </section>

    </section>
  );
}

export default History;