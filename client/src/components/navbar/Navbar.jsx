import "./navbar.css";
import { Link,useLocation, useNavigate } from "react-router-dom";
import { useContext,useState } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!user) {
      navigate("/login");
    }
  };
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Rafabooking</span>
        </Link>
        {user ? user.username : (
          <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton" onClick={handleClick}>Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
