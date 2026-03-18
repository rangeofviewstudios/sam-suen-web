"use client";

import { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
        <div className="nav-inner">
          <a href="#hero" className="nav-logo" onClick={closeMenu}>
            SAM SUEN
          </a>
          <button
            className={`nav-toggle ${menuOpen ? "nav-toggle--active" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span />
            <span />
          </button>
          <div className="nav-links">
            <a href="#about" className="nav-link">About</a>
            <a href="#team" className="nav-link">Team</a>
            <a href="#next-show" className="nav-link">Next Show</a>
            <a href="#portfolio" className="nav-link">Portfolio</a>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`}>
        <div className="mobile-menu-inner">
          {["About", "Team", "Next Show", "Portfolio"].map((item, i) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="mobile-link"
              style={{ transitionDelay: menuOpen ? `${i * 0.07 + 0.15}s` : "0s" }}
              onClick={closeMenu}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
