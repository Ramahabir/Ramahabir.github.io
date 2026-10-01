"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const links = {
  github: "https://github.com/Ramahabir",
  linkedin: "https://www.linkedin.com/in/rama-rizky-belrouzy-habir-a354b9185/",
  email: "mailto:rizkyhabir88@gmail.com",
  cv: "/CV-Rama-Rizky-Belrouzy-Habir.pdf",
};

interface ProjectSpec {
  controller: string;
  interface: string;
  actuators: string;
  hardware: string;
  firmware: string;
  status: string;
}

interface Project {
  number: string;
  category: string;
  title: string;
  impactBadge: string;
  summary: string;
  role: string;
  contribution: string;
  stack: string[];
  specs: ProjectSpec;
  outcome: string;
  highlights: string[];
  href: string;
  liveUrl?: string;
  images: string[];
  featured?: boolean;
}

const projects: Project[] = [
  {
    number: "01",
    category: "Robotics & Kinematics",
    title: "5-DOF Robotic Arm (Dynamixel)",
    impactBadge: "1 Mbps Real-Time Bus · Sub-Millisecond Multi-Joint Kinematics",
    summary:
      "An articulated robotic manipulator controlled by an STM32F411 microcontroller. Combines high-speed half-duplex UART communication with Dynamixel AX-series smart actuators, custom KiCad controller hardware, and forward/inverse kinematics for coordinated multi-axis manipulation.",
    role: "Lead Firmware & Controls Developer",
    contribution:
      "Personally engineered the custom half-duplex UART serial bus driver with 74LS241 tri-state logic, derived forward/inverse kinematics equations in C/C++, and built the interactive WebGL 3D simulator.",
    stack: ["STM32F411", "C / C++", "Dynamixel", "Half-Duplex UART", "KiCad", "FreeRTOS"],
    specs: {
      controller: "STM32F411 (ARM Cortex-M4 @ 100MHz)",
      interface: "1 Mbps Half-Duplex UART (74LS241 Buffer)",
      actuators: "Dynamixel AX-Series Smart Actuators",
      hardware: "Custom 2-Layer KiCad Board (12V/5V Isolated Rails)",
      firmware: "C/C++, FreeRTOS, Protocol 1.0 Packet CRC",
      status: "Closed-loop multi-joint position & torque validated",
    },
    outcome:
      "Closed-loop multi-joint position & torque control over a 1 Mbps half-duplex bus with sub-millisecond control latency.",
    highlights: [
      "High-Speed Bus Driver: Engineered custom half-duplex serial driver with 74LS241 tri-state buffer, sustaining error-free 1 Mbps Dynamixel Protocol 1.0 packet transactions.",
      "Custom Controller Hardware: Designed 2-layer KiCad control PCB with dedicated 12V/5V power rails, logic-level isolation, and real-time current telemetry.",
      "Closed-Loop Kinematics: Formulated forward & inverse kinematics with status-return error trapping and packet checksum verification for synchronized 5-joint trajectory tracking.",
    ],
    href: "https://github.com/Ramahabir/6-DOF-Robotics-Arm-Dynamixel",
    liveUrl: "/6dof-simulator/index.html",
    images: [
      "/projects/robot-arm-1.png",
      "/projects/robot-arm-2.png",
      "/projects/robot-arm-3.png",
      "/projects/robot-arm-4.png",
    ],
    featured: true,
  },
  {
    number: "02",
    category: "Autonomous Robotics",
    title: "KRSRI Firefighting Autonomous Robot",
    impactBadge: "Sub-Millisecond Control Loop · Real-Time Obstacle Avoidance",
    summary:
      "Microcontroller firmware routines, maze navigation algorithms, and sensor timing developed for the Indonesian Fire-Fighting Robot Contest (Kontes Robot SAR Indonesia - KRSRI). Engineered for sub-millisecond reaction speeds, flame localization, and autonomous arena navigation.",
    role: "KRSRI Software & Robotics Engineer",
    contribution:
      "Programmed microcontroller navigation logic for real-time maze traversal, calibrated closed-loop actuator control loops, and integrated optical flame sensor arrays with ultrasonic telemetry.",
    stack: ["STM32", "C++", "Closed-Loop PID", "Ultrasonic & Flame Sensing", "Hardware-in-the-Loop"],
    specs: {
      controller: "ARM Cortex-M / STM32 Architecture",
      interface: "High-Speed SPI & Sensor ADC Bus",
      actuators: "Precision Geared DC Actuators with Optical Encoders",
      hardware: "Custom SAR Arena Modular Chassis & Sensor Rig",
      firmware: "Deterministic C++ State Machine & Sub-ms Scheduling",
      status: "Evaluated in full-arena physical competition runs",
    },
    outcome:
      "Deterministic autonomous obstacle avoidance and flame detection under competition arena constraints.",
    highlights: [
      "Autonomous Maze Navigation: Developed deterministic wall-following and grid mapping state machines to navigate unstructured arena pathways.",
      "High-Speed Sensor Processing: Tuned ADC sampling filters and interrupt-driven timing loops for rapid obstacle detection and flame verification.",
      "Rigorous Field Validation: Executed extensive arena trials, hardware-in-the-loop debugging, and physical stress testing.",
    ],
    href: "https://github.com/Ramahabir",
    images: [
      "/activities/sertifikat-krsri-hme.png",
      "/activities/brawijaya-ee-cohort-full.jpg",
    ],
    featured: true,
  },
  {
    number: "03",
    category: "Assistive Tech & Embedded",
    title: "LA-Braille: Refreshable Braille Display",
    impactBadge: "~80% Unit Cost Reduction · 0 mW Static Hold Power · User-Validated",
    summary:
      "Directed the development of LA-Braille as Team Lead for PKM-KI at Universitas Brawijaya—an affordable electromechanical refreshable braille display engineered to bridge the literacy access gap for visually impaired individuals in Indonesia.",
    role: "Team Lead & Embedded Hardware Engineer (PKM-KI)",
    contribution:
      "Conceptualized the 0 mW zero-power mechanical latching cam mechanism, routed the custom DMOS H-bridge switching PCB in KiCad, and organized user validation trials with visually impaired students at UB.",
    stack: [
      "Raspberry Pi",
      "KiCad",
      "Toshiba DMOS Drivers",
      "74HC238D",
      "Python",
      "Tesseract OCR",
      "3D Printing",
    ],
    specs: {
      controller: "Raspberry Pi SBC + Embedded Python Engine",
      interface: "DMOS High/Low-Side Driver Matrix + 74HC238D Decoders",
      actuators: "Custom 3D-Printed Micro-Cams + 1×0.5mm NdFeB Magnets",
      hardware: "Low-Loss Custom KiCad Switching PCB",
      firmware: "Zero-Power Mechanical Latching State Machine",
      status: "Validated in user trials with visually impaired students at UB",
    },
    outcome:
      "Slashed hardware unit cost by ~80% vs. commercial piezoelectric displays with 0 mW static hold power.",
    highlights: [
      "Zero-Static-Power Cam Actuators: Replaced expensive piezoelectric modules (~$2,000+) with custom 3D-printed rotary-to-linear cams and 1 × 0.5 mm NdFeB micro-magnets that lock pins mechanically with 0 mW idle draw.",
      "Custom Driver Electronics: Designed H-bridge driving board in KiCad using Toshiba TBD62783/TBD62083 DMOS FET arrays and 74HC238D decoders for low-loss multiplexed pin actuation.",
      "Accessible Pipeline & LMS: Implemented automated PDF-to-Braille conversion (Tesseract OCR, OpenCV) and screen-reader compatibility.",
      "User Trial Validation: Benchmarked tactile dot height, read speeds, and mechanical endurance directly with visually impaired students at Universitas Brawijaya.",
    ],
    href: "https://github.com/Ramahabir",
    images: [
      "/projects/la-braille-cad-concept.png",
      "/projects/la-braille-pcb-layout.png",
      "/projects/la-braille-schematic-driver.png",
      "/projects/la-braille-system-architecture.png",
    ],
  },
  {
    number: "04",
    category: "Smart Agriculture & IoT",
    title: "AgriNode: Off-Grid Telemetry System",
    impactBadge: "24/7 Multi-Node Telemetry · Off-Grid Solar Regulation · Live Platform",
    summary:
      "A modular IoT telemetry system engineered for greenhouse environmental monitoring—solving the challenge of microclimate variance across crop beds without costly trenching. Pairs modular sensing nodes with ESP32 controllers and cloud analytics.",
    role: "Lead Embedded & IoT Systems Engineer",
    contribution:
      "Architected the ESP32 wireless sensor telemetry pipeline, designed the 2-layer solar/battery power management PCB in KiCad (TP4056/XL6009), and developed the live public web dashboard.",
    stack: [
      "ESP32",
      "KiCad (Schematic & PCB)",
      "Soil Moisture Sensing",
      "DHT22 Array",
      "TP4056 & XL6009 Power Mgmt",
      "Node.js",
    ],
    specs: {
      controller: "ESP32 Dual-Core Tensilica Xtensa LX6",
      interface: "Two-Tier Node-to-Gateway RF / Wi-Fi Telemetry",
      actuators: "Capacitive Soil Moisture Probes + DHT22 Microclimate Array",
      hardware: "Custom 2-Layer KiCad PCB with TP4056 & XL6009 Boost",
      firmware: "Low-Power FreeRTOS Routine, MQTT/REST Payload Ingestion",
      status: "Continuous 24/7 cloud telemetry streaming to live web platform",
    },
    outcome:
      "Autonomous off-grid multi-node telemetry network streaming continuous 24/7 soil moisture & microclimate analytics to an online dashboard.",
    highlights: [
      "Modular Sensor Nodes: Engineered plug-and-play ESP32 node modules interfacing with capacitive soil moisture sensors and DHT22 digital probes.",
      "Two-Tier Wireless Architecture: Implemented reliable node-to-gateway telemetry where distributed field nodes transmit packets wirelessly to a central edge gateway.",
      "Autonomous Power Management: Designed custom 2-layer KiCad PCBs with onboard TP4056 lithium charging and XL6009 boost regulation for uninterrupted solar operation.",
    ],
    href: "https://github.com/Ramahabir/IoT-Hardy",
    images: [
      "/projects/hardy-iot-pcb-isometric.png",
      "/projects/hardy-iot-schematic.png",
      "/projects/hardy-iot-pcb-3d.png",
    ],
  },
  {
    number: "05",
    category: "Embedded Hardware",
    title: "Embedded Controller Hardware & PCBs",
    impactBadge: "High-Speed Bus Integrity · Isolated Power Rails · KiCad DFM",
    summary:
      "Custom multi-layer PCB design for mechatronic control and IoT telemetry. Engineered with dedicated 12V/5V/3.3V power rails, logic-level isolation, high-speed half-duplex UART routing, and transient protection.",
    role: "Hardware & PCB Designer",
    contribution:
      "Authored schematics, simulated power tree constraints, routed impedance-controlled traces in KiCad, and assembled surface-mount hardware on the test bench.",
    stack: ["KiCad", "PCB Layout", "Power Integrity", "Signal Integrity", "DFM", "SMD Soldering"],
    specs: {
      controller: "STM32 & ESP32 Carrier Boards",
      interface: "Controlled-Impedance Serial & Differential Signals",
      actuators: "Smart Actuator Bus Headers & Sensor Ports",
      hardware: "2-Layer & 4-Layer FR4 Boards, 1oz Copper, ENIG / HASL",
      firmware: "Hardware Diagnostic & Test Bench Firmware",
      status: "Fabricated, bench-tested, and actively deployed",
    },
    outcome:
      "Reliable, noise-immune controller boards deployed across robotic arm and IoT telemetry prototypes.",
    highlights: [
      "Power Plane Isolation: Isolated sensitive microcontroller analog rails from high-current actuator return currents to prevent brownouts.",
      "Bus Integrity: Optimized track lengths and termination resistors for reliable 1 Mbps communication across extended wire harnesses.",
      "Bench Verification: Tested with digital storage oscilloscopes and logic analyzers for ripple suppression and signal rise times.",
    ],
    href: "https://github.com/Ramahabir",
    images: [
      "/projects/hardy-iot-pcb-3d.png",
      "/projects/la-braille-pcb-layout.png",
      "/projects/hardy-iot-schematic.png",
    ],
  },
];

interface TimelineItem {
  period: string;
  role: string;
  organization: string;
  type: string;
  location: string;
  description: string;
  points: string[];
}

const experience: TimelineItem[] = [
  {
    period: "2025 — PRESENT · MALANG, INDONESIA",
    role: "KRSRI Software Engineer",
    organization: "Brawijaya Robotics Team",
    type: "Autonomous Robotics Division · Indonesian Fire-Fighting Robot Contest (KRSRI)",
    location: "Malang, Indonesia",
    description:
      "Developing software, firmware routines, and motor drive algorithms for the Indonesian Fire-Fighting Robot Contest (Kontes Robot SAR Indonesia - KRSRI).",
    points: [
      "Programming microcontroller logic for autonomous maze navigation, flame detection, and obstacle avoidance.",
      "Calibrating actuator control loops and sensor timing for sub-millisecond reaction speeds.",
      "Conducting extensive arena testing, hardware-in-the-loop debugging, and field readiness evaluations.",
    ],
  },
  {
    period: "2025 — 2026 · MALANG, INDONESIA",
    role: "Team Lead & Embedded Hardware Engineer",
    organization: "PKM-KI LA-Braille Team",
    type: "National Student Creativity Program for Innovative Technology (Universitas Brawijaya)",
    location: "Malang, Indonesia",
    description:
      "Directed the engineering of an affordable electromechanical refreshable braille display using novel zero-power latching mechanisms.",
    points: [
      "Conceptualized 0 mW zero-power mechanical latching cam mechanism with NdFeB micro-magnets.",
      "Routed custom DMOS H-bridge switching PCB in KiCad with Toshiba driver matrices and 74HC238D decoders.",
      "Integrated OCR text-processing pipeline and executed user validation trials with visually impaired students.",
    ],
  },
  {
    period: "2023 — PRESENT · MALANG, INDONESIA",
    role: "Electrical Engineering Scholar & Peer Tutor",
    organization: "Universitas Brawijaya",
    type: "Undergraduate Program (GPA 3.35 / 4.00)",
    location: "Malang, Indonesia",
    description:
      "Pursuing a degree in Electrical Engineering with an academic concentration on telecommunications, embedded microcontroller systems, signal processing, and control engineering.",
    points: [
      "Hands-on lab work: analog & digital circuits, microprocessors (STM32 / 8051), and signal analysis.",
      "Selected as Academic Peer Tutor for university remedial physics and circuit analysis program (PKRb).",
      "Key coursework: Microprocessors & Microcontrollers, Telecommunications, Control Engineering, Signals & Systems.",
    ],
  },
  {
    period: "2025 · MALANG, INDONESIA",
    role: "IoT & Renewable Energy Instructor",
    organization: "Pengabdian Kepada Masyarakat (PKM) Quantum",
    type: "STEM Outreach & Sustainable Technology",
    location: "Malang, Indonesia",
    description:
      "Led educational sessions for senior high school students introducing IoT concepts, sensor hardware, and embedded programming.",
    points: [
      "Demonstrated IoT hardware architectures, sensor data acquisition, and real-time cloud streaming.",
      "Integrated IoT monitoring with renewable energy systems to showcase smart sustainable technology.",
      "Guided hands-on programming exercises to foster technical curiosity in young engineers.",
    ],
  },
];

interface Credential {
  year: string;
  title: string;
  issuer: string;
  detail: string;
  badge: string;
  image: string;
  href?: string;
}

const credentials: Credential[] = [
  {
    year: "2025",
    title: "Scientific Design Competition — 1st Place (Gold Medal)",
    issuer: "Online Asian Agrocomplex Student Competition (OAASC)",
    detail:
      "Designed and defended an advanced engineering technology concept evaluated by an international academic jury, securing the 1st Place Gold Medal.",
    badge: "1st Place Gold Medal",
    image: "/activities/sertif-oaasc.jpg",
  },
  {
    year: "2026",
    title: "Gemini Certified University Student",
    issuer: "Google for Education",
    detail:
      "Demonstrated foundational knowledge and practical competence in generative AI, prompt engineering, and technical workflows. Valid 2026 — 2029.",
    badge: "Google Certified",
    image: "/activities/google-gemini-certified.png",
    href: "https://edu.google.accredible.com/b816db6c-c9ea-477a-8a01-83f4f04bd14c#acc.niwKq5Nt",
  },
  {
    year: "2025",
    title: "Azure AI Fundamentals (AI-900)",
    issuer: "Microsoft & elevAIte",
    detail:
      "Certified preparation covering machine learning workloads, computer vision, natural language processing, and conversational AI on Microsoft Azure.",
    badge: "Microsoft Certified",
    image: "/activities/certificate-azure-ai900.png",
  },
  {
    year: "2025",
    title: "Indonesian Fire-Fighting Robot Contest (KRSRI)",
    issuer: "Brawijaya Robotics Team & Kemendikbudristek",
    detail:
      "Recognized for firmware development, sensor timing calibration, and deterministic maze navigation algorithms in the national autonomous robotics contest.",
    badge: "Robotics Division",
    image: "/activities/sertifikat-krsri-hme.png",
  },
  {
    year: "2026",
    title: "PRIME Business Case Competition",
    issuer: "Petroleum Research & Innovation to Magnify Engineers",
    detail:
      "Semifinalist — Formulated comprehensive technical solutions, risk analysis, and implementation strategies for complex engineering scenarios.",
    badge: "Semifinalist",
    image: "/activities/certificate-prime.png",
  },
  {
    year: "2026",
    title: "2nd International Student Summit (ISS) Poster Finalist",
    issuer: "Sentosa Foundation & INSAN, USIM, WAYS (Malaysia)",
    detail:
      "Selected as finalist representing international academic engineering collaboration and technological innovation across Indonesia and Malaysia.",
    badge: "International Finalist",
    image: "/activities/sertif-iss.png",
  },
  {
    year: "2026",
    title: "MATLAB Onramp",
    issuer: "MathWorks",
    detail:
      "Certified training covering numerical computation, data visualization, dynamic matrix modeling, and algorithmic problem solving.",
    badge: "MathWorks Certified",
    image: "/activities/certificate-matlab.png",
  },
  {
    year: "2026",
    title: "Simulink Onramp",
    issuer: "MathWorks",
    detail:
      "Certified training covering graphical dynamic modeling, feedback control loops, sensor simulation, and Simulink state machines.",
    badge: "MathWorks Certified",
    image: "/activities/certificate-simulink.png",
  },
  {
    year: "2026",
    title: "Matlab Course for Wireless Communication Engineering",
    issuer: "Udemy (Dr. Khaled Ramadan)",
    detail:
      "Certified coursework in wireless communication simulation, digital signal processing, channel modeling, and RF communication design.",
    badge: "Certified",
    image: "/activities/certificate-matlab-wireless.png",
    href: "https://ude.my/UC-ad999357-423c-4018-8669-e7cecdea4f48",
  },
  {
    year: "2025",
    title: "Getting Started with Azure Cloud",
    issuer: "Udemy (Houssem Dellai)",
    detail:
      "Completed 7.5 hours of foundational cloud computing training covering Azure infrastructure, virtual machines, resource groups, storage, and networking.",
    badge: "Certified",
    image: "/activities/certificate-azure.jpg",
    href: "https://ude.my/UC-7e3504fc-0b55-4fe6-bdd7-d00fe42bef61",
  },
  {
    year: "2025",
    title: "Environmental Sustainability",
    issuer: "Universitas Brawijaya",
    detail:
      "Completed certified institutional coursework covering environmental sustainability, renewable resources, and ecological impact.",
    badge: "Academic Certified",
    image: "/activities/sertif-env-sustain.png",
  },
  {
    year: "2024",
    title: "Fundamental Python & Data Analysis",
    issuer: "Coding Studio Digital Skill Course",
    detail:
      "Certified mastery of foundational Python scripting, algorithmic problem solving, and professional data analysis in spreadsheet environments.",
    badge: "Certified",
    image: "/activities/sertif-python.png",
  },
  {
    year: "2023",
    title: "Physics Peer Tutor (PKRb)",
    issuer: "MAN Insan Cendekia Gorontalo",
    detail:
      "Selected as instructor to mentor students in foundational physics, kinematics, circuit fundamentals, and analytical problem solving.",
    badge: "Academic Honor",
    image: "/activities/sertif-tutor.png",
  },
  {
    year: "2022 — 2023",
    title: "Secretary I, Student Council (OSIS)",
    issuer: "MAN Insan Cendekia Gorontalo",
    detail:
      "Headed executive administrative operations, official correspondence, and inter-organizational documentation for regional student initiatives.",
    badge: "Leadership Honor",
    image: "/activities/sertif-sekre-osis.jpg",
  },
];

export default function Portfolio() {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [activeModalCert, setActiveModalCert] = useState<Credential | null>(null);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactSubmitting, setContactSubmitting] = useState(false);

  // Scroll reveal observer
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Glowing vertical timeline scroll progress tracker
  useEffect(() => {
    const timeline = document.querySelector(".timeline") as HTMLElement | null;
    if (!timeline) return;
    const timelineProgress = timeline.querySelector(".timeline-progress") as HTMLElement | null;
    const timelineItems = Array.from(timeline.querySelectorAll(".timeline-item")) as HTMLElement[];
    if (!timelineProgress || timelineItems.length === 0) return;

    let timelineFrame: number | null = null;
    let timelineTop = 0;
    let timelineHeight = 1;
    let timelineItemTops: number[] = [];
    let timelineProgressValue = -1;
    const timelineItemStates = timelineItems.map(() => false);

    function updateTimeline() {
      timelineFrame = null;
      const trigger = window.scrollY + window.innerHeight * 0.64;
      const travel = Math.max(timelineHeight - window.innerHeight * 0.28, 1);
      const progress = Math.max(0, Math.min(1, (trigger - timelineTop) / travel));
      const nextProgressValue = Math.round(progress * 1000) / 1000;
      if (nextProgressValue !== timelineProgressValue && timelineProgress) {
        timelineProgressValue = nextProgressValue;
        timelineProgress.style.transform = `scaleY(${nextProgressValue})`;
      }

      timelineItems.forEach((item, index) => {
        const active = timelineItemTops[index] < trigger || (index === 0 && progress > 0);
        if (timelineItemStates[index] === active) return;
        timelineItemStates[index] = active;
        item.classList.toggle("active", active);
      });
    }

    function measureTimeline() {
      const scrollTop = window.scrollY;
      const rect = timeline!.getBoundingClientRect();
      timelineTop = rect.top + scrollTop;
      timelineHeight = rect.height;
      timelineItemTops = timelineItems.map((item) => item.getBoundingClientRect().top + scrollTop);
      if (timelineFrame === null) {
        timelineFrame = requestAnimationFrame(updateTimeline);
      }
    }

    function requestTimelineUpdate() {
      if (timelineFrame !== null) return;
      timelineFrame = requestAnimationFrame(updateTimeline);
    }

    window.addEventListener("scroll", requestTimelineUpdate, { passive: true });
    window.addEventListener("resize", measureTimeline, { passive: true });
    measureTimeline();

    return () => {
      window.removeEventListener("scroll", requestTimelineUpdate);
      window.removeEventListener("resize", measureTimeline);
      if (timelineFrame !== null) cancelAnimationFrame(timelineFrame);
    };
  }, []);

  // Close modal on Escape
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setActiveModalProject(null);
        setActiveModalCert(null);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* Background Ambience */}
      <div className="liquidglass-scene" aria-hidden="true" />

      {/* Floating Pill Navigation */}
      <div className="nav-wrap">
        <nav className="nav" aria-label="Main navigation">
          <div className="nav-links">
            <a className="nav-link" href="#work">Projects</a>
            <a className="nav-link" href="#profile">About</a>
            <a className="nav-link" href="#timeline">Experience</a>
            <a className="nav-link" href="#credentials">Honors</a>
            <a className="nav-link" href="#contact">Contact</a>
          </div>
        </nav>
      </div>

      <main id="top">
        {/* Hero Section */}
        <header className="hero">
          {/* Ambient Hero Art Assets */}
          <div
            className="hero-art hero-pcb-detail"
            style={{ backgroundImage: `url('/projects/hardy-iot-pcb-isometric.png')` }}
            aria-hidden="true"
          />

          <div className="hero-art hero-cad" aria-hidden="true">
            <svg className="blueprint-overlay" viewBox="0 0 100 75" preserveAspectRatio="none">
              <g className="blueprint-annotation">
                <text x="5" y="8">5-DOF Kinematic Chain</text>
                <path d="M 28 7 L 38 7 L 48 14" />
                <circle cx="48" cy="14" r="0.6" />
              </g>
              <g className="blueprint-annotation">
                <text x="4" y="24">Dynamixel AX-12A</text>
                <path d="M 25 23 L 34 23 L 42 31" />
                <circle cx="42" cy="31" r="0.6" />
              </g>
              <g className="blueprint-annotation">
                <text x="96" y="16" textAnchor="end">1 Mbps UART Bus</text>
                <path d="M 76 15 L 68 15 L 58 22" />
                <circle cx="58" cy="22" r="0.6" />
              </g>
              <g className="blueprint-annotation">
                <text x="6" y="55">STM32F411 Controller</text>
                <path d="M 30 54 L 38 54 L 46 47" />
                <circle cx="46" cy="47" r="0.6" />
              </g>
            </svg>
          </div>

          <div className="hero-art hero-code" aria-hidden="true">
            <pre>{`// STM32F411 Dynamixel Half-Duplex Driver
void DXL_TransmitPacket(uint8_t id, uint8_t inst, uint8_t *params, uint16_t len) {
  uint8_t packet[64] = {0xFF, 0xFF, id, len + 2, inst};
  memcpy(&packet[5], params, len);
  packet[5 + len] = compute_crc(packet, 5 + len);
  
  // Tri-state 74LS241 buffer to TX mode
  HAL_GPIO_WritePin(DIR_GPIO_Port, DIR_Pin, GPIO_PIN_SET);
  HAL_UART_Transmit_DMA(&huart1, packet, 6 + len);
  // Revert to RX on DMA complete interrupt
}`}</pre>
          </div>

          <div className="shell">
            <div className="hero-inner">
              <div className="hero-hello">Hi, I’m</div>
              <h1>
                <span className="hero-given-name">Rama</span>{" "}
                <span className="hero-family-name">Habir</span>
              </h1>
              <div className="location-pill">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.7" />
                  <path
                    d="M3.5 12h17M12 3c2.2 2.5 3.3 5.5 3.3 9S14.2 18.5 12 21M12 3C9.8 5.5 8.7 8.5 8.7 12S9.8 18.5 12 21"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.35"
                    strokeLinecap="round"
                  />
                </svg>
                Malang → Surabaya, Indonesia
              </div>
              <p className="hero-copy">
                Electrical Engineering student at Universitas Brawijaya and KRSRI Robotics Engineer. I design embedded
                firmware, high-speed PCBs, and mechatronic systems built to operate reliably in real-world environments.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#work">
                  Projects ↓
                </a>
                <a className="button" href="#profile">
                  About me
                </a>
                <a className="button" href="#contact">
                  Let’s talk ↗
                </a>
              </div>
              <div className="social-dock" aria-label="Social links">
                <a className="social-icon" href={links.email} aria-label="Email Rama">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m4 7 8 6 8-6" />
                  </svg>
                </a>
                <a
                  className="social-icon"
                  href={links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Rama on LinkedIn"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M5.3 3.6A2.3 2.3 0 1 1 5.3 8.2a2.3 2.3 0 0 1 0-4.6ZM3.4 9.8h3.8V21H3.4V9.8Zm6.2 0h3.6v1.5h.1c.5-.9 1.7-1.9 3.5-1.9 3.8 0 4.5 2.5 4.5 5.7V21h-3.8v-5.2c0-1.2 0-2.9-1.8-2.9s-2 1.4-2 2.8V21H9.6V9.8Z" />
                  </svg>
                </a>
                <a
                  className="social-icon"
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Rama on GitHub"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.4a9.8 9.8 0 0 0-3.1 19.1c.5.1.7-.2.7-.5v-1.9c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 0 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 2.9.9.1-.7.4-1.1.7-1.4-2.3-.3-4.6-1.1-4.6-4.9 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 4.9 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.8-2.3 4.6-4.6 4.9.4.3.7 1 .7 1.9V21c0 .3.2.6.7.5A9.8 9.8 0 0 0 12 2.4Z" />
                  </svg>
                </a>
              </div>
              <a
                className="resume-link"
                href={links.cv}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Download CV / Resume (PDF)</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </header>

        {/* Capabilities Ribbon */}
        <div className="capabilities" aria-label="Core engineering capabilities">
          <div className="shell capability-grid">
            <div className="capability">
              <strong>Electronics &amp; Embedded Systems</strong>
              <span>PCB design · KiCad · STM32/ESP32 · Power electronics · 1 Mbps half-duplex UART bus</span>
            </div>
            <div className="capability">
              <strong>Robotics &amp; Autonomy</strong>
              <span>KRSRI autonomous navigation · 5-DOF kinematics · Dynamixel actuators · Sensor fusion · PID loops</span>
            </div>
            <div className="capability">
              <strong>Mechanical Design &amp; Prototyping</strong>
              <span>CAD · 3D printing &amp; rapid fabrication · Zero-power cam actuators · Electromechanical integration</span>
            </div>
            <div className="capability">
              <strong>IoT Telemetry &amp; Systems</strong>
              <span>ESP-NOW · MQTT &amp; WebSockets · Low-power FreeRTOS · Solar power regulation · Telemetry dashboards</span>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <section id="work">
          <div className="shell">
            <div className="section-head reveal">
              <div>
                <div className="section-kicker">SELECTED PORTFOLIO</div>
                <h2>Projects</h2>
              </div>
            </div>

            <div className="project-grid">
              {projects.map((project, idx) => {
                const isFeatured = idx < 2;
                return (
                  <article
                    key={project.number}
                    className={`project ${isFeatured ? "featured" : "narrow"} reveal`}
                    onClick={() => setActiveModalProject(project)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActiveModalProject(project);
                      }
                    }}
                    aria-label={`View details for ${project.title}`}
                  >
                    <span className="case-study-cta">View details</span>
                    <div className="project-media">
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="project-body">
                      <div className="project-kicker">
                        <span>{project.category}</span>
                        <span>{project.number} ↗</span>
                      </div>
                      <h3>{project.title}</h3>
                      <p>{project.summary}</p>
                      <div className="project-tags">
                        {project.stack.slice(0, 4).map((tech) => (
                          <span key={tech} className="tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <nav className="project-archive-links reveal" aria-label="More engineering repositories">
              <span>More project code:</span>
              <a
                href="https://github.com/Ramahabir/6-DOF-Robotics-Arm-Dynamixel"
                target="_blank"
                rel="noopener noreferrer"
              >
                6-DOF Robotic Arm GitHub
              </a>
              <a
                href="https://github.com/Ramahabir/IoT-Hardy"
                target="_blank"
                rel="noopener noreferrer"
              >
                AgriNode IoT Gateway GitHub
              </a>
              <a
                href="/6dof-simulator/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                3D Kinematics Web Simulator
              </a>
            </nav>
          </div>
        </section>

        {/* Profile / About Section */}
        <section id="profile">
          <div className="shell profile-grid">
            <div className="profile-sticky reveal">
              <div className="section-kicker">BIOGRAPHY &amp; VISION</div>
              <h2>About Rama Habir</h2>
              <div className="profile-visual">
                <img
                  src="/rama-profile.jpg"
                  alt="Portrait of Rama Habir"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <div className="profile-story">
              <p className="profile-copy reveal">
                Robotics is where physical mechanics, silicon hardware, and low-level code unite into one real system.
              </p>
              <p className="reveal">
                I am an Electrical Engineering student at Universitas Brawijaya with a focus on telecommunications,
                embedded microcontrollers, and autonomous robotics. As a software and controls engineer for the Brawijaya
                Robotics Team (KRSRI), I specialize in building deterministic, low-latency firmware and custom hardware
                designed to withstand real-world physical demands.
              </p>
              <p className="reveal">
                My engineering philosophy centers on end-to-end ownership: from drafting schematics and routing
                multi-layer PCBs in KiCad to writing bare-metal C drivers, optimizing FreeRTOS tasks, and deriving
                kinematic equations. I bridge the boundary between physical actuators and digital intelligence.
              </p>
              <p className="profile-links reveal">
                Verified profiles for Rama Habir:{" "}
                <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
                ,{" "}
                <a href={links.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                ,{" "}
                <a href={links.email}>Email</a>, and{" "}
                <a href="https://ub.ac.id" target="_blank" rel="noopener noreferrer">
                  Universitas Brawijaya
                </a>
                .
              </p>
              <div className="education-card reveal">
                <div className="education-label">Undergraduate Studies · Malang, Indonesia</div>
                <h3>Universitas Brawijaya</h3>
                <p className="education-detail">B.Eng. in Electrical Engineering · GPA: 3.35 / 4.00 · Expected 2026</p>
                <p className="education-note">
                  Concentration on microprocessors &amp; microcontrollers, telecommunication systems, control
                  engineering, and robotics. Selected as Academic Peer Tutor for university remedial physics and
                  circuit fundamentals.
                </p>
              </div>
              <div className="facts reveal">
                <div className="fact">
                  <strong>Cross-Disciplinary</strong>
                  <small>Firmware, PCBs, Mechatronics</small>
                </div>
                <div className="fact">
                  <strong>KRSRI Robotics</strong>
                  <small>Brawijaya Robotics Team Engineer</small>
                </div>
                <div className="fact">
                  <strong>Proven Track Record</strong>
                  <small>1st Place Gold Medalist OAASC</small>
                </div>
                <div className="fact">
                  <strong>End-to-End Ownership</strong>
                  <small>Schematic to Bare-Metal C</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section id="timeline">
          <div className="shell profile-grid">
            <div className="profile-sticky reveal">
              <div className="section-kicker">CAREER TRACK</div>
              <h2>Experience</h2>
            </div>
            <div className="timeline">
              <div className="timeline-progress" aria-hidden="true" />
              {experience.map((item, idx) => (
                <article key={idx} className="timeline-item">
                  <div className="timeline-year">{item.period}</div>
                  <h3>
                    {item.role} · {item.organization}
                  </h3>
                  <div className="timeline-role">{item.type}</div>
                  <p className="timeline-desc">{item.description}</p>
                  <ul className="timeline-points">
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx}>{pt}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Honors & Certifications */}
        <section id="credentials">
          <div className="shell">
            <div className="section-head reveal">
              <div>
                <div className="section-kicker">AWARDS &amp; ACCREDITATION</div>
                <h2>Honors &amp; Certifications</h2>
              </div>
            </div>

            <div className="credentials-grid">
              {credentials.map((cred, idx) => (
                <article
                  key={idx}
                  className="credential-card reveal"
                  onClick={() => setActiveModalCert(cred)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveModalCert(cred);
                    }
                  }}
                  aria-label={`View ${cred.title}`}
                >
                  <div className="credential-meta">
                    <span className="credential-year">{cred.year}</span>
                    <span className="credential-badge">{cred.badge}</span>
                  </div>
                  <h3>{cred.title}</h3>
                  <div className="credential-issuer">{cred.issuer}</div>

                  {cred.image && (
                    <div className="credential-thumb" title="Click to view full certificate">
                      <img src={cred.image} alt={cred.title} loading="lazy" decoding="async" />
                    </div>
                  )}

                  <p className="credential-detail">{cred.detail}</p>
                  
                  <div style={{ marginTop: "14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ color: "var(--accent)", fontSize: "12.5px", fontFamily: "var(--mono)", cursor: "pointer" }}>
                      View Certificate ↗
                    </span>
                    {cred.href && (
                      <a
                        href={cred.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        style={{ color: "#aeb8b6", fontSize: "12px", fontFamily: "var(--mono)", textDecoration: "underline" }}
                      >
                        Verify Online
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <div className="shell">
            <div className="contact-card reveal">
              <div className="contact-intro">
                <div className="section-kicker">COLLABORATION &amp; INQUIRIES</div>
                <h2>Ready to take your project to the next level?</h2>
                <p>
                  Open to ambitious engineering projects, robotics roles, embedded firmware opportunities, and
                  conversations with teams building physical products.
                </p>
                <div className="contact-direct">
                  <a href={links.email}>Email</a>
                  <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                  <a href={links.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  <a href={links.cv} target="_blank" rel="noopener noreferrer">
                    Download CV
                  </a>
                </div>
              </div>
              <div className="contact-form-wrap">
                <form
                  className="contact-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setContactSubmitting(true);
                    const form = e.currentTarget;
                    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value || "";
                    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value || "";
                    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value || "";

                    // Trigger direct email composition
                    const mailtoUrl = `mailto:rizkyhabir88@gmail.com?subject=Inquiry%20from%20${encodeURIComponent(
                      name
                    )}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
                    window.location.href = mailtoUrl;

                    setTimeout(() => {
                      setContactSubmitting(false);
                      setContactSubmitted(true);
                    }, 600);
                  }}
                >
                  <div className="contact-form-row">
                    <label className="contact-label" htmlFor="contact-name">
                      Name
                      <input
                        className="contact-field"
                        id="contact-name"
                        type="text"
                        name="name"
                        placeholder="Your name"
                        autoComplete="name"
                        required
                        minLength={2}
                      />
                    </label>
                    <label className="contact-label" htmlFor="contact-email">
                      Email
                      <input
                        className="contact-field"
                        id="contact-email"
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        autoComplete="email"
                        required
                      />
                    </label>
                  </div>
                  <label className="contact-label" htmlFor="contact-message">
                    Message
                    <textarea
                      className="contact-field"
                      id="contact-message"
                      name="message"
                      placeholder="What would you like to build together?"
                      required
                      minLength={10}
                    />
                  </label>
                  {contactSubmitted && (
                    <p className="contact-status success" role="status">
                      Opening your mail client to send to Rama Habir. Thank you!
                    </p>
                  )}
                  <button className="contact-submit" type="submit" disabled={contactSubmitting}>
                    {contactSubmitting ? "Preparing..." : "Send message"}
                  </button>
                </form>
              </div>
            </div>

            <footer>
              <a href="#top">© 2026 Rama Habir. Built with precision.</a>
              <div style={{ display: "flex", gap: "18px" }}>
                <a href="#work">Projects</a>
                <a href="#profile">About</a>
                <a href="#timeline">Experience</a>
                <a href={links.cv} target="_blank" rel="noopener noreferrer">
                  CV (PDF)
                </a>
              </div>
            </footer>
          </div>
        </section>
      </main>

      {/* Project Details Modal */}
      {activeModalProject &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="modal-backdrop"
            onClick={() => setActiveModalProject(null)}
            role="dialog"
            aria-modal="true"
            aria-label={activeModalProject.title}
          >
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setActiveModalProject(null)}
                aria-label="Close dialog"
              >
                ✕
              </button>
              <div className="modal-header">
                <div className="modal-kicker">
                  {activeModalProject.category} · {activeModalProject.number}
                </div>
                <h2 className="modal-title">{activeModalProject.title}</h2>
              </div>

              <div className="modal-gallery">
                {activeModalProject.images.map((img, i) => (
                  <div key={i} className="modal-img-wrap">
                    <img src={img} alt={`${activeModalProject.title} preview ${i + 1}`} />
                  </div>
                ))}
              </div>

              <p style={{ color: "#d5dcda", fontSize: "16px", lineHeight: "1.65", marginBottom: "18px" }}>
                {activeModalProject.summary}
              </p>

              <div className="modal-specs-grid">
                <div className="spec-cell">
                  <strong>Controller</strong>
                  <span>{activeModalProject.specs.controller}</span>
                </div>
                <div className="spec-cell">
                  <strong>Interface Bus</strong>
                  <span>{activeModalProject.specs.interface}</span>
                </div>
                <div className="spec-cell">
                  <strong>Actuators</strong>
                  <span>{activeModalProject.specs.actuators}</span>
                </div>
                <div className="spec-cell">
                  <strong>Hardware / PCB</strong>
                  <span>{activeModalProject.specs.hardware}</span>
                </div>
                <div className="spec-cell">
                  <strong>Firmware Stack</strong>
                  <span>{activeModalProject.specs.firmware}</span>
                </div>
                <div className="spec-cell">
                  <strong>Validation Status</strong>
                  <span>{activeModalProject.specs.status}</span>
                </div>
              </div>

              <h4 style={{ color: "var(--accent)", fontSize: "14px", fontFamily: "var(--mono)", textTransform: "uppercase", marginTop: "24px" }}>
                Key Engineering Highlights
              </h4>
              <ul className="modal-highlights">
                {activeModalProject.highlights.map((hl, i) => (
                  <li key={i}>{hl}</li>
                ))}
              </ul>

              <div className="modal-actions">
                {activeModalProject.href && (
                  <a
                    className="button primary"
                    href={activeModalProject.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Source Code ↗
                  </a>
                )}
                {activeModalProject.liveUrl && (
                  <a
                    className="button"
                    href={activeModalProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Launch 3D Web Simulator ↗
                  </a>
                )}
                <button
                  type="button"
                  className="button"
                  onClick={() => setActiveModalProject(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}

      {/* Certificate Details Modal */}
      {activeModalCert &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="modal-backdrop"
            onClick={() => setActiveModalCert(null)}
            role="dialog"
            aria-modal="true"
            aria-label={activeModalCert.title}
          >
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setActiveModalCert(null)}
                aria-label="Close dialog"
              >
                ✕
              </button>
              <div className="modal-header">
                <div className="modal-kicker">
                  {activeModalCert.year} · {activeModalCert.badge}
                </div>
                <h2 className="modal-title">{activeModalCert.title}</h2>
                <div style={{ color: "#8d9794", fontSize: "15px", marginTop: "6px" }}>
                  {activeModalCert.issuer}
                </div>
              </div>

              {activeModalCert.image && (
                <img
                  src={activeModalCert.image}
                  alt={activeModalCert.title}
                  className="cert-modal-img"
                />
              )}

              <p style={{ color: "#d5dcda", fontSize: "15.5px", lineHeight: "1.65", margin: "16px 0" }}>
                {activeModalCert.detail}
              </p>

              <div className="modal-actions">
                {activeModalCert.href && (
                  <a
                    className="button primary"
                    href={activeModalCert.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Verify Credential Online ↗
                  </a>
                )}
                {activeModalCert.image && (
                  <a
                    className="button"
                    href={activeModalCert.image}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open Full Image ↗
                  </a>
                )}
                <button
                  type="button"
                  className="button"
                  onClick={() => setActiveModalCert(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
