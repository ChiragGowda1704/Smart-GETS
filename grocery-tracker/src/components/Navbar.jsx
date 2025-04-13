import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/styles.css";
import { useEffect, useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in based on token
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token
    setIsLoggedIn(false);
    navigate("/auth"); // Redirect to login page
  };

  // Show "Smart GETS" and "Get Started" only on the home page
  const isHomePage = location.pathname === "/";

  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/groceries">See Items</Link>
        <Link to="/add">Add Item</Link>
        <Link to="/groceries">Modify Item</Link> {/* Redirect to groceries page to select item */}
        <Link to="/delete">Delete Item</Link>
      </div>

      {isHomePage && <div className="navbar-logo">Smart GETS</div>}

      <div className="auth-buttons">
        {isLoggedIn ? (
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          isHomePage && (
            <button className="get-started-btn" onClick={() => navigate("/auth")}>
              Get Started
            </button>
          )
        )}
      </div>
    </nav>
  );
};

export default Navbar;
