import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import trustedHomepage from "../assets/trustedhomepage.png";
import bsnlLogo from "../assets/bsnl.jpg";
import indianRailwayLogo from "../assets/indianrailway.jpg";
import lntLogo from "../assets/L&T.jpg";
import railtelLogo from "../assets/railtel.jpg";
import rvnlLogo from "../assets/rvnl.jpg";
import viLogo from "../assets/vi-logo.svg";
import site1 from "../assets/site1.png";
import site2 from "../assets/site2.png";
import site3 from "../assets/site3.png";
import site4 from "../assets/site4.png";
import site5 from "../assets/site5.png";

function Home() {
  // Hero animation restart every 10 seconds
  const [heroKey, setHeroKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroKey((prev) => prev + 1);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  // Mouse-based 3D tilt effect
  const handleMouseMove = (e) => {
    const scene = e.currentTarget;
    const rect = scene.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    scene.style.transform = `
      perspective(1000px)
      rotateY(${x * 4}deg)
      rotateX(${-y * 4}deg)
      scale(1.01)
    `;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "";
  };

  const gearTeeth = Array.from({ length: 12 });

  return (
    <div className="home-page">

      {/* ==================================
          HERO SECTION
      ================================== */}

      <section className="home-hero" key={heroKey}>

        {/* Animated Background */}

        <div className="hero-bg-grid"></div>

        <div className="hero-glow hero-glow-one"></div>

        <div className="hero-glow hero-glow-two"></div>


        {/* ==================================
            LEFT CONTENT
        ================================== */}

        <div className="hero-content">

          <div className="hero-content-inner">

            {/* Eyebrow */}

            <div className="hero-eyebrow">

              <span className="eyebrow-pulse"></span>

              ENGINEERING EXCELLENCE SINCE 2007

            </div>


            {/* Heading */}

            <h1 className="hero-title">

              <span className="title-line">
                Trusted Telecom,
              </span>

              <span className="title-line">
                OFC &amp; Infrastructure
              </span>

              <span className="title-highlight">
                Engineering Partner.
              </span>

            </h1>


            {/* Description */}

            <p className="hero-description">

              Delivering reliable telecom, optical fiber
              cable and infrastructure engineering
              solutions with precision and excellence.

            </p>


            {/* Buttons */}

            <div className="hero-buttons">

              <Link
                to="/contact"
                className="hero-primary-btn"
              >

                <span>
                  Discuss Your Requirement
                </span>

                <span className="button-arrow">
                  ↗
                </span>

              </Link>


              <Link
                to="/scope"
                className="hero-secondary-btn"
              >

                <span>
                  View and Service Scope
                </span>

                <span className="button-arrow">
                  ↗
                </span>

              </Link>

            </div>


            {/* Metrics */}

            <div className="hero-metrics">

          


              


              

            </div>

          </div>

        </div>


        {/* ==================================
            RIGHT IMAGE
        ================================== */}

        <div className="hero-image-wrapper">

          <div
            className="image-3d-scene"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >

            {/* Floating Orbs */}

            <div className="floating-orb orb-one"></div>

            <div className="floating-orb orb-two"></div>

            <div className="floating-orb orb-three"></div>


            {/* Tech Rings */}

            <div className="tech-ring ring-one"></div>

            <div className="tech-ring ring-two"></div>


            {/* Main Image */}

            <img
              src={trustedHomepage}
              alt="Telecom and infrastructure engineering"
              className="hero-image"
            />


            {/* Image Overlay */}

            <div className="hero-image-overlay"></div>

            <div className="image-scan-line"></div>


            {/* Image Status */}

            <div className="image-top-status">

              <span className="status-dot"></span>

              SYSTEM ONLINE

            </div>


            {/* Image Label */}

            <div className="image-tech-label">

              <span>NETWORK</span>

              <span>INFRASTRUCTURE</span>

            </div>


            {/* Bottom Text */}

            <div className="image-bottom-content">

              <div className="image-line"></div>



            </div>


            {/* Corner Number */}

            <div className="image-corner-element">



            </div>

          </div>

        </div>

      </section>


      {/* ==================================
          COMPANY HIGHLIGHTS SECTION
          (replaces old "WHO WE ARE" intro)
      ================================== */}

      <section className="home-highlights">

        <div className="highlights-inner">

          <span className="highlights-label">
            WHO WE ARE
          </span>

          <h2 className="highlights-heading">
            Building reliable infrastructure for tomorrow.
          </h2>

          <div className="highlights-grid">

            <div className="highlight-card">
              <div className="highlight-card-top">
                <div className="highlight-icon">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 21V7l8-4 8 4v14" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 21v-6h6v6" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 11h.01M15 11h.01M12 11h.01" />
                  </svg>
                </div>
              </div>
              <div className="highlight-card-body">
                <span className="highlight-meta">Since 2007</span>
                <h3>Incorporation</h3>
                <p>
                  Established on 26 February 2007, backed by nearly
                  two decades of trusted project execution across
                  telecom and railway infrastructure nationwide.
                </p>
              </div>
              <div className="highlight-card-footer">
                26 Feb 2007
              </div>
            </div>

            <div className="highlight-card">
              <div className="highlight-card-top">
                <div className="highlight-icon">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z" />
                    <circle cx="12" cy="9.5" r="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="highlight-card-body">
                <span className="highlight-meta">Head Office</span>
                <h3>Registered Office</h3>
                <p>
                  Chennai, Tamil Nadu — our central operations and
                  project governance hub, coordinating field teams
                  and site execution across multiple states.
                </p>
              </div>
              <div className="highlight-card-footer">
                Chennai, TN
              </div>
            </div>

            <div className="highlight-card">
              <div className="highlight-card-top">
                <div className="highlight-icon">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v3M12 19v3M2 12h3M19 12h3" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1" />
                  </svg>
                </div>
              </div>
              <div className="highlight-card-body">
                <span className="highlight-meta">Core Focus</span>
                <h3>Primary Domain</h3>
                <p>
                  Railway S&amp;T and specialized OFC and telecom
                  engineering solutions across critical infrastructure,
                  covering survey, execution, and long-term maintenance.
                </p>
              </div>
              <div className="highlight-card-footer">
                Railway S&amp;T
              </div>
            </div>

            <div className="highlight-card">
              <div className="highlight-card-top">
                <div className="highlight-icon">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3.5 2" />
                  </svg>
                </div>
              </div>
              <div className="highlight-card-body">
                <span className="highlight-meta">Always On</span>
                <h3>24/7 O&amp;M Support Model</h3>
                <p>
                  Round-the-clock operations and maintenance coverage
                  for mission-critical telecom infrastructure, with
                  rapid response when issues arise on live networks.
                </p>
              </div>
              <div className="highlight-card-footer">
                24 / 7 Support
              </div>
            </div>

          </div>

        </div>

      </section>


      {/* ==================================
          TEAM / CLIENTS SECTION
      ================================== */}

      <section className="home-clients">

        <div className="clients-inner">

          <div className="clients-text">

            <span className="highlights-label">
              WHY CHOOSE US
            </span>

            <h2>
              Experienced Engineering Team
              <br />
              with Proven Delivery
            </h2>

            <p>
              Transpro Engineering Pvt. Ltd. has been at the
              forefront of the telecommunications landscape since
              its inception, building a reputation project by
              project across railways, telecom operators, and
              large infrastructure clients who need work done
              right the first time.
            </p>

            <p>
              Our journey is marked by technical precision and a
              deep understanding of infrastructure dynamics —
              from OFC route planning and trenching to splicing,
              testing, and commissioning — backed by teams who
              have handled these challenges across some of the
              country's most demanding sites.
            </p>

            <p>
              Seasoned experts ensure every project is delivered
              with uncompromising quality and safety standards,
              supported by transparent reporting and a support
              structure that stays engaged with clients long after
              handover, not just during execution.
            </p>

          </div>

          <div className="clients-logos">

            <div className="client-logo">
              <img src={bsnlLogo} alt="BSNL" />
            </div>

            <div className="client-logo">
              <img src={indianRailwayLogo} alt="Indian Railway" />
            </div>

            <div className="client-logo">
              <img src={lntLogo} alt="L&amp;T" />
            </div>

            <div className="client-logo">
              <img src={railtelLogo} alt="RailTel" />
            </div>

            <div className="client-logo">
              <img src={rvnlLogo} alt="RVNL" />
            </div>

            <div className="client-logo">
              <img src={viLogo} alt="Vi" />
            </div>

          </div>

        </div>

      </section>


      {/* ==================================
          PROJECT VISUAL GALLERY SECTION
      ================================== */}

      <section className="home-gallery">

        <div className="gallery-inner">

          <div className="gallery-header">

            <span className="highlights-label">
              PROJECT GALLERY
            </span>

            <h2>Project Visual Gallery</h2>

            <p>
              A closer look at some of our most complex and
              successful deliveries across the Indian subcontinent
              — from preliminary surveys and trenching to fiber
              termination and round-the-clock monitoring, each
              project reflects the same discipline and attention
              to detail we bring to every site.
            </p>

          </div>

          <div className="gallery-grid">

            <div className="gallery-item item-1">
              <div className="gallery-media">
                <img src={site1} alt="Preliminary survey for OFC FTTH" />
              </div>
              <div className="gallery-caption">
                <p>Preliminary survey for OFC FTTH</p>
              </div>
            </div>

            <div className="gallery-item item-2">
              <div className="gallery-media">
                <img src={site2} alt="Trenching excavation - Vodafone OFC BB" />
              </div>
              <div className="gallery-caption">
                <p>Trenching excavation &ndash; Vodafone OFC (BB)</p>
              </div>
            </div>

            <div className="gallery-item item-3">
              <div className="gallery-media">
                <img src={site3} alt="MM fiber direct termination for CCTV" />
              </div>
              <div className="gallery-caption">
                <p>MM fiber direct termination for CCTV</p>
              </div>
            </div>

            <div className="gallery-item item-4">
              <div className="gallery-media">
                <img src={site4} alt="Trenching and HDPE duct laying for Vodafone 48F OFC" />
              </div>
              <div className="gallery-caption">
                <p>Trenching &amp; HDPE duct laying &ndash; Vodafone 48F OFC</p>
              </div>
            </div>

            <div className="gallery-item item-5">
              <div className="gallery-media">
                <img src={site5} alt="24/7 Monitoring and Support" />
              </div>
              <div className="gallery-caption">
                <p>24/7 Monitoring &amp; Support</p>
              </div>
            </div>

          </div>

        </div>

      </section>


      {/* ==================================
          OUR WORK PHILOSOPHY SECTION
      ================================== */}

      <section className="home-philosophy">

        <div className="philosophy-inner">

          <div className="philosophy-header">

            <div className="philosophy-header-top">

              <div className="philosophy-header-text">

                <span className="highlights-label">
                  OUR WORK PHILOSOPHY
                </span>

                <h2>Proactive. Reliable. Disciplined.</h2>

              </div>

             

            </div>

            <p className="philosophy-header-paragraph">
              Every deployment we undertake follows a safety-first
              approach, disciplined execution, and measurable quality
              controls — from the very first site survey to final
              handover. Our field teams are trained to anticipate risk
              before it becomes a problem, our project managers track
              milestones against real commitments rather than best-case
              estimates, and every stage of work is checked against
              documented engineering standards. Clear communication
              with clients, meticulous documentation at every milestone,
              and a culture that never treats "good enough" as good
              enough — that's what keeps our delivery record consistent,
              project after project, site after site, on time and to
              specification. It's this combination of proactive planning,
              dependable follow-through, and disciplined execution that
              lets clients trust us with critical, time-sensitive
              infrastructure — again and again, no matter how demanding
              the terrain or the timeline.
            </p>

          </div>

          <div className="philosophy-grid">

            {/* Safety First — rotating gear behind a static hard-hat icon */}

            <div className="philosophy-card card-safety">

              <div className="philosophy-icon">

                <svg
                  className="gear-spin"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="27"
                    fill="none"
                    stroke="#2fb44a"
                    strokeWidth="7"
                  />

                  {gearTeeth.map((_, i) => (
                    <rect
                      key={i}
                      x="46"
                      y="4"
                      width="8"
                      height="13"
                      rx="2"
                      fill="#2fb44a"
                      transform={`rotate(${i * 30} 50 50)`}
                    />
                  ))}
                </svg>

                <svg
                  className="safety-person"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="50" cy="50" r="19" fill="#ffffff" />

                  <path
                    d="M38,46 a12,12 0 1,1 24,0 v2 h-24 z"
                    fill="#1b2a38"
                  />

                  <circle cx="50" cy="53" r="6.5" fill="#1b2a38" />

                  <path
                    d="M37,65 C37,58 44,55 50,55 C56,55 63,58 63,65 Z"
                    fill="#1b2a38"
                  />
                </svg>

              </div>

              <h3>Safety-First</h3>

              <p>
                Rigorous adherence to international occupational
                safety protocols.
              </p>

            </div>


            {/* Commitment — clasped hands with a rotating clock hand above */}

            <div className="philosophy-card card-commitment">

              <div className="philosophy-icon">

                <svg
                  viewBox="0 0 100 110"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="#1b2a38">
                    <rect
                      x="6"
                      y="56"
                      width="22"
                      height="34"
                      rx="5"
                      transform="rotate(-18 17 73)"
                    />

                    <rect
                      x="72"
                      y="56"
                      width="22"
                      height="34"
                      rx="5"
                      transform="rotate(18 83 73)"
                    />

                    <path d="M30,66 C38,59 45,63 50,68 C55,63 62,59 70,66 C65,76 58,80 50,80 C42,80 35,76 30,66 Z" />
                  </g>

                  <circle
                    cx="50"
                    cy="26"
                    r="18"
                    fill="#ffffff"
                    stroke="#1b2a38"
                    strokeWidth="3"
                  />

                  <line
                    className="clock-hand-min"
                    x1="50"
                    y1="26"
                    x2="50"
                    y2="13"
                    stroke="#d90429"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />

                  <line
                    className="clock-hand-hr"
                    x1="50"
                    y1="26"
                    x2="59"
                    y2="26"
                    stroke="#1b2a38"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />

                  <circle cx="50" cy="26" r="2.4" fill="#1b2a38" />
                </svg>

              </div>

              <h3>Commitment</h3>

              <p>
                Strict compliance with project milestones and
                delivery deadlines.
              </p>

            </div>


            {/* Methodology — glowing, pulsing light bulb */}

            <div className="philosophy-card card-methodology">

              <div className="philosophy-icon">

                <svg
                  className="bulb-svg"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g className="bulb-rays">
                    <line x1="50" y1="2" x2="50" y2="14" />
                    <line x1="78" y1="12" x2="70" y2="20" />
                    <line x1="90" y1="40" x2="78" y2="40" />
                    <line x1="78" y1="68" x2="70" y2="60" />
                    <line x1="22" y1="12" x2="30" y2="20" />
                    <line x1="10" y1="40" x2="22" y2="40" />
                    <line x1="22" y1="68" x2="30" y2="60" />
                  </g>

                  <circle
                    className="bulb-body"
                    cx="50"
                    cy="40"
                    r="21"
                    fill="#ffd23f"
                  />

                  <path
                    d="M42,55 L42,62 L58,62 L58,55"
                    fill="none"
                    stroke="#8a6d1a"
                    strokeWidth="3"
                  />

                  <rect
                    x="41"
                    y="62"
                    width="18"
                    height="12"
                    rx="2"
                    fill="#2f8fd6"
                  />

                  <rect
                    x="43"
                    y="76"
                    width="14"
                    height="6"
                    rx="1"
                    fill="#333333"
                  />
                </svg>

              </div>

              <h3>Methodology</h3>

              <p>
                ISO-certified workflow for consistent engineering
                quality.
              </p>

            </div>


            {/* Development — knowledge flowing from books into a brain */}

            <div className="philosophy-card card-development">

              <div className="philosophy-icon">

                <svg
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g className="chart-bars">
                    <rect x="14" y="60" width="12" height="26" rx="2" fill="#0a6ecf" />
                    <rect x="34" y="46" width="12" height="40" rx="2" fill="#0a6ecf" />
                    <rect x="54" y="34" width="12" height="52" rx="2" fill="#0a6ecf" />
                    <rect x="74" y="20" width="12" height="66" rx="2" fill="#0a6ecf" />
                  </g>

                  <polyline
                    className="chart-line"
                    points="20,58 40,44 60,32 80,18"
                    fill="none"
                    stroke="#0a2a52"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <circle
                    className="chart-dot"
                    cx="80"
                    cy="18"
                    r="4.5"
                    fill="#d90429"
                  />
                </svg>

              </div>

              <h3>Development</h3>

              <p>
                Continuous skill enhancement and modernization.
              </p>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;