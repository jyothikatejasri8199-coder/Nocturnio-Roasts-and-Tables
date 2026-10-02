import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("nocturnioUser")
  );

  const handleLogout = () => {
    localStorage.removeItem("nocturnioUser");
    navigate("/");
  };

  return (
    <nav className="navbar">

      <Link
        to="/"
        className="logo"
      >
        NOCTURNIO
      </Link>

      <div className="nav-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/history">
          Our Story
        </Link>

        <Link to="/menu">
          Menu
        </Link>

        <Link to="/order">
          Reserve Table
        </Link>

        {user ? (
          <button
            onClick={handleLogout}
            className="nav-button"
          >
            Logout
          </button>
        ) : (
          <>
            <Link to="/login">
              Login
            </Link>

            <Link to="/register">
              Register
            </Link>
          </>
        )}

      </div>

    </nav>
  );
}

export default Navbar;