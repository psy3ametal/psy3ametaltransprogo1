import { useState, useEffect } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import "./Layout.css";
import logo from "../assets/logotrans.png";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Scope", path: "/scope" },
  { name: "Projects", path: "/projects" },
  { name: "Resources", path: "/resources" },
];

const footerCompanyLinks = [
  { name: "Home", path: "/" },
  { name: "Mission & Vision", path: "/mission" },
  { name: "Scope of Work", path: "/scope" },
  { name: "Projects", path: "/projects" },
  { name: "Resources", path: "/resources" },
];

const footerServiceLinks = [
  { name: "OFC Laying & Splicing", path: "/scope" },
  { name: "ADSS & OPGW Works", path: "/scope" },
  { name: "Microwave Towers", path: "/scope" },
  { name: "IT Infrastructure", path: "/scope" },
  { name: "O&M Services", path: "/scope" },
];

// Scrolls the window to the top every time the route changes, so
// navigating to a new page never lands the user mid-scroll on the
// previous page's position.
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="site-wrapper">

      <ScrollToTop />

      {/* ================= HEADER ================= */}
      <header className="site-header">

        <div className="nav-container">

          {/* ================= BRAND ================= */}
          <Link
            to="/"
            className="brand"
            onClick={closeMenu}
          >
            <img
              src={logo}
              alt="Transpro Engineering Private Limited"
              className="brand-logo"
            />

            <span className="company-name">
              Transpro Engineering Private Limited
            </span>
          </Link>


          {/* ================= MOBILE MENU ================= */}
          <button
            type="button"
            className={`menu-toggle ${
              menuOpen ? "menu-active" : ""
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>


          {/* ================= NAVIGATION ================= */}
          <nav
            className={`main-nav ${
              menuOpen ? "open" : ""
            }`}
          >

            <div className="nav-links">

              {menuItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  {item.name}
                </NavLink>
              ))}

            </div>


            {/* CONTACT */}
            <Link
              to="/contact"
              className="nav-contact"
              onClick={closeMenu}
            >
              Contact Us
              <span className="contact-arrow">
                ↗
              </span>
            </Link>

          </nav>

        </div>

      </header>


      {/* ================= MAIN ================= */}
      <main className="main-content">
        <Outlet />
      </main>


      {/* ================= FOOTER ================= */}
      <footer className="site-footer">

        <div className="footer-top">

          {/* ================= FOOTER BRAND ================= */}
          <div className="footer-brand">

            <Link
              to="/"
              className="footer-logo"
              onClick={closeMenu}
            >
              <img
                src={logo}
                alt="Transpro Engineering Private Limited"
                className="footer-logo-image"
              />

              <span className="footer-company-name">
                Transpro Engineering
              </span>
            </Link>


            <p className="footer-description">
              Pioneering telecom, OFC and infrastructure engineering
              across India since 2007. Trusted by national railways,
              PSUs and leading private operators.
            </p>

            <div className="footer-reg-info">
              <span>Est. 2007</span>
              <span className="footer-reg-sep">·</span>
              <span>GSTIN: 33AACCT6559L1ZX</span>
              <span className="footer-reg-sep">·</span>
              <span>PAN: AACCT6559L</span>
            </div>


            <div className="footer-socials">

              <a href="#" aria-label="LinkedIn">
                in
              </a>

              <a href="#" aria-label="Instagram">
                ig
              </a>

              <a href="#" aria-label="X">
                𝕏
              </a>

            </div>

          </div>


          {/* ================= COMPANY ================= */}
          <div className="footer-column">

            <h4>Company</h4>

            {footerCompanyLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            ))}

          </div>


          {/* ================= SERVICES ================= */}
          <div className="footer-column">

            <h4>Services</h4>

            {footerServiceLinks.map((item, i) => (
              <Link
                key={`${item.path}-${i}`}
                to={item.path}
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            ))}

          </div>


          {/* ================= CONTACT ================= */}
          <div className="footer-column">

            <h4>Contact</h4>

            <a href="tel:+919787707911">
              +91 9787707911
            </a>

            <a href="mailto:info@transproeng.com">
              info@transproeng.com
            </a>

            <p className="footer-address">
              No. 45, 4th Floor, MGM Flats,
              <br />
              Soundarajan Street, T. Nagar,
              <br />
              Chennai – 600 017, Tamil Nadu, India.
            </p>

          </div>

        </div>


        {/* ================= FOOTER BOTTOM ================= */}
        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Transpro Engineering Pvt. Ltd.
            All rights reserved. · CIN: U74210TN2007PTC062511
          </p>

          <div className="footer-legal">

            <span className="footer-location">
              Chennai, Tamil Nadu · India
            </span>

            <Link to="/privacy">
              Privacy Policy
            </Link>

            <Link to="/terms">
              Terms &amp; Conditions
            </Link>

          </div>

        </div>

      </footer>

    </div>
  );
}

export default Layout;