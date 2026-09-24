import React from "react";
import indiaGoal from "../assets/indiagoal.png";
import "./About.css";
import roadot from "../assets/roadot.png";

const About = () => {
  return (
    <>
      {/* =====================================================
          HERO SECTION
      ====================================================== */}
      <section className="about-hero">
        <img
          src={indiaGoal}
          alt="India's tech talent building the future"
          className="about-hero-bg"
        />

        <div className="about-hero-overlay"></div>

        <div className="about-hero-content">
          <span className="about-hero-tag fade-in-up delay-1">
            Our Purpose
          </span>

          <span className="about-hero-line"></span>

          <h1 className="about-hero-title fade-in-up delay-3">
            Architecting the Digital Backbone of India.
          </h1>
        </div>

        <div className="about-scroll-cue">
          <span className="about-scroll-dot"></span>
        </div>
      </section>

      {/* =====================================================
          MISSION & VISION
      ====================================================== */}
      <section className="mvv-section">
        <div className="mvv-bg mvv-bg-left"></div>
        <div className="mvv-bg mvv-bg-right"></div>
        <div className="section-border-box"></div>

        <div className="mvv-heading-wrap">
          <span className="mvv-small-title">OUR PURPOSE</span>

          <h2 className="mvv-heading">
            Mission &amp; Vision
          </h2>

          <span className="mvv-heading-line"></span>

          <p className="mvv-heading-text">
            Building dependable infrastructure through engineering excellence,
            innovation and long-term commitment.
          </p>
        </div>

        <div className="mvv-grid">
          {/* =================================================
              MISSION
          ================================================== */}
          <div className="mvv-item mission-item">
            <div className="mvv-ring mission-ring">
              <div className="mvv-inner">

                {/* Mission SVG */}
                <div className="mvv-icon mission-icon">
                  <svg
                    viewBox="0 0 80 80"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <circle cx="36" cy="42" r="25"></circle>
                    <circle cx="36" cy="42" r="17"></circle>
                    <circle cx="36" cy="42" r="8"></circle>

                    <path
                      className="mission-arrow"
                      d="M41 37L63 15"
                    ></path>

                    <path
                      className="mission-arrow"
                      d="M55 16L64 14L62 23"
                    ></path>

                    <path
                      className="mission-arrow"
                      d="M63 15L70 8"
                    ></path>
                  </svg>
                </div>

                <h3>MISSION</h3>

                <p className="mvv-description">
                  To provide world-class telecom and infrastructure solutions
                  with a strong focus on safety, quality, and timely delivery.
                  We empower connectivity through engineering excellence.
                </p>

                <div className="mission-tags">
                  <span className="mission-tag">
                    <span className="mission-dot"></span>
                    Safety First
                  </span>

                  <span className="mission-tag">
                    <span className="mission-dot"></span>
                    Unmatched Quality
                  </span>

                  <span className="mission-tag">
                    <span className="mission-dot"></span>
                    Timely Delivery
                  </span>
                </div>
              </div>
            </div>

            <div className="mvv-bottom-shadow mission-shadow"></div>
          </div>

          {/* =================================================
              VISION
          ================================================== */}
          <div className="mvv-item vision-item">
            <div className="mvv-ring vision-ring">
              <div className="mvv-inner">

                {/* Vision SVG */}
                <div className="mvv-icon vision-icon">
                  <svg
                    viewBox="0 0 80 80"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path d="M26 40C26 29 32 21 40 21C49 21 55 29 55 40C55 47 51 51 47 56C45 58 45 61 45 63H35C35 61 35 58 33 56C29 51 26 47 26 40Z"></path>

                    <path d="M34 67H46"></path>
                    <path d="M37 72H43"></path>

                    <path className="vision-ray" d="M40 8V15"></path>
                    <path className="vision-ray" d="M18 18L23 23"></path>
                    <path className="vision-ray" d="M62 18L57 23"></path>
                    <path className="vision-ray" d="M10 40H18"></path>
                    <path className="vision-ray" d="M62 40H70"></path>

                    <path
                      className="vision-energy"
                      d="M33 40L37 46L41 35L46 44"
                    ></path>
                  </svg>
                </div>

                <h3>VISION</h3>

                <p className="mvv-description">
                  To become the preferred infrastructure partner in India and
                  beyond, setting strong benchmarks in engineering, technology,
                  sustainability, and long-term value creation.
                </p>

                <div className="vision-target">
                  <span className="vision-target-label">
                    Target Market
                  </span>

                  <strong className="vision-target-value">
                    Pan-India &amp; Global
                  </strong>
                </div>
              </div>
            </div>

            <div className="mvv-bottom-shadow vision-shadow"></div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CORE VALUES
      ====================================================== */}
      <section className="core-values-section">
        <div className="core-values-bg core-values-bg-one"></div>
        <div className="core-values-bg core-values-bg-two"></div>
        <div className="section-border-box"></div>

        <div className="core-values-container">
          {/* Heading */}
          <div className="core-values-heading">
            <span className="core-values-eyebrow">
              WHAT DEFINES US
            </span>

            <h2>Core Values</h2>

            <span className="core-values-heading-line"></span>

            <p>
              The non-negotiable principles that guide every decision and
              action at Transpro Engineering.
            </p>
          </div>

          {/* Cards */}
          <div className="core-values-grid">

            {/* =================================================
                01 INTEGRITY
            ================================================== */}
            <article className="value-card integrity-card">
              <span className="value-number">01</span>

              <div className="value-icon-zone">
                <div className="value-orbit">
                  <span></span>
                </div>

                <div className="value-icon integrity-svg">
                  <svg
                    viewBox="0 0 120 120"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    {/* center pillar */}
                    <path d="M60 24V88"></path>
                    <path d="M41 28H79"></path>

                    {/* top circle */}
                    <circle cx="60" cy="21" r="9"></circle>

                    {/* left arm */}
                    <path d="M28 35H92"></path>

                    {/* left hanging */}
                    <path d="M37 35V45"></path>
                    <circle cx="37" cy="49" r="5"></circle>
                    <path d="M34 54L22 72"></path>
                    <path d="M40 54L52 72"></path>

                    {/* left tray */}
                    <path d="M17 73H57"></path>
                    <path d="M19 73C20 84 27 90 37 90C47 90 54 84 55 73"></path>

                    {/* right hanging */}
                    <path d="M83 35V45"></path>
                    <circle cx="83" cy="49" r="5"></circle>
                    <path d="M80 54L68 72"></path>
                    <path d="M86 54L98 72"></path>

                    {/* right tray */}
                    <path d="M63 73H103"></path>
                    <path d="M65 73C66 84 73 90 83 90C93 90 100 84 101 73"></path>

                    {/* base */}
                    <path d="M43 90H77"></path>
                    <path d="M34 99H86"></path>
                  </svg>
                </div>
              </div>

              <div className="value-content">
                <span className="value-accent-line"></span>

                <h3>Integrity</h3>

                <p>
                  We uphold transparent communication, ethical practices,
                  and full accountability in every engagement.
                </p>
              </div>

              <span className="value-bottom-accent"></span>
            </article>

            {/* =================================================
                02 INNOVATION
            ================================================== */}
            <article className="value-card innovation-card">
              <span className="value-number">02</span>

              <div className="value-icon-zone">
                <div className="value-orbit">
                  <span></span>
                </div>

                <div className="value-icon innovation-svg">
                  <svg
                    viewBox="0 0 120 120"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    {/* growth trunk */}
                    <path d="M60 94V48"></path>
                    <path d="M60 63L42 50"></path>
                    <path d="M60 73L79 58"></path>
                    <path d="M60 53L72 39"></path>

                    {/* roots */}
                    <path d="M60 92L45 105"></path>
                    <path d="M60 92L74 105"></path>
                    <path d="M60 91V108"></path>

                    {/* network lines */}
                    <path d="M42 50L27 38"></path>
                    <path d="M42 50L30 61"></path>
                    <path d="M72 39L83 25"></path>
                    <path d="M79 58L96 47"></path>
                    <path d="M79 58L96 69"></path>

                    {/* node circles */}
                    <circle cx="27" cy="38" r="6"></circle>
                    <circle cx="30" cy="61" r="6"></circle>
                    <circle cx="83" cy="25" r="6"></circle>
                    <circle cx="96" cy="47" r="6"></circle>
                    <circle cx="96" cy="69" r="6"></circle>

                    <circle
                      className="innovation-main-node"
                      cx="60"
                      cy="42"
                      r="9"
                    ></circle>

                    {/* idea rays */}
                    <path d="M60 20V13"></path>
                    <path d="M44 25L39 19"></path>
                    <path d="M76 25L81 19"></path>
                  </svg>
                </div>
              </div>

              <div className="value-content">
                <span className="value-accent-line"></span>

                <h3>Innovation</h3>

                <p>
                  We adopt modern engineering methods and smarter execution
                  models to deliver future-ready infrastructure.
                </p>
              </div>

              <span className="value-bottom-accent"></span>
            </article>

            {/* =================================================
                03 RELIABILITY
            ================================================== */}
            <article className="value-card reliability-card">
              <span className="value-number">03</span>

              <div className="value-icon-zone">
                <div className="value-orbit">
                  <span></span>
                </div>

                <div className="value-icon reliability-svg">
                  <svg
                    viewBox="0 0 120 120"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    {/* shield */}
                    <path d="M60 15L94 28V53C94 78 81 96 60 106C39 96 26 78 26 53V28L60 15Z"></path>

                    {/* inner shield */}
                    <path d="M60 28L82 37V54C82 70 74 82 60 90C46 82 38 70 38 54V37L60 28Z"></path>

                    {/* check */}
                    <path
                      className="reliability-check"
                      d="M48 58L57 67L74 48"
                    ></path>

                    {/* small status circles */}
                    <circle cx="91" cy="84" r="12"></circle>
                    <path
                      className="reliability-check-small"
                      d="M85 84L89 88L97 79"
                    ></path>
                  </svg>
                </div>
              </div>

              <div className="value-content">
                <span className="value-accent-line"></span>

                <h3>Reliability</h3>

                <p>
                  We commit to predictable delivery, resilient systems,
                  and dependable performance across project lifecycles.
                </p>
              </div>

              <span className="value-bottom-accent"></span>
            </article>

            {/* =================================================
                04 CLIENT CENTRICITY
            ================================================== */}
            <article className="value-card client-card">
              <span className="value-number">04</span>

              <div className="value-icon-zone">
                <div className="value-orbit">
                  <span></span>
                </div>

                <div className="value-icon client-svg">
                  <svg
                    viewBox="0 0 120 120"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    {/* outer focus arcs */}
                    <path d="M38 22C28 27 22 36 19 47"></path>
                    <path d="M82 22C92 27 98 36 101 47"></path>

                    <path d="M19 73C22 84 28 93 38 98"></path>
                    <path d="M101 73C98 84 92 93 82 98"></path>

                    {/* directional chevrons */}
                    <path d="M13 54L21 62L13 70"></path>
                    <path d="M107 54L99 62L107 70"></path>
                    <path d="M52 14L60 22L68 14"></path>
                    <path d="M52 106L60 98L68 106"></path>

                    {/* focus circle */}
                    <circle cx="60" cy="61" r="28"></circle>

                    {/* user */}
                    <circle cx="60" cy="52" r="10"></circle>
                    <path d="M42 82C44 69 50 64 60 64C70 64 76 69 78 82"></path>
                  </svg>
                </div>
              </div>

              <div className="value-content">
                <span className="value-accent-line"></span>

                <h3>Client-Centricity</h3>

                <p>
                  We align every strategy and milestone with client priorities,
                  outcomes, and long-term business value.
                </p>
              </div>

              <span className="value-bottom-accent"></span>
            </article>

          </div>
        </div>
      </section>

      {/* =====================================================
    OUR ROAD TO INFRASTRUCTURE EXCELLENCE
====================================================== */}
<section className="roadmap-section">
  <div className="roadmap-bg roadmap-bg-one"></div>
  <div className="roadmap-bg roadmap-bg-two"></div>
  <div className="section-border-box"></div>

  <div className="roadmap-container">

    {/* ================= LEFT VISUAL ================= */}
  {/* ================= LEFT IMAGE VISUAL ================= */}
<div className="roadmap-visual">
  <div className="roadmap-visual-frame roadmap-image-frame">

    <span className="roadmap-frame-corner corner-one"></span>
    <span className="roadmap-frame-corner corner-two"></span>
    <span className="roadmap-frame-corner corner-three"></span>
    <span className="roadmap-frame-corner corner-four"></span>

    <div className="roadmap-image-glow"></div>

    <img
      src={roadot}
      alt="Infrastructure excellence roadmap"
      className="roadmap-main-image"
    />

    <div className="roadmap-image-overlay"></div>

    <div className="roadmap-image-scan"></div>

    <div className="roadmap-visual-badge">
      <span className="visual-badge-dot"></span>

      <div>
        <small>BUILDING FOR</small>
        <strong>The Next Generation</strong>
      </div>
    </div>

  </div>
</div>


    {/* ================= RIGHT CONTENT ================= */}
    <div className="roadmap-content">

      <div className="roadmap-heading-wrap">

        <span className="roadmap-eyebrow">
          OUR FORWARD JOURNEY
        </span>

        <h2>
          Our Road to
          <span> Infrastructure Excellence</span>
        </h2>

        <span className="roadmap-heading-line"></span>

        <p className="roadmap-intro">
          Our growth strategy is built around sustainable expansion,
          intelligent infrastructure, and engineering systems designed
          for long-term performance.
        </p>

      </div>


      {/* ================= ROADMAP LIST ================= */}
      <div className="roadmap-list">

        {/* 01 */}
        <article className="roadmap-card roadmap-card-one">

          <div className="roadmap-card-index">
            01
          </div>

          <div className="roadmap-card-icon">
            <svg
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle cx="32" cy="32" r="21" />
              <path d="M11 32H53" />
              <path d="M32 11C40 19 43 24 43 32C43 40 40 45 32 53" />
              <path d="M32 11C24 19 21 24 21 32C21 40 24 45 32 53" />
              <path d="M17 20C27 24 37 24 47 20" />
              <path d="M17 44C27 40 37 40 47 44" />
            </svg>
          </div>

          <div className="roadmap-card-content">
            <span className="roadmap-card-label">
              EXPAND
            </span>

            <h3>
              Regional Expansion
            </h3>

            <p>
              Broadening our footprint across South-East Asia and
              strategic global corridors.
            </p>
          </div>

          <span className="roadmap-card-line"></span>

        </article>


        {/* 02 */}
        <article className="roadmap-card roadmap-card-two">

          <div className="roadmap-card-index">
            02
          </div>

          <div className="roadmap-card-icon">
            <svg
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M32 54V31" />
              <path d="M32 37C24 37 17 32 17 22C26 21 32 25 32 37Z" />
              <path d="M32 32C32 21 39 15 49 15C50 25 43 32 32 32Z" />
              <path d="M22 48C28 45 36 45 42 48" />
              <path d="M18 54H46" />
            </svg>
          </div>

          <div className="roadmap-card-content">
            <span className="roadmap-card-label">
              SUSTAIN
            </span>

            <h3>
              Sustainable Innovation
            </h3>

            <p>
              Implementing green-compliant infrastructure processes
              for all telecom deployments.
            </p>
          </div>

          <span className="roadmap-card-line"></span>

        </article>


        {/* 03 */}
        <article className="roadmap-card roadmap-card-three">

          <div className="roadmap-card-index">
            03
          </div>

          <div className="roadmap-card-icon">
            <svg
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect x="16" y="16" width="32" height="32" rx="7" />
              <circle cx="32" cy="32" r="8" />

              <path d="M32 8V16" />
              <path d="M32 48V56" />
              <path d="M8 32H16" />
              <path d="M48 32H56" />

              <path d="M14 14L19 19" />
              <path d="M50 14L45 19" />
              <path d="M14 50L19 45" />
              <path d="M50 50L45 45" />

              <path d="M28 32L31 35L37 28" />
            </svg>
          </div>

          <div className="roadmap-card-content">
            <span className="roadmap-card-label">
              TRANSFORM
            </span>

            <h3>
              Digital Transformation
            </h3>

            <p>
              Integrating AI-driven predictive maintenance to enhance
              lifecycle reliability.
            </p>
          </div>

          <span className="roadmap-card-line"></span>

        </article>

      </div>
    </div>

  </div>
</section>

<section className="cta-crayon-section">
  <div className="cta-crayon-inner">
    <div className="cta-crayon-stroke stroke-one"></div>
    <div className="cta-crayon-stroke stroke-two"></div>
    <div className="cta-crayon-stroke stroke-three"></div>
    <div className="cta-crayon-stroke stroke-four"></div>
    <div className="cta-crayon-stroke stroke-five"></div>

    <div className="cta-crayon-noise"></div>

    <div className="cta-crayon-content">
      <h2>Ready to Build the Future?</h2>

      <p>
        Join hands with India's leading engineering powerhouse for your next
        major infrastructure project.
      </p>

      <div className="cta-crayon-actions">
        <a href="/contact" className="cta-btn cta-btn-primary">
          Get in Touch
        </a>

        <a href="/projects" className="cta-btn cta-btn-secondary">
          View Our Projects
        </a>
      </div>
    </div>
  </div>
</section>
    </>
  );
};

export default About;