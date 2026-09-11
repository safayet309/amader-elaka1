import { useState } from "react";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-container">

        {/* Logo */}
        <a href="/" className="brand">
          <div className="brand-icon">আ</div>

          <div className="brand-text">
            <span className="brand-name">amader-elaka</span>
            <span className="brand-tagline">
              নাগরিক সেবা এক জায়গায়
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <a href="/" className="nav-link active">
            Home
          </a>

          <a href="/dashboard" className="nav-link">
            Dashboard
          </a>

          <a href="/government-services" className="nav-link">
            সরকারি সেবা
          </a>

          <a href="/emergency" className="nav-link emergency-link">
            Emergency
          </a>
        </nav>

        {/* Header Actions */}
        <div className="header-actions">

          <button
            className="language-button"
            type="button"
            aria-label="Language"
          >
            বাংলা
          </button>

          <button
            className="login-button"
            type="button"
          >
            Login
          </button>

          {/* Mobile Menu */}
          <button
            className={`menu-button ${menuOpen ? "open" : ""}`}
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">

          <a href="/" onClick={() => setMenuOpen(false)}>
            Home
          </a>

          <a
            href="/dashboard"
            onClick={() => setMenuOpen(false)}
          >
            Dashboard
          </a>

          <a
            href="/government-services"
            onClick={() => setMenuOpen(false)}
          >
            সরকারি সেবা
          </a>

          <a
            href="/emergency"
            onClick={() => setMenuOpen(false)}
          >
            Emergency
          </a>

          <a
            href="/hospitals"
            onClick={() => setMenuOpen(false)}
          >
            হাসপাতাল
          </a>

          <a
            href="/doctors"
            onClick={() => setMenuOpen(false)}
          >
            ডাক্তার খুঁজুন
          </a>

        </div>
      )}
    </header>
  );
}

export default Header;
