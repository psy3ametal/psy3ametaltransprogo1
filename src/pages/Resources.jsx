import React from "react";
import "./Resources.css";

import resourcesHero from "../assets/resources.png";

import wood1 from "../assets/wood1.png";
import wood2 from "../assets/wood2.png";
import wood3 from "../assets/wood3.png";
import wood4 from "../assets/wood4.png";


/* =========================================================
   RESOURCE TYPE SVG ICONS
========================================================= */

const ResourceIcon = ({ type }) => {

  if (type === "report") {
    return (
      <svg
        viewBox="0 0 120 120"
        className="resource-svg"
        aria-hidden="true"
      >
        <circle
          className="res-soft-circle"
          cx="60"
          cy="60"
          r="47"
        />

        <path
          className="res-doc-outline"
          d="M40 24 H70 L84 38 V96 H40 Z"
        />

        <path
          className="res-doc-fold"
          d="M70 24 V38 H84"
        />

        <path
          className="res-bars"
          d="M49 82 V70 M60 82 V60 M71 82 V66"
        />
      </svg>
    );
  }


  if (type === "spec") {
    return (
      <svg
        viewBox="0 0 120 120"
        className="resource-svg"
        aria-hidden="true"
      >
        <circle
          className="res-soft-circle"
          cx="60"
          cy="60"
          r="47"
        />

        <path
          className="res-doc-outline"
          d="M40 24 H70 L84 38 V96 H40 Z"
        />

        <path
          className="res-doc-fold"
          d="M70 24 V38 H84"
        />

        <path
          className="res-spec-line"
          d="M48 55 H76 M48 65 H76 M48 75 H68"
        />

        <circle
          className="res-node"
          cx="76"
          cy="55"
          r="3.2"
        />
      </svg>
    );
  }


  if (type === "brochure") {
    return (
      <svg
        viewBox="0 0 120 120"
        className="resource-svg"
        aria-hidden="true"
      >
        <circle
          className="res-soft-circle"
          cx="60"
          cy="60"
          r="47"
        />

        <path
          className="res-doc-outline"
          d="M33 30 H58 V92 H33 Z"
        />

        <path
          className="res-doc-outline res-fold-panel"
          d="M58 30 H83 V92 H58 Z"
        />

        <path
          className="res-spec-line"
          d="M40 45 H51 M40 55 H51 M65 45 H76 M65 55 H76"
        />
      </svg>
    );
  }


  if (type === "safety") {
    return (
      <svg
        viewBox="0 0 120 120"
        className="resource-svg"
        aria-hidden="true"
      >
        <circle
          className="res-soft-circle"
          cx="60"
          cy="60"
          r="47"
        />

        <path
          className="res-shield"
          d="M60 26 L88 37 V60 C88 78 76 90 60 96 C44 90 32 78 32 60 V37 Z"
        />

        <path
          className="res-check"
          d="M48 61 L57 70 L74 50"
        />
      </svg>
    );
  }


  /* sustainability */

  return (
    <svg
      viewBox="0 0 120 120"
      className="resource-svg"
      aria-hidden="true"
    >
      <circle
        className="res-soft-circle"
        cx="60"
        cy="60"
        r="47"
      />

      <path
        className="res-leaf"
        d="M38 82 C38 52 62 32 90 30 C88 58 68 82 38 82 Z"
      />

      <path
        className="res-leaf-vein"
        d="M40 80 C55 66 70 52 89 32"
      />
    </svg>
  );
};


const Resources = () => {

  const resources = [
    {
      image: wood1,
      title: "Bridge Stress Analysis V2.1",
      description:
        "Core structural specifications for cantilever and suspension projects.",
    },

    {
      image: wood2,
      title: "Corporate Brochure",
      description:
        "Overview of Transpro services, capabilities and case studies.",
    },

    {
      image: wood3,
      title: "On-Site Safety Protocols",
      description:
        "Mandatory safety standards for all contracting sites and field teams.",
    },

    {
      image: wood4,
      title: "Sustainability in Rail",
      description:
        "Decarbonization strategies for modern rail infrastructure projects.",
    },
  ];


  return (
    <main className="resources-page">

      {/* =====================================================
          1 — HERO
      ===================================================== */}

      <section className="resources-hero">

        <div className="resources-hero-image-wrap">
          <img
            src={resourcesHero}
            alt="Technical Resources"
            className="resources-hero-image"
          />
        </div>

        <div className="resources-hero-overlay"></div>

        <div className="resources-hero-light"></div>

        <div className="resources-hero-scan"></div>


        <div className="resources-hero-content">

          <span className="resources-hero-label">
            Knowledge Hub
          </span>

          <h1 className="resources-hero-title">
            Technical Resources

            <span>
              &amp; Documentation.
            </span>
          </h1>

          <p className="resources-hero-description">
            Access our library of technical documentation, safety
            protocols and industry insights, built from over a
            decade of field execution.
          </p>


          <div className="resources-hero-stats">

            <div className="resources-hero-stat">
              <strong>150+</strong>
              <span>Documents</span>
            </div>

            <div className="resources-hero-stat-divider"></div>

            <div className="resources-hero-stat">
              <strong>24/7</strong>
              <span>Access</span>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          2 — RESOURCE LIBRARY
      ===================================================== */}

      <section className="resources-library-section">

        <div className="resources-library-container">

          <div className="resources-library-heading">

            <div>

              <span className="resources-library-eyebrow">
                Resource Library
              </span>

              <h2>
                Documentation, built
                <span> from the field.</span>
              </h2>

            </div>


            <p>
              Every specification, protocol and report here comes
              from active project work, not generic templates.
            </p>

          </div>


          <div className="resources-grid">

            {/* FEATURED RESOURCE */}

            <article className="resource-featured">

              <div className="resource-featured-icon">
                <ResourceIcon type="report" />
              </div>

              <div className="resource-featured-body">

                <span className="resource-category">
                  Industry Report
                </span>

                <h3>
                  2024 Global Infrastructure Safety Report
                </h3>

                <p>
                  A comprehensive study on civil engineering safety
                  standards and the protocol shifts shaping the
                  next decade of infrastructure delivery.
                </p>

              </div>

            </article>


            {/* RESOURCE TILES */}

            <div className="resource-tiles-row">

              {resources.map((item) => (
                <article
                  className="resource-tile"
                  key={item.title}
                >

                  <div className="resource-tile-image-wrap">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="resource-tile-image"
                    />
                  </div>


                  <div className="resource-tile-body">

                    <h3>
                      {item.title}
                    </h3>

                    <p>
                      {item.description}
                    </p>

                  </div>

                </article>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          3 — CTA
      ===================================================== */}

      <section className="resources-cta-section">

        <div className="resources-cta-panel">

          <h2>
            Can&apos;t find a specific document?
          </h2>

          <p>
            Our technical team can provide archived records and
            custom specifications on request.
          </p>


          <div className="resources-cta-actions">

            <a
              href="/contact"
              className="resources-btn resources-btn-primary"
            >
              Contact tech support
            </a>

            <a
              href="/contact"
              className="resources-btn resources-btn-ghost"
            >
              Resource request form
            </a>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Resources;