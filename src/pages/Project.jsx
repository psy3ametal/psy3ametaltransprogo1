import React from "react";
import "./Project.css";

import projectManager from "../assets/projectmanager.png";
import trackImage from "../assets/track.png";

import trustedHomepage from "../assets/trustedhomepage.png";
import bsnlLogo from "../assets/bsnl.jpg";
import indianRailwayLogo from "../assets/indianrailway.jpg";
import lntLogo from "../assets/L&T.jpg";
import railtelLogo from "../assets/railtel.jpg";
import rvnlLogo from "../assets/rvnl.jpg";
import viLogo from "../assets/vi-logo.svg";

/* CASE STUDY IMAGES */
import site1 from "../assets/sites1.png";
import site2 from "../assets/sites2.png";
import site3 from "../assets/sites3.png";


/* =========================================================
   CORE COMPETENCY SVG ICONS
========================================================= */

const CompetencyIcon = ({ type }) => {
  if (type === "ofc") {
    return (
      <svg
        viewBox="0 0 120 120"
        className="competency-svg"
        aria-hidden="true"
      >
        <circle
          className="svg-soft-circle"
          cx="60"
          cy="60"
          r="47"
        />

        <path
          className="svg-route"
          d="M23 79 C34 50, 48 47, 57 63 S80 80, 97 39"
        />

        <circle
          className="svg-node node-1"
          cx="23"
          cy="79"
          r="5"
        />

        <circle
          className="svg-node node-2"
          cx="57"
          cy="63"
          r="5"
        />

        <circle
          className="svg-node node-3"
          cx="97"
          cy="39"
          r="5"
        />

        <path
          className="svg-small-line"
          d="M22 91 H99"
        />

        <path
          className="svg-cable"
          d="M30 91 C42 83, 52 100, 64 91 S86 83, 96 91"
        />
      </svg>
    );
  }


  if (type === "underground") {
    return (
      <svg
        viewBox="0 0 120 120"
        className="competency-svg"
        aria-hidden="true"
      >
        <circle
          className="svg-soft-circle"
          cx="60"
          cy="60"
          r="47"
        />

        <path
          className="svg-tunnel"
          d="M25 82 V62 C25 42 40 28 60 28 C80 28 95 42 95 62 V82"
        />

        <path
          className="svg-ground"
          d="M18 84 H102"
        />

        <path
          className="svg-cable-flow cable-flow-one"
          d="M31 69 C42 57 51 78 62 67 S82 58 91 70"
        />

        <path
          className="svg-cable-flow cable-flow-two"
          d="M31 78 C42 66 51 87 62 76 S82 67 91 79"
        />

        <circle
          className="svg-pulse-dot"
          cx="31"
          cy="69"
          r="4"
        />
      </svg>
    );
  }


  if (type === "testing") {
    return (
      <svg
        viewBox="0 0 120 120"
        className="competency-svg"
        aria-hidden="true"
      >
        <circle
          className="svg-soft-circle"
          cx="60"
          cy="60"
          r="47"
        />

        <rect
          className="svg-device"
          x="25"
          y="31"
          width="70"
          height="56"
          rx="8"
        />

        <path
          className="svg-wave"
          d="M34 61 H44 L50 48 L58 75 L65 56 L72 65 H86"
        />

        <circle
          className="svg-check-ring"
          cx="84"
          cy="83"
          r="17"
        />

        <path
          className="svg-check"
          d="M76 83 L82 89 L93 76"
        />
      </svg>
    );
  }


  return (
    <svg
      viewBox="0 0 120 120"
      className="competency-svg"
      aria-hidden="true"
    >
      <circle
        className="svg-soft-circle"
        cx="60"
        cy="60"
        r="47"
      />

      <circle
        className="svg-support-ring"
        cx="60"
        cy="60"
        r="28"
      />

      <path
        className="svg-headset"
        d="M37 62 V55 C37 41 47 32 60 32 C73 32 83 41 83 55 V62"
      />

      <rect
        className="svg-ear"
        x="32"
        y="58"
        width="12"
        height="22"
        rx="5"
      />

      <rect
        className="svg-ear"
        x="76"
        y="58"
        width="12"
        height="22"
        rx="5"
      />

      <path
        className="svg-support-line"
        d="M83 76 C83 88 74 92 65 92"
      />

      <circle
        className="svg-status-dot"
        cx="60"
        cy="92"
        r="4"
      />

      <path
        className="svg-signal signal-one"
        d="M92 39 C99 46 102 54 102 62"
      />

      <path
        className="svg-signal signal-two"
        d="M97 32 C107 41 112 51 112 62"
      />
    </svg>
  );
};


const Project = () => {
  const trustedCompanies = [
    {
      name: "BSNL",
      logo: bsnlLogo,
    },
    {
      name: "Indian Railways",
      logo: indianRailwayLogo,
    },
    {
      name: "L&T",
      logo: lntLogo,
    },
    {
      name: "RailTel",
      logo: railtelLogo,
    },
    {
      name: "RVNL",
      logo: rvnlLogo,
    },
    {
      name: "Vodafone Idea",
      logo: viLogo,
    },
  ];


  const competencies = [
    {
      type: "ofc",
      number: "01",
      title: "OFC Laying & Construction",
      description:
        "Expert execution of long-distance and last-mile fiber optic cable laying using trenching, blowing and HDD methods across varied terrains.",
      tags: ["Trenching", "HDD", "Ducting"],
    },

    {
      type: "underground",
      number: "02",
      title: "Underground Cable Works",
      description:
        "Comprehensive solutions for power and signaling cable laying, specifically tailored for railway and urban infrastructure projects.",
    },

    {
      type: "testing",
      number: "03",
      title: "Testing & Commissioning",
      description:
        "Rigorous OTDR testing, splicing precision, and end-to-end commissioning ensuring link losses stay within strict international standards.",
    },

    {
      type: "support",
      number: "04",
      title: "O&M Support",
      description:
        "24/7 operations and maintenance support for critical telecommunication links, ensuring near-zero downtime for clients nationwide.",
    },
  ];


  const caseStudies = [
    {
      number: "01",
      image: site1,
      category: "Railway S&T",
      title:
        "Railways S&T Location Box Civil Foundation, Box Installation and Wiring Testing & Commissioning Work",
    },

    {
      number: "02",
      image: site2,
      category: "CCTV Infrastructure",
      title:
        "Southern Railway Gati Shakti CCTV Project — Tanjavur, Mayiladuthurai & Villupuram",
    },

    {
      number: "03",
      image: site3,
      category: "Railway Signalling",
      title:
        "Railways Signalling Pole Installation Work",
    },
  ];


  const impactStats = [
    {
      value: "19",
      suffix: "+",
      label: "Years Experience",
    },
    {
      value: "100",
      suffix: "+",
      label: "Team Experts",
    },
    {
      value: "24/7",
      suffix: "",
      label: "O&M Support",
    },
    {
      value: "99",
      suffix: "%",
      label: "Client Satisfaction",
    },
  ];


  return (
    <main className="project-page">

      {/* =====================================================
          1 — HERO
      ===================================================== */}

      <section className="project-hero">

        <div className="project-hero-image-wrap">
          <img
            src={projectManager}
            alt="Project Management"
            className="project-hero-image"
          />
        </div>

        <div className="project-hero-overlay"></div>

        <div className="project-hero-light"></div>

        <div className="project-hero-scan"></div>


        <div className="project-hero-content">

          <span className="project-hero-label">
            Project Excellence
          </span>

          <h1 className="project-hero-title">
            Engineering Execution

            <span>
              at National Scale.
            </span>
          </h1>

        </div>

      </section>


      {/* =====================================================
          2 — PROVEN EXPERTISE
      ===================================================== */}

      <section className="track-section">

        <div className="track-bg-glow track-bg-glow-one"></div>

        <div className="track-bg-glow track-bg-glow-two"></div>


        <div className="track-container">

          <div className="track-content">

            <span className="track-tag">
              PROVEN EXPERTISE
            </span>

            <h2 className="track-title">
              Our Track Record

              <span>
                of Excellence
              </span>
            </h2>

            <p className="track-description">
              For over a decade, Transpro Engineering has been at the
              forefront of telecommunications infrastructure, delivering
              high-capacity networks for India&apos;s largest government
              and private entities.
            </p>

            <div className="track-line">
              <span></span>
            </div>

          </div>


          <div className="track-image-area">

            <div className="track-image-card">

              <img
                src={trackImage}
                alt="Our Track Record"
                className="track-image"
              />


              <div className="track-stat">

                <strong>
                  700+ km
                </strong>

                <span>
                  OFC LAID &amp; COMMISSIONED
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          3 — TRUSTED BY INDUSTRY LEADERS
      ===================================================== */}

      <section className="trusted-section">

        <img
          src={trustedHomepage}
          alt=""
          className="trusted-background-art"
          aria-hidden="true"
        />


        <div className="trusted-heading">

          <span className="trusted-tag">
            TRUSTED BY INDUSTRY LEADERS
          </span>

          <div className="trusted-heading-line">
            <span></span>
          </div>

        </div>


        <div className="trusted-marquee">

          <div className="trusted-fade trusted-fade-left"></div>

          <div className="trusted-fade trusted-fade-right"></div>


          <div className="trusted-marquee-track">

            {[...trustedCompanies, ...trustedCompanies].map(
              (company, index) => (
                <div
                  className="trusted-logo-card"
                  key={`${company.name}-${index}`}
                >

                  <img
                    src={company.logo}
                    alt={
                      index < trustedCompanies.length
                        ? company.name
                        : ""
                    }
                  />

                </div>
              )
            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          4 — CORE COMPETENCIES
      ===================================================== */}

  <section class="competencies-section">
  <div class="competencies-container">

    <div class="competencies-heading">
      <div>
        <div class="competencies-eyebrow">Core Competencies</div>
        <h2>Infrastructure Expertise, <span>Built for the Field.</span></h2>
      </div>
      <p>End-to-end fiber and cable infrastructure delivery — from ground survey to commissioned, tested links ready for handover.</p>
    </div>

    <div class="competencies-grid">

      <div class="competency-card">
        <div class="competency-visual">
          <div class="competency-icon">
            <svg viewBox="0 0 24 24"><path d="M4 12h16M4 12l4-4M4 12l4 4M20 12l-4-4M20 12l-4 4"/></svg>
          </div>
          <span class="competency-number">01</span>
        </div>
        <div class="competency-body">
          <h3>OFC Laying &amp; Construction</h3>
          <p>Expert execution of long-distance and last-mile fiber optic cable laying using trenching, blowing and HDD methods across varied terrains.</p>
          <div class="competency-tags">
            <span>Trenching</span>
            <span>HDD</span>
            <span>Ducting</span>
          </div>
        </div>
      </div>

      <div class="competency-card">
        <div class="competency-visual">
          <div class="competency-icon">
            <svg viewBox="0 0 24 24"><path d="M4 4v16h16"/><path d="M4 16l5-5 4 3 7-7"/></svg>
          </div>
          <span class="competency-number">02</span>
        </div>
        <div class="competency-body">
          <h3>Underground Cable Works</h3>
          <p>Comprehensive solutions for power and signaling cable laying, specifically tailored for railway and urban infrastructure projects.</p>
        </div>
      </div>

      <div class="competency-card">
        <div class="competency-visual">
          <div class="competency-icon">
            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><path d="M8 12l3 3 5-6"/></svg>
          </div>
          <span class="competency-number">03</span>
        </div>
        <div class="competency-body">
          <h3>Testing &amp; Commissioning</h3>
          <p>Rigorous OTDR testing, splicing precision, and end-to-end commissioning ensuring link losses stay within strict international standards.</p>
        </div>
      </div>

      <div class="competency-card">
        <div class="competency-visual">
          <div class="competency-icon">
            <svg viewBox="0 0 24 24"><path d="M12 3v3M12 18v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M3 12h3M18 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/><circle cx="12" cy="12" r="4"/></svg>
          </div>
          <span class="competency-number">04</span>
        </div>
        <div class="competency-body">
          <h3>O&amp;M Support</h3>
          <p>24/7 operations and maintenance support for critical telecommunication links, ensuring near-zero downtime for clients nationwide.</p>
        </div>
      </div>

    </div>
  </div>
</section>


      {/* =====================================================
          5 — CASE STUDIES
      ===================================================== */}

      <section className="case-studies-section">

        <div className="case-study-bg-word">
          PROJECTS
        </div>


        <div className="case-studies-container">

          {/* HEADING */}

          <div className="case-studies-heading">

            <div>

              <span className="case-eyebrow">
                CASE STUDIES
              </span>

              <h2>
                Project
                <span> Spotlights</span>
              </h2>

            </div>


            <p>
              A closer look at some of our most complex and
              successful deliveries across the Indian subcontinent.
            </p>

          </div>


          {/* PROJECT 01 - FEATURED */}

          <article className="case-feature-card">

            <div className="case-feature-image">

              <img
                src={caseStudies[0].image}
                alt={caseStudies[0].title}
              />

              <div className="case-image-shade"></div>

              <span className="case-project-number">
                01
              </span>

            </div>


            <div className="case-feature-content">

              <span className="case-category">
                {caseStudies[0].category}
              </span>

              <h3>
                {caseStudies[0].title}
              </h3>

              <div className="case-accent-line">
                <span></span>
              </div>

            </div>

          </article>


          {/* PROJECTS 02 + 03 */}

          <div className="case-secondary-grid">

            {caseStudies.slice(1).map((project) => (
              <article
                className="case-small-card"
                key={project.number}
              >

                <div className="case-small-image">

                  <img
                    src={project.image}
                    alt={project.title}
                  />

                  <div className="case-image-shade"></div>

                  <span className="case-project-number">
                    {project.number}
                  </span>

                </div>


                <div className="case-small-content">

                  <span className="case-category">
                    {project.category}
                  </span>

                  <h3>
                    {project.title}
                  </h3>

                  <div className="case-accent-line">
                    <span></span>
                  </div>

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          6 — IMPACT STATS
      ===================================================== */}

      <section className="stats-section">

        <div className="stats-accent"></div>

        <div className="stats-container">

          {impactStats.map((stat) => (
            <div
              className="stat-item"
              key={stat.label}
            >

              <span className="stat-value">
                {stat.value}
                {stat.suffix && (
                  <sup>{stat.suffix}</sup>
                )}
              </span>

              <span className="stat-label">
                {stat.label}
              </span>

            </div>
          ))}

        </div>

      </section>

    </main>
  );
};

export default Project;