"use client";

import { useEffect, useState } from "react";

const links = {
  github: "https://github.com/Ramahabir",
  linkedin:
    "https://www.linkedin.com/in/rama-rizky-belrouzy-habir-a354b9185/",
  email: "mailto:rizkyhabir88@gmail.com",
};

const navItems = [
  ["About", "about"],
  ["Projects", "projects"],
  ["Experience", "experience"],
  ["Credentials", "credentials"],
] as const;

const projects = [
  {
    number: "01",
    label: "Embedded telemetry",
    title: "Solar Panel Telemetry",
    description:
      "An ESP32-based monitoring system that samples temperature, humidity, voltage, current, and power, then publishes structured telemetry over MQTT.",
    role: "Embedded & IoT developer",
    stack: ["ESP32", "C++", "MQTT", "INA219", "DHT22"],
    outcome: "Bidirectional, real-time device telemetry",
    href: "https://github.com/Ramahabir/Solar-Panel",
    className: "project-blue",
    visual: "telemetry",
  },
  {
    number: "02",
    label: "Device communication",
    title: "STM32 ↔ ESP32",
    description:
      "A documented UART/USART link between an STM32F401 and ESP32, built to understand framing, synchronization, memory representation, and reliable serial transfer.",
    role: "Firmware developer",
    stack: ["STM32", "ESP32", "C", "UART", "115200 8N1"],
    outcome: "Reliable cross-device serial communication",
    href: "https://github.com/Ramahabir/Day-2---USART-and-UART-STM32-ESP32",
    className: "project-violet",
    visual: "signal",
  },
  {
    number: "03",
    label: "Hardware systems",
    title: "Hardy IoT Platform",
    description:
      "An evolving hardware-to-dashboard system combining ESP32 electronics, custom PCB work in KiCad, device-side IoT code, and a web monitoring interface.",
    role: "Hardware–software integrator",
    stack: ["KiCad", "ESP32", "Node.js", "IoT", "PCB"],
    outcome: "End-to-end prototype in active development",
    href: "https://github.com/Ramahabir/IoT-Hardy",
    className: "project-cyan",
    visual: "pcb",
  },
];

const experience = [
  {
    years: "2025 — Now",
    role: "KRSRI Software Engineer",
    company: "Brawijaya Robotics Team",
    copy: "Developing robotics software while strengthening embedded control, device integration, and systematic debugging skills.",
  },
  {
    years: "2023 — Now",
    role: "Electrical Engineering Student",
    company: "Universitas Brawijaya",
    copy: "Studying telecommunications, embedded electronics, control systems, and robotics with a current GPA of 3.35/4.00.",
  },
  {
    years: "2022 — 2023",
    role: "Secretary I, Student Council",
    company: "MAN Insan Cendekia Gorontalo",
    copy: "Managed core administration and organizational coordination, building a foundation in documentation and team leadership.",
  },
];

const credentials = [
  {
    year: "2026",
    title: "PRIME Business Case Competition",
    detail: "Semifinalist — Petroleum Research & Innovation to Magnify Engineers",
  },
  {
    year: "2025",
    title: "Scientific Design Competition",
    detail: "1st Place — Online Asian Agrocomplex Student Competition",
  },
  {
    year: "2026",
    title: "MATLAB & Simulink Onramp",
    detail: "MathWorks self-paced training, 100% completed",
  },
  {
    year: "2023",
    title: "Physics Peer Tutor",
    detail: "Selected tutor for the PKRb remedial learning program",
  },
];

const skills = [
  ["Embedded", "C, C++, STM32, ESP32, Arduino, Raspberry Pi, PlatformIO"],
  ["Communication", "UART/USART, MQTT, I²C, SPI, CAN, Wi-Fi, Bluetooth, LoRa"],
  ["Intelligence", "Python, OpenCV, TensorFlow, PyTorch, TinyML, Scikit-learn"],
  ["Engineering", "MATLAB, Simulink, KiCad, Fusion 360, Linux, Git, Docker"],
];

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const sections = ["about", "projects", "experience", "credentials", "contact"]
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.2, 0.5] },
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
    <main>
      <a className="skip-link" href="#content">Skip to content</a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Rama, back to top">
          <span className="brand-mark">RB</span>
          <span>Rama Habir</span>
        </a>
        <nav id="mobile-navigation" className={menuOpen ? "nav open" : "nav"} aria-label="Primary navigation">
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`} className={active === id ? "active" : ""} onClick={closeMenu}>
              {label}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Let&apos;s connect <span aria-hidden="true">↗</span>
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
          <span /><span />
        </button>
      </header>

      <section className="hero robotics-hero" id="top" aria-labelledby="hero-title">
        <div className="hero-glow glow-one" />
        <div className="hero-glow glow-two" />
        <div className="signal-field" aria-hidden="true">
          <i className="signal-ring ring-one" />
          <i className="signal-ring ring-two" />
          <i className="signal-ring ring-three" />
          <i className="signal-node node-one" />
          <i className="signal-node node-two" />
          <i className="signal-node node-three" />
        </div>
        <div className="hero-content" id="content">
          <p className="eyebrow reveal">
            <span className="status-dot" /> Malang, Indonesia · Open to opportunities
          </p>
          <h1 className="reveal delay-one" id="hero-title">
            Machines that
            <br />
            <span>sense &amp; connect.</span>
          </h1>
          <p className="hero-copy reveal delay-two">
            I&apos;m Rama Rizky Belrouzy Habir, an Electrical Engineering student
            building at the intersection of robotics software, embedded systems,
            and telecommunications.
          </p>
          <div className="hero-actions reveal delay-three">
            <a className="button button-primary" href="#projects">
              Explore my systems <span aria-hidden="true">↓</span>
            </a>
            <a className="button button-ghost" href={links.github} target="_blank" rel="noreferrer">
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <div className="scroll-cue" aria-hidden="true"><span>Follow the signal</span><i /></div>
      </section>

      <section className="tech-strip" aria-label="Core technologies">
        <span>STM32</span><i /><span>ESP32</span><i /><span>C / C++</span><i />
        <span>MQTT</span><i /><span>MATLAB</span><i /><span>KiCad</span>
      </section>

      <section className="section about-section" id="about">
        <div className="section-label"><span>01</span><p>Engineering profile</p></div>
        <div className="about-grid">
          <h2>Bridging electrons, algorithms, and communication.</h2>
          <div className="about-copy">
            <p>
              My work starts where software meets the physical world: reading a
              sensor, moving an actuator, transferring data reliably, and turning
              a prototype into an understandable system.
            </p>
            <p>
              At Universitas Brawijaya and the Brawijaya Robotics Team, I&apos;m
              developing the embedded and software foundations for a career in
              robotics and telecommunications.
            </p>
            <a className="text-link" href="#experience">
              See my trajectory <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="capability-grid">
          <article><span className="capability-icon">MCU</span><h3>Embedded intelligence</h3><p>Firmware, sensors, actuators, and resource-aware software for real devices.</p></article>
          <article><span className="capability-icon">RF</span><h3>Connected systems</h3><p>Serial, wireless, and IoT communication designed around reliable data flow.</p></article>
          <article><span className="capability-icon">CV</span><h3>Machine perception</h3><p>Exploring computer vision and edge AI that help machines interpret their environment.</p></article>
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="section-heading">
          <div className="section-label"><span>02</span><p>Selected systems</p></div>
          <h2>From circuit-level signals to useful data.</h2>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className={`project-card ${project.className}`} key={project.title}>
              <div className={`project-visual visual-${project.visual}`} aria-hidden="true">
                <div className="visual-orbit orbit-one" />
                <div className="visual-orbit orbit-two" />
                <span className="visual-number">{project.number} / SYSTEM</span>
                <div className="visual-window engineering-window">
                  <div className="window-top"><i /><i /><i /><b>LIVE TELEMETRY</b></div>
                  <div className="window-body">
                    <span /><span /><span />
                    <div className="data-row"><em>RX</em><strong>115200</strong><em>OK</em></div>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <p className="project-label">{project.label}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <dl className="project-details">
                  <div><dt>Role</dt><dd>{project.role}</dd></div>
                  <div><dt>Stack</dt><dd>{project.stack.join(" · ")}</dd></div>
                  <div><dt>Result</dt><dd>{project.outcome}</dd></div>
                </dl>
                <div className="project-links">
                  <a className="text-link" href={project.href} target="_blank" rel="noreferrer">
                    View repository <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section experience-section" id="experience">
        <div className="section-heading compact">
          <div className="section-label"><span>03</span><p>Trajectory</p></div>
          <h2>Learning by building real systems.</h2>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article key={`${item.years}-${item.role}`}>
              <p className="timeline-years">{item.years}</p>
              <div><h3>{item.role}</h3><p className="company">{item.company}</p></div>
              <p className="timeline-copy">{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section skills-section" id="credentials">
        <div className="section-heading compact">
          <div className="section-label"><span>04</span><p>Proof of work</p></div>
          <h2>Recognition backed by continuous learning.</h2>
        </div>
        <div className="credential-grid">
          {credentials.map((item, index) => (
            <article key={item.title}>
              <span>0{index + 1} · {item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
        <div className="section-heading compact toolkit-heading">
          <div className="section-label"><span>05</span><p>Technical toolkit</p></div>
          <h2>Tools for intelligent, connected hardware.</h2>
        </div>
        <div className="skills-grid">
          {skills.map(([category, detail], index) => (
            <article key={category}><span>0{index + 1}</span><h3>{category}</h3><p>{detail}</p></article>
          ))}
        </div>
      </section>

      <section className="profile-section">
        <div className="profile-photo-wrap">
          <img src="/rama-profile.jpeg" alt="Rama Rizky Belrouzy Habir" />
        </div>
        <div className="profile-copy">
          <p className="eyebrow">Beyond the workbench</p>
          <h2>Curious enough to open the box.</h2>
          <p>
            I&apos;m motivated by systems that look simple from the outside but
            demand careful thinking underneath—from a UART frame to a robot
            interpreting its environment.
          </p>
          <a className="text-link" href={links.linkedin} target="_blank" rel="noreferrer">
            Connect on LinkedIn <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-glow" />
        <p className="eyebrow"><span className="status-dot" /> Open to robotics &amp; telecom opportunities</p>
        <h2>Let&apos;s build systems that move and communicate.</h2>
        <p>Internships, research, engineering collaborations, and ambitious embedded projects are welcome.</p>
        <a className="button button-light" href={links.email}>
          rizkyhabir88@gmail.com <span aria-hidden="true">↗</span>
        </a>
      </section>

      <footer>
        <a className="brand" href="#top"><span className="brand-mark">RB</span><span>Rama Habir</span></a>
        <p>Robotics · Embedded Systems · Telecommunications</p>
        <div className="social-links">
          <a href={links.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={links.email}>Email</a>
        </div>
      </footer>
    </main>
  );
}
