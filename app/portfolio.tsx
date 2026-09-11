"use client";

import { useEffect, useState } from "react";

const links = {
  github: "https://github.com/Ramahabir",
  linkedin: "https://www.linkedin.com/in/rama-rizky-belrouzy-habir-a354b9185/",
  email: "mailto:rizkyhabir88@gmail.com",
};

const navItems = [
  ["About", "about"],
  ["Projects", "projects"],
  ["Experience", "experience"],
  ["Credentials", "credentials"],
  ["Contact", "contact"],
] as const;

interface Project {
  number: string;
  category: string;
  title: string;
  summary: string;
  role: string;
  stack: string[];
  outcome: string;
  highlights: string[];
  href: string;
  image?: string;
  placeholderHint: string;
  recommendedFile: string;
}

const projects: Project[] = [
  {
    number: "01",
    category: "Embedded & Telemetry",
    title: "Solar Panel Telemetry",
    summary:
      "An ESP32-based environmental monitoring station that measures solar output parameters (voltage, current, power) and atmospheric conditions, then streams structured telemetry payloads over MQTT for live analysis.",
    role: "Embedded & IoT Developer",
    stack: ["ESP32", "C++", "MQTT", "INA219", "DHT22", "FreeRTOS"],
    outcome: "Real-time bidirectional telemetry with persistent sensor streaming",
    highlights: [
      "Interfaced INA219 current/power monitor and DHT22 environment sensor over I²C & digital GPIO.",
      "Engineered structured JSON telemetry schemas published over secure MQTT broker topics.",
      "Configured non-blocking sensor acquisition loops with automated Wi-Fi reconnect handling.",
    ],
    href: "https://github.com/Ramahabir/Solar-Panel",
    image: "", // Place your photo in public/projects/solar-telemetry.jpg and enter the path here
    placeholderHint: "Photo of ESP32 setup, INA219 current sensor wiring, or telemetry dashboard",
    recommendedFile: "/projects/solar-telemetry.jpg",
  },
  {
    number: "02",
    category: "Device Communication Protocol",
    title: "STM32 ↔ ESP32",
    summary:
      "A bare-metal and HAL serial bridge linking an STM32F401 microcontroller and an ESP32. Designed to evaluate binary packet framing, byte synchronization, hardware ring buffers, and lossless UART transfers under high message throughput.",
    role: "Firmware Developer",
    stack: ["STM32F401", "ESP32", "C", "C++", "UART / USART", "Logic Analyzer"],
    outcome: "Reliable, zero-packet-drop cross-MCU serial communications at 115200 baud",
    highlights: [
      "Implemented byte-level framing with custom start delimiters, payload length, and checksum validation.",
      "Configured interrupt-driven RX circular ring buffers on STM32 to avoid buffer overflow.",
      "Verified waveform rise times and signal integrity using a digital logic analyzer.",
    ],
    href: "https://github.com/Ramahabir/Day-2---USART-and-UART-STM32-ESP32",
    image: "", // Place your photo in public/projects/stm32-esp32-serial.jpg and enter the path here
    placeholderHint: "Photo of STM32 + ESP32 breadboard wiring, logic analyzer, or serial terminal logs",
    recommendedFile: "/projects/stm32-esp32-serial.jpg",
  },
  {
    number: "03",
    category: "Hardware & PCB Integration",
    title: "Hardy IoT Platform",
    summary:
      "An end-to-end hardware-to-cloud device monitoring platform integrating custom schematic design, PCB layout in KiCad, ESP32 firmware, and a real-time monitoring web dashboard.",
    role: "Hardware & Systems Integrator",
    stack: ["KiCad", "PCB Design", "ESP32", "Node.js", "WebSockets", "IoT"],
    outcome: "Modular hardware prototype from schematic to connected web interface",
    highlights: [
      "Engineered 2-layer PCB layout in KiCad with dedicated ground planes and power isolation.",
      "Integrated sensor breakouts, onboard status LEDs, and flash programming headers.",
      "Constructed lightweight Node.js telemetry receiver for live data streaming.",
    ],
    href: "https://github.com/Ramahabir/IoT-Hardy",
    image: "", // Place your photo in public/projects/hardy-iot.jpg and enter the path here
    placeholderHint: "Photo of KiCad 3D PCB render, assembled circuit board, or web telemetry dashboard",
    recommendedFile: "/projects/hardy-iot.jpg",
  },
];

interface Experience {
  period: string;
  role: string;
  organization: string;
  type: string;
  location: string;
  description: string;
  bullets: string[];
  image?: string;
  placeholderHint: string;
  recommendedFile: string;
}

const experience: Experience[] = [
  {
    period: "2025 — Present",
    role: "KRSRI Software Engineer",
    organization: "Brawijaya Robotics Team",
    type: "Autonomous Robotics Division",
    location: "Malang, Indonesia",
    description:
      "Developing software, firmware routines, and motor drive algorithms for the Indonesian Fire-Fighting Robot Contest (Kontes Robot SAR Indonesia - KRSRI).",
    bullets: [
      "Programming microcontroller logic for autonomous maze navigation, flame detection, and obstacle avoidance.",
      "Calibrating actuator control loops and sensor timing for sub-millisecond reaction speeds.",
      "Conducting extensive arena testing, hardware-in-the-loop debugging, and field readiness evaluations.",
    ],
    image: "", // Place your photo in public/activities/krsri-robotics.jpg
    placeholderHint: "Activity Photo: KRSRI robot chassis, test field debugging, or team workshop",
    recommendedFile: "/activities/krsri-robotics.jpg",
  },
  {
    period: "2023 — Present",
    role: "Electrical Engineering Student",
    organization: "Universitas Brawijaya",
    type: "Undergraduate Program (GPA 3.35 / 4.00)",
    location: "Malang, Indonesia",
    description:
      "Pursuing a degree in Electrical Engineering with an academic concentration on telecommunications, embedded microcontroller systems, signal processing, and control engineering.",
    bullets: [
      "Hands-on lab work: analog & digital circuits, microprocessors (STM32 / 8051), and signal analysis.",
      "Key Courses: Microprocessors & Microcontrollers, Telecommunication Systems, Control Engineering, Signals & Systems.",
      "Selected as Academic Peer Tutor for university remedial physics program (PKRb).",
    ],
    image: "", // Place your photo in public/activities/brawijaya-lab.jpg
    placeholderHint: "Activity Photo: University electronics workbench, oscilloscope testing, or campus lab",
    recommendedFile: "/activities/brawijaya-lab.jpg",
  },
  {
    period: "2022 — 2023",
    role: "Secretary I, Student Council",
    organization: "MAN Insan Cendekia Gorontalo",
    type: "Student Leadership & Administration",
    location: "Gorontalo, Indonesia",
    description:
      "Headed executive administrative operations, official correspondence, and inter-organizational documentation for student council initiatives and events.",
    bullets: [
      "Managed administrative workflows, meeting records, and structured documentation across departments.",
      "Coordinated committee logistics for regional student competitions and academic conferences.",
    ],
    image: "", // Place your photo in public/activities/leadership-council.jpg
    placeholderHint: "Activity Photo: Student council committee, event coordination, or organization meeting",
    recommendedFile: "/activities/leadership-council.jpg",
  },
];

interface Credential {
  year: string;
  title: string;
  issuer: string;
  detail: string;
  badge?: string;
  image?: string;
  placeholderHint: string;
  recommendedFile: string;
}

const credentials: Credential[] = [
  {
    year: "2026",
    title: "PRIME Business Case Competition",
    issuer: "Petroleum Research & Innovation to Magnify Engineers",
    detail: "Semifinalist — Formulated comprehensive technical solutions and business strategies for complex engineering scenarios.",
    badge: "Semifinalist",
    image: "",
    placeholderHint: "Certificate / presentation photo: PRIME Business Case Competition",
    recommendedFile: "/activities/prime-competition.jpg",
  },
  {
    year: "2025",
    title: "Scientific Design Competition",
    issuer: "Online Asian Agrocomplex Student Competition",
    detail: "1st Place (Gold Medal) — Designed and defended an engineering technology concept evaluated by an international academic jury.",
    badge: "1st Place Winner",
    image: "",
    placeholderHint: "Award / certificate photo: Scientific Design Competition 1st Place",
    recommendedFile: "/activities/agrocomplex-award.jpg",
  },
  {
    year: "2026",
    title: "MATLAB & Simulink Onramp",
    issuer: "MathWorks",
    detail: "Completed certified self-paced training covering numerical computation, data visualization, dynamic modeling, and Simulink state machines.",
    badge: "Certified",
    image: "",
    placeholderHint: "MathWorks certification screenshot or course completion badge",
    recommendedFile: "/activities/matlab-cert.jpg",
  },
  {
    year: "2023",
    title: "Physics Peer Tutor",
    issuer: "PKRb Remedial Learning Program",
    detail: "Selected as instructor to mentor undergraduate students in foundational physics, problem analysis, and circuit fundamentals.",
    badge: "Honors",
    image: "",
    placeholderHint: "Tutor appointment letter or study session photo",
    recommendedFile: "/activities/tutor-physics.jpg",
  },
];

const skillCategories = [
  {
    name: "Hardware & Microcontrollers",
    skills: ["STM32 (Cortex-M)", "ESP32", "Arduino", "Raspberry Pi", "FreeRTOS", "PlatformIO"],
  },
  {
    name: "Communication & Bus Protocols",
    skills: ["UART / USART", "MQTT", "I²C", "SPI", "CAN Bus", "Wi-Fi (802.11)", "Bluetooth BLE", "LoRa"],
  },
  {
    name: "Programming & Intelligence",
    skills: ["C", "C++", "Python", "OpenCV", "TensorFlow", "TinyML", "MATLAB", "Simulink"],
  },
  {
    name: "Engineering Tools & Design",
    skills: ["KiCad (Schematic & PCB)", "Fusion 360", "Linux / Bash", "Git", "Docker", "Oscilloscopes & Logic Analyzers"],
  },
];

function ActivityImagePlaceholder({
  image,
  alt,
  placeholderHint,
  recommendedFile,
  aspectRatio = "16/9",
}: {
  image?: string;
  alt: string;
  placeholderHint: string;
  recommendedFile: string;
  aspectRatio?: string;
}) {
  if (image && image.trim() !== "") {
    return (
      <div className="activity-image-box" style={{ aspectRatio }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={alt} className="activity-img" loading="lazy" />
      </div>
    );
  }

  return (
    <div className="activity-placeholder" style={{ aspectRatio }} aria-label={`Placeholder for: ${alt}`}>
      <div className="placeholder-pattern" aria-hidden="true" />
      <div className="placeholder-content">
        <div className="placeholder-icon-wrap" aria-hidden="true">
          <svg className="placeholder-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
        </div>
        <span className="placeholder-tag">PHOTO PLACEHOLDER</span>
        <p className="placeholder-hint">{placeholderHint}</p>
        <span className="placeholder-path">
          File: <code>public{recommendedFile}</code>
        </span>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const sectionIds = ["about", "projects", "experience", "credentials", "contact"];
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -50% 0px", threshold: [0, 0.2, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio-shell">
      <a className="skip-link" href="#content">
        Skip to content
      </a>

      {/* Clean Technical Header */}
      <header className="site-header">
        <div className="header-container">
          <a className="brand" href="#top" aria-label="Rama Habir, top of page">
            <span className="brand-badge">RH</span>
            <span className="brand-name">Rama Habir</span>
            <span className="brand-role">/ Robotics & Embedded</span>
          </a>

          <nav id="mobile-navigation" className={menuOpen ? "nav open" : "nav"} aria-label="Primary navigation">
            {navItems.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className={active === id ? "active" : ""}
                onClick={closeMenu}
              >
                {label}
              </a>
            ))}
            <a className="nav-cta" href={links.email} onClick={closeMenu}>
              Get in touch
            </a>
          </nav>

          <button
            className="menu-button"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <main id="content">
        {/* Clean Hero Section */}
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-container">
            <div className="hero-status">
              <span className="status-indicator" />
              <span className="status-text">Malang, Indonesia · Open to Robotics & Embedded Systems Opportunities</span>
            </div>

            <h1 id="hero-title" className="hero-title">
              Rama Rizky Belrouzy Habir
              <span className="hero-subtitle">Engineering machines that sense, communicate, and act.</span>
            </h1>

            <p className="hero-lead">
              Electrical Engineering student at <strong>Universitas Brawijaya</strong> and KRSRI Software Engineer with the <strong>Brawijaya Robotics Team</strong>. Specializing in bare-metal and RTOS firmware (STM32, ESP32), sensor telemetry, and reliable device-to-cloud communication.
            </p>

            <div className="hero-actions">
              <a className="btn btn-primary" href="#projects">
                View Engineering Projects ↓
              </a>
              <a className="btn btn-secondary" href={links.github} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
              <a className="btn btn-secondary" href={links.linkedin} target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
              <a className="btn btn-secondary" href={links.email}>
                Email Directly ↗
              </a>
            </div>

            <div className="spec-bar">
              <div className="spec-item">
                <span className="spec-label">Primary Stack</span>
                <span className="spec-value">C / C++, STM32, ESP32, FreeRTOS</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Current Role</span>
                <span className="spec-value">KRSRI Software Engineer @ Brawijaya Robotics</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Education</span>
                <span className="spec-value">B.Eng in Electrical Engineering (GPA 3.35)</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Core Focus</span>
                <span className="spec-value">Robotics, Embedded Firmware, Telemetry</span>
              </div>
            </div>
          </div>
        </section>

        {/* About & Engineering Philosophy */}
        <section className="section" id="about">
          <div className="section-container">
            <div className="section-header">
              <span className="section-index">01 / OVERVIEW</span>
              <h2>Engineering Profile</h2>
              <p className="section-desc">
                Building reliable software where code directly interfaces with physical hardware, actuators, and communication buses.
              </p>
            </div>

            <div className="about-layout">
              <div className="about-bio">
                <p>
                  As an Electrical Engineering student, my work is centered around the physical layer and firmware execution: reading ADC and digital sensors, parsing serial streams, synchronizing motor actuators, and optimizing microcontroller memory constraints.
                </p>
                <p>
                  In the <strong>Brawijaya Robotics Team</strong>, I contribute to the KRSRI autonomous fire-fighting robotics division, engineering algorithms that help autonomous robots navigate dynamic arena environments under real-time constraints.
                </p>
                <div className="about-details-table">
                  <div className="table-row">
                    <span className="row-key">Full Name</span>
                    <span className="row-val">Rama Rizky Belrouzy Habir</span>
                  </div>
                  <div className="table-row">
                    <span className="row-key">Institution</span>
                    <span className="row-val">Universitas Brawijaya (Faculty of Engineering)</span>
                  </div>
                  <div className="table-row">
                    <span className="row-key">Major</span>
                    <span className="row-val">Electrical Engineering (Telecommunications & Electronics)</span>
                  </div>
                  <div className="table-row">
                    <span className="row-key">Primary Focus</span>
                    <span className="row-val">Autonomous Robotics, Embedded Firmware, IoT Telemetry</span>
                  </div>
                </div>
              </div>

              <div className="about-profile-card">
                <div className="profile-img-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/rama-profile.jpg" alt="Rama Rizky Belrouzy Habir" className="profile-photo" />
                </div>
                <div className="profile-card-caption">
                  <h3>Rama Habir</h3>
                  <p>Electrical Engineering & Robotics</p>
                  <span className="profile-meta">Universitas Brawijaya · Class of 2027</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Selected Projects with Image Placeholders */}
        <section className="section section-bordered" id="projects">
          <div className="section-container">
            <div className="section-header">
              <span className="section-index">02 / PROJECTS</span>
              <h2>Selected Engineering Projects</h2>
              <p className="section-desc">
                Documented hardware and firmware implementations with verifiable code and architecture.
              </p>
            </div>

            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <div className="project-media-col">
                    <ActivityImagePlaceholder
                      image={project.image}
                      alt={project.title}
                      placeholderHint={project.placeholderHint}
                      recommendedFile={project.recommendedFile}
                      aspectRatio="16/10"
                    />
                  </div>

                  <div className="project-body-col">
                    <div className="project-meta-top">
                      <span className="project-num">PROJECT {project.number}</span>
                      <span className="project-cat">{project.category}</span>
                    </div>

                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-summary">{project.summary}</p>

                    <div className="project-highlights">
                      <span className="highlights-title">Engineering Highlights:</span>
                      <ul>
                        {project.highlights.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="project-specs-grid">
                      <div>
                        <span className="spec-mini-title">Role</span>
                        <span className="spec-mini-val">{project.role}</span>
                      </div>
                      <div>
                        <span className="spec-mini-title">Outcome</span>
                        <span className="spec-mini-val">{project.outcome}</span>
                      </div>
                    </div>

                    <div className="project-stack-wrap">
                      {project.stack.map((tech) => (
                        <span className="tech-chip" key={tech}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="project-cta-row">
                      <a className="btn btn-sm btn-primary" href={project.href} target="_blank" rel="noreferrer">
                        View Repository ↗
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Hands-on Activities & Experience with Image Placeholders */}
        <section className="section" id="experience">
          <div className="section-container">
            <div className="section-header">
              <span className="section-index">03 / EXPERIENCE & ACTIVITIES</span>
              <h2>Hands-on Activities & Trajectory</h2>
              <p className="section-desc">
                Practical engineering experience gained through competitive robotics, university lab research, and leadership.
              </p>
            </div>

            <div className="experience-list">
              {experience.map((item) => (
              {experience.map((item, index) => (
                <article className="experience-card" key={`${item.period}-${item.role}`}>
                  <div className="exp-media-col">
                    <ActivityImagePlaceholder
                      image={item.image}
                      alt={`${item.role} at ${item.organization}`}
                      placeholderHint={item.placeholderHint}
                      recommendedFile={item.recommendedFile}
                      aspectRatio="16/10"
                    />
                  </div>

                  <div className="exp-content-col">
                    <div className="exp-badge-row">
                      <span className="exp-period">{item.period}</span>
                      <span className="exp-location">{item.location}</span>
                    </div>

                    <h3 className="exp-role">{item.role}</h3>
                    <p className="exp-org">
                      <strong>{item.organization}</strong> · <span>{item.type}</span>
                    </p>

                    <p className="exp-desc">{item.description}</p>

                    <div className="exp-bullets">
                      <span className="highlights-title">Key Responsibilities & Deliverables:</span>
                      <ul>
                        {item.bullets.map((bullet, idx) => (
                          <li key={idx}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Credentials, Awards, and Verification */}
        <section className="section section-bordered" id="credentials">
          <div className="section-container">
            <div className="section-header">
              <span className="section-index">04 / VERIFICATION</span>
              <h2>Credentials & Achievements</h2>
              <p className="section-desc">
                Competitive achievements, certifications, and academic tutoring honors.
              </p>
            </div>

            <div className="credentials-grid">
              {credentials.map((cred) => (
                <article className="credential-card" key={cred.title}>
                  <div className="credential-top">
                    <span className="credential-year">{cred.year}</span>
                    {cred.badge && <span className="credential-badge">{cred.badge}</span>}
                  </div>
                  <h3 className="credential-title">{cred.title}</h3>
                  <p className="credential-issuer">{cred.issuer}</p>
                  <p className="credential-detail">{cred.detail}</p>
                  
                  {/* Subtle placeholder/image slot for certificate or medal */}
                  <div className="credential-media-slot">
                    <ActivityImagePlaceholder
                      image={cred.image}
                      alt={cred.title}
                      placeholderHint={cred.placeholderHint}
                      recommendedFile={cred.recommendedFile}
                      aspectRatio="21/9"
                    />
                  </div>
                </article>
              ))}
            </div>

            {/* Technical Toolkit Matrix */}
            <div className="toolkit-wrap">
              <div className="section-subheading">
                <h3>Technical Skill Matrix</h3>
                <p>Categorized by hardware, communication standards, and development tools.</p>
              </div>

              <div className="skill-matrix-grid">
                {skillCategories.map((cat) => (
                  <div className="matrix-column" key={cat.name}>
                    <h4 className="matrix-title">{cat.name}</h4>
                    <ul className="matrix-list">
                      {cat.skills.map((skill) => (
                        <li key={skill}>
                          <span className="skill-dot" />
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Recruitment Info */}
        <section className="section contact-section" id="contact">
          <div className="section-container">
            <div className="contact-box">
              <div className="contact-info">
                <span className="section-index">05 / GET IN TOUCH</span>
                <h2>Let&apos;s Discuss Engineering Opportunities</h2>
                <p>
                  I am actively seeking robotics, embedded firmware, telecommunications, and IoT engineering internships or project collaborations.
                </p>
                <div className="contact-meta-table">
                  <div>
                    <span className="cm-label">Direct Email</span>
                    <a className="cm-val cm-link" href={links.email}>
                      rizkyhabir88@gmail.com ↗
                    </a>
                  </div>
                  <div>
                    <span className="cm-label">Location</span>
                    <span className="cm-val">Malang, East Java, Indonesia (WIB / UTC+7)</span>
                  </div>
                  <div>
                    <span className="cm-label">Profiles</span>
                    <div className="cm-links-row">
                      <a href={links.github} target="_blank" rel="noreferrer">
                        GitHub Profile ↗
                      </a>
                      <span className="sep">·</span>
                      <a href={links.linkedin} target="_blank" rel="noreferrer">
                        LinkedIn Profile ↗
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-actions">
                <a className="btn btn-primary btn-lg" href={links.email}>
                  Send Email to Rama ↗
                </a>
                <a className="btn btn-secondary btn-lg" href={links.linkedin} target="_blank" rel="noreferrer">
                  Connect on LinkedIn ↗
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-brand">
            <span className="brand-badge">RH</span>
            <div>
              <strong>Rama Rizky Belrouzy Habir</strong>
              <p>Robotics · Embedded Systems · Telecommunications</p>
            </div>
          </div>
          <div className="footer-links">
            <a href={links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={links.email}>
              Email
            </a>
            <a href="#top">
              Back to Top ↑
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
