import { NavLink  } from "react-router-dom";
import "./NavbarStyles.css";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isNavVisible, setNavVisibility] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const isScrolledDown = prevScrollPos < currentScrollPos;

    setNavVisibility(!isScrolledDown);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div className={`header ${isNavVisible ? "visible" : "hidden"}`}>
      <NavLink to="/" className="nav-link" >
        <h1>PortFolio</h1>
      </NavLink>
      <ul className="nav-menu">
        <li className="nav-menu-list">
          <NavLink to="/" className="a" >
            Home
          </NavLink>
        </li>
        <li className="nav-menu-list">
          <NavLink to="/project" className="a" >
            Project
          </NavLink>
        </li>
        <li className="nav-menu-list">
          <NavLink to="/about" className="a"  >
            About
          </NavLink>
        </li>
        <li className="nav-menu-list">
          <NavLink to="/Experience" className="a" >
            Experience
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
