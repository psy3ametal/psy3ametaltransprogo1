import { useState } from "react";
import "./ContactPage.css";
import contactUsImage from "../assets/contactus.png";

export default function ContactPage() {
  const [message, setMessage] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const name = form.name.value.trim();

    setMessage(
      `Thanks ${name || "there"}! Your inquiry has been received.`
    );

    form.reset();
  };

  return (
    <main className="contact-page">

      {/* =========================================
          HERO
      ========================================= */}
      <section
        className="contact-hero"
        style={{
          backgroundImage: `url(${contactUsImage})`,
        }}
      >
        {/* overlays */}
        <div className="contact-hero-overlay" />
        <div className="contact-hero-mesh" />

        {/* animated glow */}
        <div className="contact-hero-glow glow-blue-one" />
        <div className="contact-hero-glow glow-blue-two" />

        {/* animated light lines */}
        <div className="hero-moving-line line-top" />
        <div className="hero-moving-line line-bottom" />

        {/* hero content */}
        <div className="contact-container contact-hero-content">

          <p className="contact-eyebrow">
            <span />
            GET IN TOUCH
          </p>

          <h1>
            Connect With Our
            <br />
            <span>Engineering Team.</span>
          </h1>

          <p className="contact-hero-description">
            From infrastructure execution to technical support,
            our specialized teams are ready to understand your
            requirements and help move your project forward.
          </p>

          <a href="#contact-form" className="contact-hero-btn">
            <span>Start a Conversation</span>
            <b>↗</b>
          </a>

        </div>

        <div className="hero-side-label">
          <span />
          ENGINEERING • INFRASTRUCTURE • DELIVERY
        </div>

        <div className="contact-hero-bottom-line" />
      </section>


      {/* =========================================
          INTRO SECTION
      ========================================= */}
      <section className="contact-intro">

        <div className="contact-container">

          <div className="contact-intro-grid">

            <div className="contact-intro-title">

              <p className="contact-section-label">
                WE'RE READY TO HELP
              </p>

              <h2>
                Engineering support
                <br />
                <span>when you need it.</span>
              </h2>

            </div>

            <div className="contact-intro-copy">

              <p>
                Whether you're starting a new infrastructure project
                or need support for existing systems, our specialized
                engineering teams are ready to assist.
              </p>

              <p>
                Share your project requirements with us and our team
                will connect you with the appropriate technical
                specialist.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          CONTACT SECTION
      ========================================= */}
      <section
        className="contact-section"
        id="contact-form"
      >

        <div className="contact-container">

          <div className="contact-layout">


            {/* =====================================
                FORM
            ===================================== */}
            <form
              className="contact-form"
              onSubmit={onSubmit}
            >

              <div className="contact-form-heading">

                <p className="contact-section-label">
                  SEND AN INQUIRY
                </p>

                <h2>
                  Tell us about
                  <br />
                  your project.
                </h2>

              </div>


              <div className="contact-form-two">

                <label>

                  <span>
                    Full Name *
                  </span>

                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    required
                  />

                </label>


                <label>

                  <span>
                    Email Address *
                  </span>

                  <input
                    type="email"
                    name="email"
                    placeholder="john@company.com"
                    required
                  />

                </label>

              </div>


              <div className="contact-form-two">

                <label>

                  <span>
                    Phone Number
                  </span>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 98765 43210"
                  />

                </label>


                <label>

                  <span>
                    Company
                  </span>

                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                  />

                </label>

              </div>


              <label>

                <span>
                  Subject / Department
                </span>

                <input
                  type="text"
                  name="subject"
                  placeholder="Civil Infrastructure Inquiry"
                />

              </label>


              <label>

                <span>
                  Message
                </span>

                <textarea
                  name="message"
                  rows="6"
                  placeholder="Tell us about your project, scope and requirements..."
                />

              </label>


              <button
                className="contact-submit-btn"
                type="submit"
              >

                <span>
                  Submit Inquiry
                </span>

                <span className="contact-btn-arrow">
                  ↗
                </span>

              </button>


              {message && (

                <p className="contact-form-message">
                  {message}
                </p>

              )}

            </form>


            {/* =====================================
                DIRECT ACCESS CARD
            ===================================== */}
            <aside className="contact-info-card">

              <div className="contact-info-decoration">
                <span />
                <span />
                <span />
              </div>


              <div className="contact-info-top">

                <p className="contact-info-eyebrow">
                  GLOBAL REACH
                </p>

                <h3>
                  Direct
                  <br />
                  <span>Access.</span>
                </h3>

                <p className="contact-info-description">
                  Reach our administrative hubs for procurement,
                  engineering coordination or urgent technical
                  dispatch.
                </p>

              </div>


              <div className="contact-info-list">


                <div className="contact-info-item">

                  <div className="contact-info-number">
                    01
                  </div>

                  <div>

                    <small>
                      GLOBAL SWITCHBOARD
                    </small>

                    <a href="tel:+919787707911">
                      +91 97877 07911
                    </a>

                  </div>

                </div>


                <div className="contact-info-item">

                  <div className="contact-info-number">
                    02
                  </div>

                  <div>

                    <small>
                      GENERAL CORRESPONDENCE
                    </small>

                    <a href="mailto:info@transproeng.com">
                      info@transproeng.com
                    </a>

                  </div>

                </div>


                <div className="contact-info-item">

                  <div className="contact-info-number">
                    03
                  </div>

                  <div>

                    <small>
                      PROJECT DISCUSSIONS
                    </small>

                    <span className="contact-info-text">
                      Engineering & Infrastructure
                    </span>

                  </div>

                </div>

              </div>


              <div className="contact-info-footer">

                <span className="contact-info-status" />

                <span>
                  Our team is ready to connect
                </span>

              </div>

            </aside>

          </div>

        </div>

      </section>


      {/* =========================================
          BOTTOM CTA
      ========================================= */}
      <section className="contact-bottom">

        <div className="contact-container">

          <div className="contact-bottom-inner">

            <div>

              <p>
                HAVE A PROJECT IN MIND?
              </p>

              <h2>
                Let's start a
                <span> conversation.</span>
              </h2>

            </div>


            <a href="mailto:info@transproeng.com">

              <span>
                Get in Touch
              </span>

              <b>
                ↗
              </b>

            </a>

          </div>

        </div>

      </section>

    </main>
  );
}