import { useEffect, useState } from "react";

function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);

  const menuItems = [
    /* =====================================================
       COFFEE & BEVERAGES
    ===================================================== */

    {
      id: 1,
      name: "South Indian Filter Coffee",
      category: "Coffee & Beverages",
      price: 150,
      description:
        "Traditional South Indian filter coffee served with rich aroma and frothy milk.",
      image: "/images/menu/south-indian-filter-coffee.jpg",
    },

    {
      id: 2,
      name: "Masala Chai",
      category: "Coffee & Beverages",
      price: 150,
      description:
        "Classic Indian tea brewed with milk, tea leaves and aromatic spices.",
      image: "/images/menu/masala-chai.jpg",
    },

    {
      id: 3,
      name: "Indian Style Cold Coffee",
      category: "Coffee & Beverages",
      price: 180,
      description:
        "Chilled creamy coffee topped with a smooth layer of foam.",
      image: "/images/menu/indian-style-cold-coffee.jpg",
    },

    {
      id: 4,
      name: "Iced Coffee",
      category: "Coffee & Beverages",
      price: 180,
      description:
        "Refreshing chilled coffee served over ice with creamy milk.",
      image: "/images/menu/iced-coffee.jpg",
    },

    {
      id: 5,
      name: "Classic Cappuccino",
      category: "Coffee & Beverages",
      price: 190,
      description:
        "Espresso balanced with steamed milk and a generous layer of foam.",
      image: "/images/menu/classic-cappuccino.jpg",
    },

    {
      id: 6,
      name: "Caramel Latte",
      category: "Coffee & Beverages",
      price: 200,
      description:
        "Smooth espresso and steamed milk finished with caramel sweetness.",
      image: "/images/menu/caramel-latte.jpg",
    },

    {
      id: 7,
      name: "Mango Lassi",
      category: "Coffee & Beverages",
      price: 180,
      description:
        "Creamy yoghurt drink blended with sweet ripe mangoes.",
      image: "/images/menu/mango-lassi.jpg",
    },

    {
      id: 8,
      name: "Sweet Lassi",
      category: "Coffee & Beverages",
      price: 160,
      description:
        "Traditional chilled yoghurt drink with a naturally creamy texture.",
      image: "/images/menu/sweet-lassi.jpg",
    },

    /* =====================================================
       SOUTH INDIAN
    ===================================================== */

    {
      id: 9,
      name: "Masala Dosa",
      category: "South Indian",
      price: 180,
      description:
        "Crispy golden dosa filled with spiced potato masala and served with chutney.",
      image: "/images/menu/masala-dosa.jpg",
    },

    {
      id: 10,
      name: "Plain Dosa",
      category: "South Indian",
      price: 150,
      description:
        "Crispy traditional rice and lentil dosa served with chutneys.",
      image: "/images/menu/plain-dosa.jpg",
    },

    {
      id: 11,
      name: "Idli Sambar",
      category: "South Indian",
      price: 160,
      description:
        "Soft steamed idlis served with hot sambar and coconut chutney.",
      image: "/images/menu/idli-sambar.jpg",
    },

    {
      id: 12,
      name: "Medu Vada",
      category: "South Indian",
      price: 160,
      description:
        "Crispy golden lentil fritters served with sambar and chutney.",
      image: "/images/menu/medu-vada.jpg",
    },

    {
      id: 13,
      name: "Pongal",
      category: "South Indian",
      price: 170,
      description:
        "Comforting South Indian rice and lentil dish seasoned with pepper and spices.",
      image: "/images/menu/pongal.jpg",
    },

    {
      id: 14,
      name: "Uttapam",
      category: "South Indian",
      price: 190,
      description:
        "Soft thick dosa topped with onions, tomatoes and fresh herbs.",
      image: "/images/menu/uttapam.jpg",
    },

    {
      id: 15,
      name: "Upma",
      category: "South Indian",
      price: 150,
      description:
        "Warm semolina breakfast cooked with vegetables, herbs and aromatic spices.",
      image: "/images/menu/upma.jpg",
    },

    {
      id: 16,
      name: "Ghee Roast Dosa",
      category: "South Indian",
      price: 220,
      description:
        "Extra-crispy dosa roasted with fragrant ghee and served with chutneys.",
      image: "/images/menu/ghee-roast-dosa.jpg",
    },

    /* =====================================================
       NORTH INDIAN
    ===================================================== */

    {
      id: 17,
      name: "Paneer Tikka",
      category: "North Indian",
      price: 280,
      description:
        "Char-grilled paneer cubes marinated in yoghurt and aromatic Indian spices.",
      image: "/images/menu/paneer-tikka.jpg",
    },

    {
      id: 18,
      name: "Butter Chicken",
      category: "North Indian",
      price: 360,
      description:
        "Tender chicken cooked in a rich tomato, butter and cream gravy.",
      image: "/images/menu/butter-chicken.jpg",
    },

    {
      id: 19,
      name: "Paneer Butter Masala",
      category: "North Indian",
      price: 320,
      description:
        "Soft paneer cooked in a rich tomato and buttery masala.",
      image: "/images/menu/paneer-butter-masala.jpg",
    },

    {
      id: 20,
      name: "Dal Makhani",
      category: "North Indian",
      price: 260,
      description:
        "Slow-cooked black lentils finished with butter and cream.",
      image: "/images/menu/dal-makhani.jpg",
    },

    {
      id: 21,
      name: "Chole Bhature",
      category: "North Indian",
      price: 240,
      description:
        "Spiced chickpea curry served with fluffy deep-fried bhature.",
      image: "/images/menu/chole-bhature.jpg",
    },

    {
      id: 22,
      name: "Aloo Paratha",
      category: "North Indian",
      price: 190,
      description:
        "Stuffed Indian flatbread filled with seasoned mashed potatoes.",
      image: "/images/menu/aloo-paratha.jpg",
    },

    {
      id: 23,
      name: "Garlic Naan",
      category: "North Indian",
      price: 140,
      description:
        "Soft tandoori naan topped with garlic, coriander and butter.",
      image: "/images/menu/garlic-naan.jpg",
    },

    {
      id: 24,
      name: "Tandoori Chicken",
      category: "North Indian",
      price: 380,
      description:
        "Juicy chicken marinated in yoghurt and spices, roasted in the tandoor.",
      image: "/images/menu/tandoori-chicken.jpg",
    },

    /* =====================================================
       BIRYANI & MAIN COURSE
    ===================================================== */

    {
      id: 25,
      name: "Hyderabadi Chicken Biryani",
      category: "Biryani & Main Course",
      price: 350,
      description:
        "Fragrant basmati rice layered with spiced chicken and aromatic herbs.",
      image: "/images/menu/hyderabadi-chicken-biryani.jpg",
    },

    {
      id: 26,
      name: "Hyderabadi Mutton Biryani",
      category: "Biryani & Main Course",
      price: 420,
      description:
        "Slow-cooked tender mutton layered with aromatic basmati rice and spices.",
      image: "/images/menu/hyderabadi-mutton-biryani.jpg",
    },

    {
      id: 27,
      name: "Vegetable Biryani",
      category: "Biryani & Main Course",
      price: 280,
      description:
        "Fragrant basmati rice cooked with seasonal vegetables and Indian spices.",
      image: "/images/menu/vegetable-biryani.jpg",
    },

    {
      id: 28,
      name: "Chicken Tikka",
      category: "Biryani & Main Course",
      price: 330,
      description:
        "Tender chicken pieces marinated in yoghurt and roasted with spices.",
      image: "/images/menu/chicken-tikka.jpg",
    },

    {
      id: 29,
      name: "Chicken Curry",
      category: "Biryani & Main Course",
      price: 340,
      description:
        "Homestyle chicken cooked in a fragrant onion and tomato gravy.",
      image: "/images/menu/chicken-curry.jpg",
    },

    {
      id: 30,
      name: "Kadai Paneer",
      category: "Biryani & Main Course",
      price: 310,
      description:
        "Paneer cooked with capsicum, onions and freshly ground spices.",
      image: "/images/menu/kadai-paneer.jpg",
    },

    /* =====================================================
       STREET FOOD & STARTERS
    ===================================================== */

    {
      id: 31,
      name: "Samosa",
      category: "Street Food & Starters",
      price: 150,
      description:
        "Crispy pastry filled with spiced potato and peas.",
      image: "/images/menu/samosa.jpg",
    },

    {
      id: 32,
      name: "Pani Puri",
      category: "Street Food & Starters",
      price: 160,
      description:
        "Crispy puris filled with spiced potato, chutneys and tangy pani.",
      image: "/images/menu/pani-puri.jpg",
    },

    {
      id: 33,
      name: "Pav Bhaji",
      category: "Street Food & Starters",
      price: 190,
      description:
        "Buttery toasted pav served with rich mashed vegetable bhaji.",
      image: "/images/menu/pav-bhaji.jpg",
    },

    {
      id: 34,
      name: "Vada Pav",
      category: "Street Food & Starters",
      price: 150,
      description:
        "Mumbai-style spicy potato fritter served inside a soft pav.",
      image: "/images/menu/vada-pav.jpg",
    },

    /* =====================================================
       INDIAN DESSERTS
    ===================================================== */

    {
      id: 35,
      name: "Gulab Jamun",
      category: "Indian Desserts",
      price: 180,
      description:
        "Soft milk-solid dumplings soaked in fragrant sugar syrup.",
      image: "/images/menu/gulab-jamun.jpg",
    },

    {
      id: 36,
      name: "Jalebi",
      category: "Indian Desserts",
      price: 170,
      description:
        "Crispy spiral-shaped sweet soaked in warm saffron sugar syrup.",
      image: "/images/menu/jalebi.jpg",
    },

    {
      id: 37,
      name: "Rasmalai",
      category: "Indian Desserts",
      price: 220,
      description:
        "Soft cottage-cheese dumplings served in chilled saffron milk.",
      image: "/images/menu/rasmalai.jpg",
    },

    {
      id: 38,
      name: "Kheer",
      category: "Indian Desserts",
      price: 180,
      description:
        "Traditional Indian rice pudding slowly cooked with milk and cardamom.",
      image: "/images/menu/kheer.jpg",
    },

    {
      id: 39,
      name: "Gajar Ka Halwa",
      category: "Indian Desserts",
      price: 200,
      description:
        "Warm carrot halwa cooked with milk, cardamom and nuts.",
      image: "/images/menu/gajar-ka-halwa.jpg",
    },

    {
      id: 40,
      name: "Kulfi",
      category: "Indian Desserts",
      price: 190,
      description:
        "Traditional Indian frozen dessert flavoured with cardamom and nuts.",
      image: "/images/menu/kulfi.jpg",
    },
  ];

  /* =====================================================
     CATEGORIES
  ===================================================== */

  const categories = [
    "All",
    "Coffee & Beverages",
    "South Indian",
    "North Indian",
    "Biryani & Main Course",
    "Street Food & Starters",
    "Indian Desserts",
  ];

  /* =====================================================
     FILTER MENU
  ===================================================== */

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter(
          (item) => item.category === activeCategory
        );

  /* =====================================================
     PREVENT BACKGROUND SCROLL WHEN POPUP IS OPEN
  ===================================================== */

  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedItem]);

  /* =====================================================
     CLOSE POPUP WITH ESC KEY
  ===================================================== */

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedItem(null);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  /* =====================================================
     IMAGE ERROR FALLBACK
  ===================================================== */

  const handleImageError = (event) => {
    event.currentTarget.style.display = "none";
  };

  return (
    <>
      <section className="page-section menu-page">

        {/* =====================================================
            MENU HEADER
        ===================================================== */}

        <div className="section-heading">

          <p className="eyebrow">
            NOCTURNIO INDIAN KITCHEN
          </p>

          <h1>
            India on
            <br />
            <span>Every Plate</span>
          </h1>

          <p>
            Discover India's favourite coffees, breakfast classics,
            street food, biryanis, rich curries and traditional
            desserts — all brought together at Nocturnio.
          </p>

        </div>

        {/* =====================================================
            CATEGORY FILTER
        ===================================================== */}

        <div className="category-buttons">

          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={
                activeCategory === category
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveCategory(category)
              }
            >
              {category}
            </button>
          ))}

        </div>

        {/* =====================================================
            MENU GRID
        ===================================================== */}

        <div className="menu-grid">

          {filteredItems.map((item) => (

            <article
              className="menu-card"
              key={item.id}
              onClick={() => setSelectedItem(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (
                  event.key === "Enter" ||
                  event.key === " "
                ) {
                  event.preventDefault();
                  setSelectedItem(item);
                }
              }}
            >

              {/* =================================================
                  ITEM IMAGE
              ================================================= */}

              <div className="menu-card-image">

                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="menu-card-img"
                  onError={handleImageError}
                />

                <span className="menu-card-tag">
                  {item.category}
                </span>

              </div>

              {/* =================================================
                  ITEM CONTENT
              ================================================= */}

              <div className="menu-card-content">

                <span className="menu-category">
                  {item.category}
                </span>

                <h2>
                  {item.name}
                </h2>

                <p>
                  {item.description}
                </p>

                <div className="menu-card-bottom">

                  <strong>
                    ₹{item.price}
                  </strong>

                  <span className="menu-view-details">
                    View Details
                  </span>

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>

      {/* =====================================================
          ITEM DETAILS POPUP
      ===================================================== */}

      {selectedItem && (

        <div
          className="item-popup-overlay"
          onClick={() => setSelectedItem(null)}
        >

          <div
            className="item-popup"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            {/* =================================================
                CLOSE BUTTON
            ================================================= */}

            <button
              type="button"
              className="item-popup-close"
              onClick={() =>
                setSelectedItem(null)
              }
              aria-label="Close item details"
            >
              ×
            </button>

            {/* =================================================
                POPUP IMAGE
            ================================================= */}

            <div className="item-popup-image">

              <img
                src={selectedItem.image}
                alt={selectedItem.name}
                onError={handleImageError}
              />

              <span className="item-popup-tag">
                {selectedItem.category}
              </span>

            </div>

            {/* =================================================
                POPUP CONTENT
            ================================================= */}

            <div className="item-popup-content">

              <p className="eyebrow">
                NOCTURNIO SPECIAL
              </p>

              <h2>
                {selectedItem.name}
              </h2>

              <div className="item-popup-details">

                <p>
                  {selectedItem.description}
                </p>

              </div>

              {/* =================================================
                  POPUP FOOTER
              ================================================= */}

              <div className="item-popup-footer">

                <div className="item-popup-price">

                  <span>
                    PRICE
                  </span>

                  <strong>
                    ₹{selectedItem.price}
                  </strong>

                </div>

                <button
                  type="button"
                  className="gold-button item-popup-button"
                  onClick={() =>
                    setSelectedItem(null)
                  }
                >
                  Done
                </button>

              </div>

            </div>

          </div>

        </div>

      )}

    </>
  );
}

export default Menu;