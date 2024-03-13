import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./index.css";

const Header = () => {
  const logout = useNavigate();

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <img
          className="website-logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
        />
        <ul className="nav-menu">
          <Link to="/" className="nav-link">
            <li>Home</li>
          </Link>
          <Link to="/Login" className="nav-link">
            <li>Login</li>
          </Link>
          <Link to="/NotFound" className="nav-link">
            <li>Not Found</li>
          </Link>
        </ul>
        <button
          type="button"
          className="logout-desktop-btn"
          onClick={() => logout("/Login")}
        >
          Logout
        </button>
        <button type="button" className="logout-mobile-btn">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="logout icon"
            className="logout-icon"
          />
        </button>
      </div>
    </nav>
  );
};
export default Header;
