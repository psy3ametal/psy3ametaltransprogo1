import { useNavigate } from "react-router-dom";
import "./Scope.css";
import scopeImg from "../assets/scope.png";
import tunnelImg from "../assets/tunnel.png";

// Service card icons — one PNG per card, dropped in /assets as
// empty1.png ... empty6.png (placeholders, swap with real art later).
import icon1 from "../assets/empty6.png";
import icon2 from "../assets/empty1.png";
import icon3 from "../assets/empty2.png";
import icon4 from "../assets/empty4.png";
import icon5 from "../assets/empty3.png";
import icon6 from "../assets/empty5.png";

// Each dot travels from the center badge outward to one of the 6
// connected nodes in the image. Position values are % of the hero
// container, matched to where the nodes sit in scope.png.
const dots = [
  { id: 1, className: "dot-1" }, // top-left gear
  { id: 2, className: "dot-2" }, // mid-left document
  { id: 3, className: "dot-3" }, // bottom-left globe
  { id: 4, className: "dot-4" }, // top-right globe
  { id: 5, className: "dot-5" }, // mid-right documents
  { id: 6, className: "dot-6" }, // bottom-right chart
];

// Section 3 — six service cards. Each card now uses a single PNG
// image (icon-1.png ... icon-6.png) instead of an inline SVG icon.
const services = [
  {
    id: "ofc",
    title: "OFC Laying & Splicing",
    text: "End-to-end optical fiber cable solutions including trenching, HDD and fusion splicing. Our crews handle route survey, duct laying, cable pulling and OTDR-verified splicing across underground, aerial and duct networks. We manage permits, civil works and site restoration so every stretch of fiber goes live clean, tested and ready for traffic from day one.",
    icon: icon1,
  },
  {
    id: "design",
    title: "Network Design & Planning",
    text: "Survey, route optimization and capacity planning to ensure reliable rollouts. We combine GIS mapping, RF and fiber route modeling with real site walks to design networks that are buildable, not just theoretical. Every design factors in future capacity, redundancy and maintenance access, so expansion never means starting over.",
    icon: icon2,
  },
  {
    id: "isp-osp",
    title: "ISP & OSP Infrastructure",
    text: "Internal and external plant engineering for enterprise facilities. We design structured cabling, MDF/IDF layouts and campus duct networks that scale with headcount and equipment growth. From server rooms to building risers to underground interconnects, our OSP and ISP teams work as one to keep every link documented and serviceable.",
    icon: icon3,
  },
  {
    id: "telecom",
    title: "Telecom Infrastructure",
    text: "Turnkey deployment of green field and rooftop towers. We manage everything from site acquisition and structural design to tower erection, antenna integration and power backup. Our teams coordinate with landlords, regulators and OEMs so towers go live on schedule, fully compliant and built to carry decades of traffic.",
    icon: icon4,
  },
  {
    id: "om",
    title: "O&M Managed Services",
    text: "24/7 preventive and corrective interventions. Scheduled maintenance, spares management and rapid-response repair keep networks running with minimal downtime. Our field engineers follow documented SOPs and SLA-bound response times, so every fault is caught, logged and resolved before it ever reaches your customers.",
    icon: icon5,
  },
  {
    id: "ops",
    title: "24/7 Active Operations",
    text: "Equipment maintenance, power plant O&M and fault localization. Our NOC monitors live network health around the clock, dispatching field teams the moment an anomaly is detected. From battery banks to generators to active electronics, we keep the entire power and performance layer running without interruption.",
    icon: icon6,
  },
];

// Section — "Our Technical Ecosystem" quick-stat cards. Each item
// carries its own accent color (icon strokes + card highlight) and a
// short two-line description.
const ecosystem = [
  {
    id: "quality",
    label: "Quality Grade",
    accent: "#38bdf8",
    desc: "ISO-aligned QA checkpoints run at every build stage — from material sourcing to final commissioning, each deliverable is verified end-to-end.",
    icon: (
      // Rosette / badge — distinct from the Safety shield below
      <svg viewBox="0 0 64 64" fill="none">
        <circle className="eco-ring" cx="32" cy="24" r="14" stroke="#38bdf8" strokeWidth="3" fill="none" />
        <circle cx="32" cy="24" r="6" fill="#38bdf8" />
        <path
          className="eco-ribbon"
          d="M24 35 L18 56 L32 48 L46 56 L40 35"
          stroke="#38bdf8"
          strokeWidth="3"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    ),
  },
  {
    id: "safety",
    label: "Safety Standards",
    accent: "#f5a742",
    desc: "Certified safety protocols govern every site, crew and lift — strict PPE, permit-to-work and hazard controls, followed without exception.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none">
        <path
          className="eco-shield"
          d="M32 8 L52 16 V30 C52 44 44 52 32 56 C20 52 12 44 12 30 V16 Z"
          stroke="#f5a742"
          strokeWidth="3"
          fill="rgba(245, 167, 66, 0.12)"
        />
        <path
          className="eco-check"
          d="M23 31 L30 38 L43 24"
          stroke="#f5a742"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    ),
  },
  {
    id: "realtime",
    label: "Real-time Data",
    accent: "#34d399",
    desc: "Live dashboards track splice loss, uptime and progress — field teams report straight from site so decisions never wait on a status call.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="26" stroke="rgba(52,211,153,0.35)" strokeWidth="3" fill="none" />
        <path
          className="eco-pulse"
          d="M10 32 L22 32 L27 18 L34 46 L39 32 L54 32"
          stroke="#34d399"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    ),
  },
  {
    id: "global",
    label: "Global Scale",
    accent: "#a78bfa",
    desc: "Deployed across multiple countries and time zones — one playbook, one quality bar, wherever the network needs to reach next.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="26" stroke="#a78bfa" strokeWidth="3" fill="none" />
        <ellipse cx="32" cy="32" rx="26" ry="11" stroke="rgba(167,139,250,0.5)" strokeWidth="2" fill="none" />
        <line x1="6" y1="32" x2="58" y2="32" stroke="rgba(167,139,250,0.5)" strokeWidth="2" />
        <line x1="32" y1="6" x2="32" y2="58" stroke="rgba(167,139,250,0.5)" strokeWidth="2" />
        <circle className="eco-orbit" cx="32" cy="6" r="3" fill="#a78bfa" />
      </svg>
    ),
  },
];

export default function Scope() {
  const navigate = useNavigate();

  const goToContact = () => {
    navigate("/contact");
  };

  return (
    <>
      <section className="scope-hero">
        <img src={scopeImg} alt="Scope overview" className="scope-hero__img" />

        <div className="scope-hero__pulse-field" aria-hidden="true">
          {dots.map((dot) => (
            <span key={dot.id} className={`scope-dot ${dot.className}`} />
          ))}
        </div>

        <div className="scope-hero__overlay">
          <div className="scope-hero__text">
            <h1 className="scope-hero__title">Service Scope</h1>
            <p className="scope-hero__subtitle">
              Precision Engineering for Global Connectivity
            </p>
          </div>
        </div>
      </section>

      <section className="scope-expertise">
        <div className="scope-expertise__frame">
          <div className="scope-expertise__inner">
            <div className="scope-expertise__content">
              <span className="scope-expertise__eyebrow">Our Expertise</span>
              <h2 className="scope-expertise__title">
                Precision Engineering for Global Connectivity.
              </h2>
              <p className="scope-expertise__text">
                From subterranean fiber networks to high-altitude telecom
                towers, our scope defines technical excellence. We plan,
                install, and maintain the physical backbone that keeps
                networks live — underground duct banks, cable tunnels,
                tower infrastructure, and last-mile connectivity — built
                to withstand demanding environments and scale with
                tomorrow's bandwidth needs.
              </p>
              <p className="scope-expertise__text">
                Every project is engineered end to end: site survey and
                design, civil and structural work, cable pulling and
                splicing, testing, and long-term maintenance — so our
                clients get infrastructure that performs reliably for
                decades, not just at handover.
              </p>
              <p className="scope-expertise__text">
                Our teams work across greenfield builds and brownfield
                upgrades alike, coordinating closely with utilities,
                municipalities and enterprise stakeholders to keep
                rollouts on schedule and compliant with local codes.
                With in-house survey crews, certified splicing
                technicians and a 24/7 NOC watching every live link,
                we catch issues before they become outages.
              </p>
              <p className="scope-expertise__text">
                Whether it's a single rooftop tower, a citywide duct
                network, or a multi-country backbone rollout, we bring
                the same discipline: documented processes, measurable
                SLAs, and engineers who stay accountable for the
                network long after the ribbon-cutting.
              </p>
            </div>

            <div className="scope-expertise__media">
              <img
                src={tunnelImg}
                alt="Underground fiber and cable duct installation"
                className="scope-expertise__img"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="scope-services">
        <div className="scope-services__head">
          <span className="scope-services__eyebrow">What We Do</span>
          <h2 className="scope-services__title">Our Service Scope</h2>
        </div>

        <div className="scope-services__grid">
          {services.map((service) => (
            <div className="service-card" key={service.id}>
              <div className="service-card__art">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="service-card__photo"
                />
              </div>
              <div className="service-card__body">
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__text">{service.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="scope-ecosystem">
        <div className="scope-ecosystem__frame">
          <div className="scope-ecosystem__head">
            <h2 className="scope-ecosystem__title">Our Technical Ecosystem</h2>
            <p className="scope-ecosystem__subtitle">
              We leverage standardized methods and real-time field
              intelligence for mission-critical execution.
            </p>
          </div>

          <div className="scope-ecosystem__grid">
            {ecosystem.map((item, i) => (
              <div
                className="eco-card"
                key={item.id}
                style={{
                  animationDelay: `${i * 0.12}s`,
                  "--eco-accent": item.accent,
                }}
              >
                <div className="eco-card__icon">{item.icon}</div>
                <p className="eco-card__label">{item.label}</p>
                <p className="eco-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="scope-cta">
        <div className="scope-cta__inner">
          <h2 className="scope-cta__title">Ready to scale your infrastructure?</h2>
          <p className="scope-cta__subtitle">
            Consult with our engineering leads to design a solution
            tailored to your network requirements.
          </p>
          <div className="scope-cta__actions">
            <button
              type="button"
              className="scope-cta__btn scope-cta__btn--primary"
              onClick={goToContact}
            >
              Speak with an Engineer
            </button>
          </div>
        </div>
      </section>
    </>
  );
}