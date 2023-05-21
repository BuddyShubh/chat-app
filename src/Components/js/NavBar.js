import React, { useState } from "react";
import "../css/NavBar.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const [isActive, setActive] = useState(true);
  const ToggleClass = () => {
    setActive(!isActive);
  };

  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/Chat">CHAT</NavLink>
          </li>
          <li>
            <NavLink to="/Online">ONLINE</NavLink>
          </li>
          <li>
            <NavLink to="/About">ABOUT</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
