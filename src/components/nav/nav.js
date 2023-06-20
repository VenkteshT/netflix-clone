import "./nav.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function Nav() {
  const [show, setIsshow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) setIsshow(true);
      else setIsshow(false);
    });
  }, []);
  return (
    <nav className={`nav ${show && "nav_black"}`}>
      <Link to={"/"}>
        <img
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt="netflix-logo"
          className="netflix"
        />
      </Link>
      <Link to={"/profile"}>
        <img
          src="https://i.pinimg.com/736x/db/70/dc/db70dc468af8c93749d1f587d74dcb08.jpg"
          alt="avtar-logo"
          className="avatar"
        />
      </Link>
    </nav>
  );
}
