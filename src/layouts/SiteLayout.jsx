import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { BookOpenCheck, Menu, X } from "lucide-react";
import { navigation } from "../data/navigation.js";
import ButtonLink from "../components/ButtonLink.jsx";
import { useLanguage } from "../contexts/LanguageContext.jsx";

export default function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const closeMenu = () => setMenuOpen(false);
  const navLabels = language === "hi"
    ? ["मुखपृष्ठ", "SEAP परिचय", "शिक्षक गाइड", "छात्र गाइड", "वीडियो", "इंस्टॉलेशन", "प्रश्न"]
    : null;

  return (
    <div className="site-shell">
      <div className="topline">
        <div className="container topline__inner">
          <span>MLKPG College, Balrampur</span>
          <span>Spoken English and AI Programme · Orientation portal</span>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <Link to="/" className="brand" onClick={closeMenu} aria-label="SEAP Orientation home">
            <span className="brand__mark"><BookOpenCheck size={23} strokeWidth={1.8} /></span>
            <span className="brand__text">
              <strong>SEAP <span>ORIENTATION</span></strong>
              <small>MLKPG College, Balrampur</small>
            </span>
          </Link>
          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
          <nav className={`main-nav ${menuOpen ? "main-nav--open" : ""}`} aria-label="Main navigation">
            {navigation.map((item, index) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                onClick={closeMenu}
              >
                {navLabels ? navLabels[index] : item.label}
              </NavLink>
            ))}
            <ButtonLink className="header-portal-link">{language === "hi" ? "अधिकारी पोर्टल" : "Official portal"}</ButtonLink>
            <button
              type="button"
              className="language-toggle"
              aria-label={language === "hi" ? "Switch to English" : "हिंदी में देखें"}
              onClick={() => setLanguage(language === "hi" ? "en" : "hi")}
            >
              <span className={language === "en" ? "is-active" : ""}>EN</span>
              <span className={language === "hi" ? "is-active" : ""}>हिं</span>
            </button>
          </nav>
        </div>
      </header>
      <main><Outlet /></main>
      <footer className="site-footer">
        <div className="container">
          <div className="footer-main">
            <div className="footer-brand">
              <Link to="/" className="brand brand--footer">
                <span className="brand__mark"><BookOpenCheck size={22} /></span>
                <span className="brand__text"><strong>SEAP <span>ORIENTATION</span></strong><small>MLKPG College, Balrampur</small></span>
              </Link>
              <p>A local orientation guide to help faculty and students understand the SEAP journey.</p>
            </div>
            <div className="footer-links">
              <h2>Explore</h2>
              {navigation.slice(1).map((item) => <Link key={item.to} to={item.to}>{item.label}</Link>)}
            </div>
            <div className="footer-portal">
              <h2>Official SEAP portal</h2>
              <p>This site is informational only. Registration, learning and assessment happen on the official portal.</p>
              <ButtonLink>Go to SEAP</ButtonLink>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} MLKPG College, Balrampur · Orientation resource</span>
            <span>Not an official Wadhwani AI platform</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
