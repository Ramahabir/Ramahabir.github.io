"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const links = {
  github: "https://github.com/Ramahabir",
  linkedin: "https://www.linkedin.com/in/rama-rizky-belrouzy-habir-a354b9185/",
  email: "mailto:rizkyhabir88@gmail.com",
};

const navItems = [
  ["About", "about"],
  ["Projects", "projects"],
  ["Arsenal", "skills"],
  ["Experience", "experience"],
  ["Credentials", "credentials"],
  ["Contact", "contact"],
] as const;

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
  stack: string[];
  specs: ProjectSpec;
  outcome: string;
  highlights: string[];
  href: string;
  liveUrl?: string;
  images?: string[];
  image?: string | string[];
  placeholderHint: string;
  recommendedFile: string;
}

const projects: Project[] = [
  {
    number: "01",
    category: "Robotics & Kinematics",
    title: "5-DOF Robotic Arm (Dynamixel)",
    impactBadge: "⚡ 1 Mbps Real-Time Bus · Sub-Millisecond Multi-Joint Kinematics",
    summary:
      "An articulated robotic manipulator controlled by an STM32F411 microcontroller. Combines high-speed half-duplex UART communication with Dynamixel AX-series smart actuators, custom KiCad controller hardware, and forward/inverse kinematics for coordinated multi-axis manipulation.",
    role: "Robotics & Firmware Engineer",
    stack: ["STM32F411", "C / C++", "Dynamixel", "Half-Duplex UART", "KiCad", "FreeRTOS"],
    specs: {
      controller: "STM32F411 (ARM Cortex-M4 @ 100MHz)",
      interface: "1 Mbps Half-Duplex UART (74LS241 Buffer)",
      actuators: "Dynamixel AX-Series Smart Actuators",
      hardware: "Custom 2-Layer KiCad Board (12V/5V Isolated Rails)",
      firmware: "C/C++, FreeRTOS, Protocol 1.0 Packet CRC",
      status: "Closed-loop multi-joint position & torque validated",
    },
    outcome: "Closed-loop multi-joint position & torque control over a 1 Mbps half-duplex bus with sub-millisecond control latency",
    highlights: [
      "High-Speed Bus Driver: Engineered custom half-duplex serial driver with 74LS241 tri-state buffer, sustaining error-free 1 Mbps Dynamixel Protocol 1.0 packet transactions.",
      "Custom Controller Hardware: Designed 2-layer KiCad control PCB with dedicated 12V/5V power rails, logic-level isolation, and real-time current telemetry.",
      "Closed-Loop Kinematics: Formulated forward & inverse kinematics with status-return error trapping and packet checksum verification for synchronized 5-joint trajectory tracking.",
    ],
    href: "https://github.com/Ramahabir/6-DOF-Robotics-Arm-Dynamixel",
    images: [
      "/projects/robot-arm-1.png",
      "/projects/robot-arm-2.png",
      "/projects/robot-arm-3.png",
      "/projects/robot-arm-4.png",
    ],
    image: "",
    placeholderHint: "Photos of 5/6-DOF arm assembly, Dynamixel actuators, or KiCad controller PCB",
    recommendedFile: "/projects/robot-arm-dynamixel.jpg",
  },
  {
    number: "02",
    category: "Assistive Tech & Embedded Systems",
    title: "LA-Braille: Refreshable Braille Display",
    impactBadge: "💡 ~80% Unit Cost Reduction · 0 mW Static Hold Power · User-Validated",
    summary:
      "As Team Lead for PKM-KI 2026 at Universitas Brawijaya, I directed the development of LA-Braille: an affordable electromechanical refreshable braille display engineered to bridge the literacy access gap for visually impaired individuals in Indonesia. The system replaces expensive conventional piezoelectric units with custom 3D-printed cam actuators and rare-earth NdFeB micro-magnets, mechanically latching braille pins with zero continuous power draw.",
    role: "Team Lead & Embedded Hardware Engineer (PKM-KI 2026)",
    stack: [
      "Raspberry Pi",
      "KiCad",
      "Toshiba TBD62783/TBD62083",
      "74HC238D",
      "Python",
      "Tesseract OCR",
      "OpenCV",
      "Flutter",
      "PostgreSQL",
      "3D Printing",
    ],
    specs: {
      controller: "Raspberry Pi SBC + Embedded Python Engine",
      interface: "DMOS High/Low-Side Driver Matrix + 74HC238D Decoders",
      actuators: "Custom 3D-Printed Micro-Cams + 1x0.5mm NdFeB Magnets",
      hardware: "Low-Loss Custom KiCad Switching PCB",
      firmware: "Zero-Power Mechanical Latching State Machine",
      status: "Validated in user trials with visually impaired students at UB",
    },
    outcome: "Slashed hardware unit cost by ~80% vs. commercial piezoelectric displays with 0 mW static hold power, validated with visually impaired students at Universitas Brawijaya",
    highlights: [
      "Zero-Static-Power Cam Actuators: Replaced expensive piezoelectric modules (~$2,000+) with custom 3D-printed rotary-to-linear cams and 1 x 0.5 mm NdFeB micro-magnets that lock pins mechanically with 0 mW idle draw.",
      "Custom Driver Electronics: Designed H-bridge driving board in KiCad using Toshiba TBD62783/TBD62083 DMOS FET arrays and 74HC238D decoders for low-loss multiplexed pin actuation.",
      "Accessible Pipeline & LMS: Implemented automated PDF-to-Braille conversion (Tesseract OCR, OpenCV) and cross-platform Flutter/PostgreSQL LMS with offline caching and screen-reader compatibility.",
      "User Trial Validation: Benchmarked tactile dot height, read speeds, and mechanical endurance directly with visually impaired students at Universitas Brawijaya.",
    ],
    href: "https://github.com/Ramahabir",
    images: [
      "/projects/la-braille-cad-concept.png",
      "/projects/la-braille-pcb-layout.png",
      "/projects/la-braille-schematic-driver.png",
      "/projects/la-braille-schematic-matrix.png",
      "/projects/la-braille-system-architecture.png",
    ],
    image: "",
    placeholderHint: "Photos of LA-Braille: 3D CAD render, driver PCB, schematics, and LMS architecture",
    recommendedFile: "/projects/la-braille-cad-concept.png",
  },
  {
    number: "03",
    category: "Smart Agriculture & IoT Systems",
    title: "AgriNode: Modular Greenhouse IoT & Telemetry System",
    impactBadge: "🌱 24/7 Multi-Node Telemetry · Off-Grid Solar Regulation · Live Web Platform",
    summary:
      "A modular IoT telemetry system engineered for greenhouse environmental monitoring, solving the challenge of microclimate variance across crop beds without costly trenching. The architecture pairs modular soil/climate sensing nodes with ESP32 microcontrollers; decentralized field nodes transmit telemetry wirelessly to a central gateway that streams real-time payloads to the cloud server and live web dashboard.",
    role: "IoT Systems & Embedded Hardware Engineer",
    stack: [
      "ESP32",
      "KiCad (Schematic & PCB)",
      "Soil Moisture Sensing",
      "DHT22 (Temp & Humidity)",
      "TP4056 & XL6009 Power Mgmt",
      "Wireless Telemetry",
      "Node.js",
      "Chart.js",
      "Smart Agriculture",
    ],
    specs: {
      controller: "ESP32 Dual-Core Tensilica Xtensa LX6",
      interface: "Two-Tier Node-to-Gateway RF / Wi-Fi Telemetry",
      actuators: "Capacitive Soil Moisture Probes + DHT22 Microclimate Array",
      hardware: "Custom 2-Layer KiCad PCB with TP4056 & XL6009 Boost",
      firmware: "Low-Power FreeRTOS Routine, MQTT/REST Payload Ingestion",
      status: "Continuous 24/7 cloud telemetry streaming to live web platform",
    },
    outcome: "Autonomous off-grid multi-node telemetry network streaming continuous 24/7 soil moisture & microclimate analytics to live web platform",
    highlights: [
      "Modular Sensor Nodes: Engineered plug-and-play ESP32 node modules interfacing with capacitive soil moisture sensors and DHT22 digital probes to detect localized microclimate stress across greenhouse beds.",
      "Two-Tier Wireless Architecture: Implemented reliable node-to-gateway telemetry where distributed field nodes transmit packets wirelessly to a central edge gateway, relaying to the cloud server.",
      "Autonomous Power Management: Designed custom 2-layer KiCad PCBs with onboard TP4056 lithium charging and XL6009 boost regulation for uninterrupted solar/battery off-grid greenhouse operation.",
      "Live Web Dashboard & Triggers: Connected telemetry directly to the AgriNode live web platform for real-time monitoring, 30-day analytics, and automated irrigation triggers.",
    ],
    href: "https://github.com/Ramahabir/IoT-Hardy",
    liveUrl: "https://devel-ai.ub.ac.id/agrinode/",
    images: [
      "/projects/hardy-iot-pcb-isometric.png",
      "/projects/hardy-iot-schematic.png",
      "/projects/hardy-iot-pcb-3d.png",
    ],
    image: "",
    placeholderHint: "Photos: KiCad 3D PCB render, circuit schematic, and modular ESP32 greenhouse node",
    recommendedFile: "/projects/hardy-iot-pcb-isometric.png",
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
  images?: string[];
  image?: string | string[];
  placeholderHint: string;
  recommendedFile: string;
}

const experience: Experience[] = [
  {
    period: "2025 - Present",
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
    images: ["/activities/sertifikat-krsri-hme.png"],
    image: "",
    placeholderHint: "Activity Photos: KRSRI robot chassis, test field arena, or team workshop debugging",
    recommendedFile: "/activities/sertifikat-krsri-hme.png",
  },
  {
    period: "2023 - Present",
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
    images: [
      "/activities/brawijaya-ee-cohort-1.jpg",
      "/activities/brawijaya-ee-cohort-2.jpg",
      "/activities/brawijaya-ee-cohort-3.jpg",
    ],
    image: "",
    placeholderHint: "Photos: Electrical Engineering student cohort at Universitas Brawijaya",
    recommendedFile: "/activities/brawijaya-ee-cohort-1.jpg",
  },
  {
    period: "2025",
    role: "IoT Introduction to Senior High School",
    organization: "Pengabdian Kepada Masyarakat (PKM) Quantum 2025",
    type: "STEM Outreach & Sustainable Technology",
    location: "Malang, Indonesia",
    description:
      "As part of a community outreach program, I contributed to educational sessions aimed at inspiring students and young learners about sustainable technology and modern innovation. Our team introduced participants to the fundamentals of renewable energy systems, the potential of Internet of Things (IoT) technology, and the basics of programming.",
    bullets: [
      "Personally led the IoT segment, explaining core concepts and demonstrating real-world applications of IoT in society.",
      "Demonstrated IoT hardware including microcontrollers, sensor modules, and wireless data streaming.",
      "Showed how IoT can be integrated with renewable energy systems for smarter monitoring and automated control.",
      "Guided hands-on activities enabling high school participants to experience IoT hardware and programming in action.",
      "Shared technical knowledge to foster early curiosity and inspire the next generation to explore technology for a greener future.",
    ],
    images: [
      "/activities/volunteer-iot-classroom.jpg",
      "/activities/volunteer-iot-quantum.jpg",
    ],
    image: "",
    placeholderHint: "Photos: High school IoT lecture session and Quantum 2025 community outreach team",
    recommendedFile: "/activities/volunteer-iot-classroom.jpg",
  },
  {
    period: "2024",
    role: "Community Volunteer: Bone Bolango, Gorontalo",
    organization: "Community Volunteer Program",
    type: "Youth Education & Environmental Advocacy",
    location: "Bone Bolango, Gorontalo, Indonesia",
    description:
      "As a community volunteer, I contributed as an educator and environmental advocate. I taught children in the community, focusing on essential subjects and creative activities to support their learning and growth. Additionally, I collaborated with fellow volunteers to clean and improve the local area, creating a healthier and more organized environment for residents.",
    bullets: [
      "Taught local community children essential subjects and conducted creative activities to encourage learning and cognitive development.",
      "Engaged directly with village residents and community elders to understand grassroots needs and contribute meaningfully to community well-being.",
      "Collaborated with fellow volunteers to organize neighborhood cleanup and environmental sanitation drives.",
      "Developed strong communication, intercultural teamwork, and social empathy while making a direct community impact.",
    ],
    images: [
      "/activities/volunteer-bone-bolango-children.jpg",
      "/activities/volunteer-bone-bolango-dialogue.jpg",
      "/activities/volunteer-bone-bolango-cleanup.jpg",
    ],
    image: "",
    placeholderHint: "Photos: Teaching children, community resident dialogue, and environmental clean-up in Bone Bolango",
    recommendedFile: "/activities/volunteer-bone-bolango-children.jpg",
  },
  {
    period: "2022 - 2023",
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
    images: ["/activities/sertif-sekre-osis.jpg"],
    image: "",
    placeholderHint: "Activity Photos: Student council committee, event coordination, or organization meeting",
    recommendedFile: "/activities/sertif-sekre-osis.jpg",
  },
];

interface Credential {
  year: string;
  title: string;
  issuer: string;
  detail: string;
  badge?: string;
  href?: string;
  images?: string[];
  image?: string | string[];
  placeholderHint: string;
  recommendedFile: string;
}

const credentials: Credential[] = [
  {
    year: "2026",
    title: "Gemini Certified University Student",
    issuer: "Google for Education",
    detail: "Demonstrated foundational knowledge and practical competence in generative AI concepts, prompt engineering, and core Gemini capabilities in educational and technical workflows. Valid 2026 - 2029.",
    badge: "Google Certified",
    href: "https://edu.google.accredible.com/b816db6c-c9ea-477a-8a01-83f4f04bd14c#acc.niwKq5Nt",
    images: ["/activities/google-gemini-certified.png", "/activities/google-gemini-badge.png"],
    image: "",
    placeholderHint: "Certificate & Badge: Google Gemini Certified University Student",
    recommendedFile: "/activities/google-gemini-certified.png",
  },
  {
    year: "2026",
    title: "PRIME Business Case Competition",
    issuer: "Petroleum Research & Innovation to Magnify Engineers",
    detail: "Semifinalist: Formulated comprehensive technical solutions and business strategies for complex engineering scenarios.",
    badge: "Semifinalist",
    images: ["/activities/certificate-prime.png"],
    image: "",
    placeholderHint: "Certificate / presentation photo: PRIME Business Case Competition",
    recommendedFile: "/activities/certificate-prime.png",
  },
  {
    year: "2026",
    title: "2nd International Student Summit (ISS)",
    issuer: "Sentosa Foundation & INSAN, USIM, WAYS (Malaysia)",
    detail: "Poster Presentation Finalist: Selected as finalist representing international academic collaboration across Indonesia and Malaysia.",
    badge: "International Finalist",
    images: ["/activities/sertif-iss.png"],
    image: "",
    placeholderHint: "Certificate: 2nd International Student Summit 2026",
    recommendedFile: "/activities/sertif-iss.png",
  },
  {
    year: "2026",
    title: "MATLAB & Simulink Onramp",
    issuer: "MathWorks",
    detail: "Completed certified self-paced training covering numerical computation, data visualization, dynamic modeling, and Simulink state machines.",
    badge: "Certified",
    images: ["/activities/certificate-matlab.png", "/activities/certificate-simulink.png"],
    image: "",
    placeholderHint: "MathWorks certification screenshot or course completion badge",
    recommendedFile: "/activities/certificate-matlab.png",
  },
  {
    year: "2026",
    title: "Matlab Course for Wireless Communication Engineering",
    issuer: "Udemy (Dr. Khaled Ramadan)",
    detail: "Completed certified coursework covering MATLAB applications in wireless communication engineering, digital signal processing, channel simulation, and communication system design.",
    badge: "Certified",
    href: "https://ude.my/UC-ad999357-423c-4018-8669-e7cecdea4f48",
    images: ["/activities/certificate-matlab-wireless.png"],
    image: "",
    placeholderHint: "Certificate: Matlab course for wireless communication engineering by Udemy",
    recommendedFile: "/activities/certificate-matlab-wireless.png",
  },
  {
    year: "2025",
    title: "Azure AI Fundamentals (AI-900)",
    issuer: "Microsoft & elevAIte",
    detail: "Completed the certified preparation course for Microsoft Azure AI Fundamentals (AI-900), covering machine learning workloads, computer vision, natural language processing, and conversational AI on Microsoft Azure.",
    badge: "Microsoft Certified",
    images: ["/activities/certificate-azure-ai900.png"],
    image: "",
    placeholderHint: "Certificate: Azure AI Fundamentals (AI-900) by Microsoft & elevAIte",
    recommendedFile: "/activities/certificate-azure-ai900.png",
  },
  {
    year: "2025",
    title: "Getting Started with Azure Cloud",
    issuer: "Udemy (Houssem Dellai)",
    detail: "Completed 7.5 hours of foundational cloud computing training covering Azure infrastructure, resource groups, virtual machines, cloud storage, and virtual networks.",
    badge: "Certified",
    href: "https://ude.my/UC-7e3504fc-0b55-4fe6-bdd7-d00fe42bef61",
    images: ["/activities/certificate-azure.jpg"],
    image: "",
    placeholderHint: "Certificate: Getting Started with Azure Cloud by Udemy",
    recommendedFile: "/activities/certificate-azure.jpg",
  },
  {
    year: "2025",
    title: "Scientific Design Competition",
    issuer: "Online Asian Agrocomplex Student Competition (OAASC)",
    detail: "1st Place (Gold Medal): Designed and defended an engineering technology concept evaluated by an international academic jury.",
    badge: "1st Place Winner",
    images: ["/activities/sertif-oaasc.jpg"],
    image: "",
    placeholderHint: "Award / certificate photo: Scientific Design Competition 1st Place",
    recommendedFile: "/activities/sertif-oaasc.jpg",
  },
  {
    year: "2025",
    title: "Environmental Sustainability",
    issuer: "Universitas Brawijaya",
    detail: "Completed certified institutional coursework covering environmental sustainability, renewable resources, and ecological impact.",
    badge: "Certified",
    images: ["/activities/sertif-env-sustain.png"],
    image: "",
    placeholderHint: "Certificate: Environmental Sustainability",
    recommendedFile: "/activities/sertif-env-sustain.png",
  },
  {
    year: "2024",
    title: "Fundamental Python & Data Analysis",
    issuer: "Coding Studio Digital Skill Course",
    detail: "Certified mastery of foundational Python scripting, algorithmic problem solving, and professional data analysis in Excel.",
    badge: "Certified",
    images: ["/activities/sertif-python.png", "/activities/sertif-excel.png"],
    image: "",
    placeholderHint: "Certificates: Fundamental Python & Excel",
    recommendedFile: "/activities/sertif-python.png",
  },
  {
    year: "2023",
    title: "Physics Peer Tutor (PKRb)",
    issuer: "PKRb Remedial Learning Program, MAN Insan Cendekia Gorontalo",
    detail: "Selected as instructor to mentor students in foundational physics, problem analysis, and circuit fundamentals.",
    badge: "Academic Honor",
    images: ["/activities/sertif-tutor.png"],
    image: "",
    placeholderHint: "Tutor appointment letter or study session photo",
    recommendedFile: "/activities/sertif-tutor.png",
  },
];

interface SkillCategory {
  index: string;
  name: string;
  badge: string;
  description: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    index: "01",
    name: "Hardware, Silicon & Firmware",
    badge: "Core Engineering",
    description: "Bare-metal & RTOS firmware execution, precision analog sensing, and KiCad PCB fabrication.",
    skills: ["STM32 (ARM Cortex-M)", "ESP32", "FreeRTOS", "KiCad PCB Design", "Raspberry Pi", "Arduino", "PlatformIO", "8051 Architecture"],
  },
  {
    index: "02",
    name: "Deterministic Protocols & Hardware Buses",
    badge: "Industrial & Telemetry",
    description: "High-speed differential/serial communication, packet checksumming, and cloud IoT streaming.",
    skills: ["1 Mbps Half-Duplex UART", "CAN Bus", "MQTT Telemetry", "SPI", "I2C", "Packet CRC Verification", "Wi-Fi (802.11)", "Bluetooth BLE", "LoRa"],
  },
  {
    index: "03",
    name: "Kinematics, Control & Embedded Vision",
    badge: "Robotics Intelligence",
    description: "Multi-joint forward/inverse kinematics, closed-loop PID control, and numerical simulation.",
    skills: ["Forward & Inverse Kinematics", "Closed-Loop PID Control", "Dynamixel Protocol 1.0", "C / C++ (C11/C++17)", "Python & NumPy", "MATLAB & Simulink", "OpenCV", "Git & CI/CD"],
  },
  {
    index: "04",
    name: "Engineering Tools & Lab Instrumentation",
    badge: "Lab & Prototyping",
    description: "Hardware-in-the-loop debugging, circuit analysis, and rapid mechanical integration.",
    skills: ["Digital Oscilloscope", "Logic Analyzer", "SolidWorks", "Fusion 360", "3D Printing (Additive)", "Linux / Bash", "Docker", "VS Code"],
  },
];

/* Clean SVG Icons */
function IconMail() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function IconGithub() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function IconLinkedin() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function IconExternal() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  );
}

function IconMapPin() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconAward() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.747.468L12 19.471l-4.245 2.413a.5.5 0 0 1-.747-.468l1.515-8.526" />
      <circle cx="12" cy="8" r="6" />
    </svg>
  );
}

function IconFileText() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </svg>
  );
}

function IconChevronLeft() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function IconChevronRight() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function IconZoomIn() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
      <line x1="11" y1="8" x2="11" y2="14" />
      <line x1="8" y1="11" x2="14" y2="11" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function IconSun() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}

function IconMoon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

function IconCopy() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function IconArrowDown() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="12" y1="5" x2="12" y2="19" />
      <polyline points="19 12 12 19 5 12" />
    </svg>
  );
}

// Multi-Photo Gallery Slider with fallback placeholder & click-to-enlarge Lightbox
function ActivityImageGallery({
  images,
  image,
  alt,
  aspectRatio = "16/10",
}: {
  images?: string[];
  image?: string | string[];
  alt: string;
  placeholderHint?: string;
  recommendedFile?: string;
  aspectRatio?: string;
}) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const photoList = [
    ...(Array.isArray(images) ? images : []),
    ...(Array.isArray(image) ? image : image ? [image] : []),
  ].filter((src): src is string => typeof src === "string" && src.trim() !== "");

  const activeIndex = photoList.length > 0 ? Math.min(currentIdx, photoList.length - 1) : 0;
  const activePhoto = photoList[activeIndex];

  const prevPhoto = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setCurrentIdx((prev) => (prev === 0 ? photoList.length - 1 : prev - 1));
  };

  const nextPhoto = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setCurrentIdx((prev) => (prev === photoList.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsLightboxOpen(false);
      } else if (e.key === "ArrowLeft" && photoList.length > 1) {
        setCurrentIdx((prev) => (prev === 0 ? photoList.length - 1 : prev - 1));
      } else if (e.key === "ArrowRight" && photoList.length > 1) {
        setCurrentIdx((prev) => (prev === photoList.length - 1 ? 0 : prev + 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [isLightboxOpen, photoList.length]);

  if (photoList.length > 0) {
    return (
      <>
        <div className="activity-gallery-box" style={{ aspectRatio }}>
          <div
            className="gallery-slide-wrap"
            onClick={() => setIsLightboxOpen(true)}
            role="button"
            tabIndex={0}
            title="Click to view full image"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setIsLightboxOpen(true);
              }
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={activePhoto}
              alt={`${alt} (Photo ${activeIndex + 1} of ${photoList.length})`}
              className="activity-img"
              loading="lazy"
            />

            <div className="gallery-zoom-hint" aria-hidden="true">
              <IconZoomIn />
              <span>Inspect</span>
            </div>
          </div>

          {photoList.length > 1 && (
            <>
              <button
                type="button"
                className="gallery-nav-btn gallery-nav-prev"
                onClick={prevPhoto}
                aria-label="Previous image"
              >
                <IconChevronLeft />
              </button>
              <button
                type="button"
                className="gallery-nav-btn gallery-nav-next"
                onClick={nextPhoto}
                aria-label="Next image"
              >
                <IconChevronRight />
              </button>
              <div className="gallery-nav-dots" aria-hidden="true">
                {photoList.map((_, i) => (
                  <span
                    key={i}
                    className={`gallery-dot ${i === activeIndex ? "active" : ""}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentIdx(i);
                    }}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {isLightboxOpen && typeof document !== "undefined" &&
          createPortal(
            <div
              className="lightbox-backdrop"
              onClick={() => setIsLightboxOpen(false)}
              role="dialog"
              aria-modal="true"
              aria-label="Image Lightbox Viewer"
            >
              <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                <button
                  type="button"
                  className="lightbox-close-btn"
                  onClick={() => setIsLightboxOpen(false)}
                  aria-label="Close full view"
                >
                  <IconClose />
                  <span>Esc</span>
                </button>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={activePhoto}
                  alt={`${alt} - Full View`}
                  className="lightbox-img"
                />
                <div className="lightbox-caption">
                  {alt} ({activeIndex + 1} of {photoList.length})
                </div>
              </div>
            </div>,
            document.body
          )}
      </>
    );
  }

  return (
    <div className="activity-gallery-box" style={{ aspectRatio }}>
      <div className="gallery-slide-wrap" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontSize: "12px", color: "var(--text-subtle)", fontFamily: "var(--font-mono)" }}>
          Asset pending deposit
        </span>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("about");
  const [certPage, setCertPage] = useState(1);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [projectCategory, setProjectCategory] = useState<string>("All");

  const CERTS_PER_PAGE = 8;
  const totalCertPages = Math.ceil(credentials.length / CERTS_PER_PAGE);

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = saved || (prefersDark ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", initial);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(initial);
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  const copyEmailToClipboard = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText("rizkyhabir88@gmail.com").then(() => {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2400);
      });
    }
  };

  const handleCertPageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalCertPages) return;
    setCertPage(newPage);
    const section = document.getElementById("credentials");
    if (section) {
      const rect = section.getBoundingClientRect();
      if (rect.top < 0) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const sectionIds = ["about", "projects", "skills", "experience", "credentials", "contact"];
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

  const filteredProjects = projectCategory === "All"
    ? projects
    : projects.filter((p) => p.category.toLowerCase().includes(projectCategory.toLowerCase()));

  return (
    <div className="portfolio-shell">
      <a className="skip-link" href="#content">
        Skip to content
      </a>

      {/* Main Navigation Header */}
      <header className="site-header">
        <div className="header-container">
          <a className="brand" href="#top" aria-label="Rama Habir, top of page">
            <span className="brand-badge">RH</span>
            <div className="brand-text">
              <span className="brand-name">Rama Habir</span>
              <span className="brand-role">Robotics &amp; Telecommunications</span>
            </div>
          </a>

          <div className="header-right-group">
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
              <a
                className="nav-cv-link"
                href="/CV-Rama-Rizky-Belrouzy-Habir.pdf"
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
              >
                <IconFileText />
                <span>Resume / CV</span>
              </a>
              <a className="nav-cta" href={links.email} onClick={closeMenu}>
                Contact
              </a>
            </nav>

            <div className="status-beacon-badge" title="Open to robotics engineering roles">
              <span className="beacon-dot" aria-hidden="true" />
              <span>Available for Roles</span>
            </div>

            <button
              type="button"
              className="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
              title={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            >
              {theme === "dark" ? <IconSun /> : <IconMoon />}
            </button>

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
        </div>
      </header>

      <main id="content">
        {/* Hero Section: Asymmetric Precision Split */}
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="section-container">
            <div className="hero-grid">
              {/* Left Column: Core Positioning */}
              <div className="hero-content">
                <div className="hero-tag-row">
                  <span className="hero-tag">
                    <span className="beacon-dot" aria-hidden="true" />
                    Open to Robotics &amp; Embedded Roles · 2026
                  </span>
                  <span className="hero-tag" style={{ color: "var(--text-subtle)", fontWeight: 400 }}>
                    <IconMapPin />
                    Malang, Indonesia
                  </span>
                </div>

                <h1 id="hero-title" className="hero-title">
                  Rama Rizky Belrouzy Habir
                </h1>

                <p className="hero-subtitle">
                  Robotics &amp; Embedded Firmware Engineer
                </p>

                <p className="hero-bio">
                  Electrical Engineering student at <strong>Universitas Brawijaya</strong> and KRSRI Software Engineer with the <strong>Brawijaya Robotics Team</strong>. Specializing in bare-metal and RTOS firmware (STM32, ESP32), high-speed serial bus drivers, sensor telemetry, and KiCad PCB hardware.
                </p>

                <div className="hero-cta-group">
                  <div className="hero-primary-btns">
                    <a className="btn btn-primary btn-lg" href="#projects">
                      Explore Projects
                      <IconArrowDown />
                    </a>
                    <a className="btn btn-outline btn-lg" href="/CV-Rama-Rizky-Belrouzy-Habir.pdf" target="_blank" rel="noreferrer">
                      <IconFileText />
                      Download CV (PDF)
                    </a>
                  </div>

                  <div className="hero-secondary-chips">
                    <button
                      type="button"
                      className={`btn-chip ${copiedEmail ? "copied" : ""}`}
                      onClick={() => copyEmailToClipboard()}
                      title="Copy email to clipboard"
                    >
                      {copiedEmail ? <IconCheck /> : <IconCopy />}
                      <span>{copiedEmail ? "Email Copied!" : "Copy Email"}</span>
                    </button>
                    <a className="btn-chip" href={links.email} title="Send email via mail client">
                      <IconMail />
                      <span>Direct Email</span>
                    </a>
                    <a className="btn-chip" href={links.github} target="_blank" rel="noreferrer" title="GitHub profile">
                      <IconGithub />
                      <span>GitHub</span>
                    </a>
                    <a className="btn-chip" href={links.linkedin} target="_blank" rel="noreferrer" title="LinkedIn profile">
                      <IconLinkedin />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>

                <div className="hero-telemetry-grid">
                  <div className="telemetry-cell">
                    <span className="telemetry-label">Silicon &amp; Hardware</span>
                    <strong className="telemetry-val">STM32 · ESP32 · KiCad</strong>
                    <span className="telemetry-sub">Half-Duplex UART · FreeRTOS</span>
                  </div>
                  <div className="telemetry-cell">
                    <span className="telemetry-label">Robotics Station</span>
                    <strong className="telemetry-val">KRSRI Software Engineer</strong>
                    <span className="telemetry-sub">Brawijaya Robotics Team</span>
                  </div>
                  <div className="telemetry-cell">
                    <span className="telemetry-label">Academic Base</span>
                    <strong className="telemetry-val">Universitas Brawijaya</strong>
                    <span className="telemetry-sub">Electrical Eng · 3.35 GPA</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Hardware Feature Card with 3D Sim Link */}
              <div className="hero-feature-card-wrap">
                <article className="hero-hardware-card">
                  <div className="card-spec-header">
                    <span className="card-spec-id">FEATURED ROBOTICS PLATFORM</span>
                    <span className="card-spec-status">
                      <span className="beacon-dot" aria-hidden="true" />
                      Hardware Validated
                    </span>
                  </div>

                  <div className="hero-card-media">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/projects/robot-arm-1.png"
                      alt="5-DOF Robotic Arm with Dynamixel AX Actuators"
                      className="hero-card-img"
                    />
                  </div>

                  <div className="hero-card-meta">
                    <div className="card-meta-top">
                      <h2 className="card-meta-title">5-DOF Robotic Manipulator (Dynamixel)</h2>
                      <p className="card-meta-sub">
                        Cortex-M4 100MHz microcontroller driving high-speed half-duplex UART bus communication, custom 2-layer KiCad controller PCB, and forward/inverse kinematics.
                      </p>
                    </div>

                    <div className="card-spec-pills">
                      <span className="card-pill">STM32F411</span>
                      <span className="card-pill">1 Mbps Half-Duplex</span>
                      <span className="card-pill">Dynamixel Protocol 1.0</span>
                      <span className="card-pill">KiCad Custom PCB</span>
                    </div>

                    <div className="card-action-bar">
                      <a
                        className="card-sim-link"
                        href="/6dof-simulator/index.html"
                        target="_blank"
                        rel="noreferrer"
                        title="Open interactive 3D Web Simulator"
                      >
                        <span>Launch 3D Web Simulator</span>
                        <IconExternal />
                      </a>
                      <a
                        className="btn btn-sm btn-outline"
                        href="https://github.com/Ramahabir/6-DOF-Robotics-Arm-Dynamixel"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <IconGithub />
                        <span>Source Code</span>
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            </div>

            {/* Executive Recruiter Impact Bar */}
            <div className="recruiter-impact-bar">
              <div className="impact-metric-card">
                <div className="impact-metric-top">
                  <span className="impact-metric-tag">National Robotics</span>
                  <span className="impact-metric-badge">Contestant</span>
                </div>
                <div className="impact-metric-val">KRSRI Engineer</div>
                <div className="impact-metric-desc">Autonomous fire-fighting robot software &amp; motor control with Brawijaya Robotics Team.</div>
              </div>

              <div className="impact-metric-card">
                <div className="impact-metric-top">
                  <span className="impact-metric-tag">High-Speed Bus</span>
                  <span className="impact-metric-badge">&lt; 1 ms Latency</span>
                </div>
                <div className="impact-metric-val">1 Mbps UART</div>
                <div className="impact-metric-desc">Engineered custom half-duplex serial driver with error-free Dynamixel Protocol 1.0 CRC.</div>
              </div>

              <div className="impact-metric-card">
                <div className="impact-metric-top">
                  <span className="impact-metric-tag">Assistive Tech Lead</span>
                  <span className="impact-metric-badge">PKM-KI 2026</span>
                </div>
                <div className="impact-metric-val">~80% Cost Cut</div>
                <div className="impact-metric-desc">Zero-static-power latching braille display validated with visually impaired students at UB.</div>
              </div>

              <div className="impact-metric-card">
                <div className="impact-metric-top">
                  <span className="impact-metric-tag">Academic Rigor</span>
                  <span className="impact-metric-badge">3.35 GPA</span>
                </div>
                <div className="impact-metric-val">Electrical Eng.</div>
                <div className="impact-metric-desc">Universitas Brawijaya · Peer Physics Tutor · Google &amp; MathWorks Certified.</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 01: Core Competencies */}
        <section className="section section-alt" id="about">
          <div className="section-container">
            <div className="section-header">
              <span className="section-tag">[ 01 // COMPETENCIES ]</span>
              <h2>Core Engineering Disciplines</h2>
              <p className="section-desc">
                Bridging embedded electronics, deterministic firmware, and real-world physical actuation.
              </p>
            </div>

            <div className="competencies-grid">
              <div className="competency-card">
                <span className="competency-num">01.01</span>
                <h3>Embedded Hardware &amp; Firmware</h3>
                <p>
                  Building firmware close to the silicon: sampling analog sensors with precision ADCs, controlling actuators, implementing hardware ring buffers, and organizing non-blocking tasks under FreeRTOS.
                </p>
                <div className="competency-tags">
                  <span className="competency-tag">STM32</span>
                  <span className="competency-tag">ESP32</span>
                  <span className="competency-tag">FreeRTOS</span>
                  <span className="competency-tag">C/C++</span>
                  <span className="competency-tag">KiCad</span>
                </div>
              </div>

              <div className="competency-card">
                <span className="competency-num">01.02</span>
                <h3>Autonomous Robotics &amp; Kinematics</h3>
                <p>
                  Engineering algorithms for the national KRSRI autonomous fire-fighting robot contest with the Brawijaya Robotics Team: focusing on arena navigation, obstacle avoidance, forward/inverse kinematics, and real-time responsiveness.
                </p>
                <div className="competency-tags">
                  <span className="competency-tag">KRSRI Contest</span>
                  <span className="competency-tag">Inverse Kinematics</span>
                  <span className="competency-tag">Sensor Fusion</span>
                  <span className="competency-tag">PID Loops</span>
                </div>
              </div>

              <div className="competency-card">
                <span className="competency-num">01.03</span>
                <h3>Deterministic Protocols &amp; Telemetry</h3>
                <p>
                  Specializing in reliable device communication: UART/USART serial bridges, packet framing with CRC error trapping, MQTT IoT telemetry, and industrial bus protocols like I2C, SPI, and CAN.
                </p>
                <div className="competency-tags">
                  <span className="competency-tag">1 Mbps UART</span>
                  <span className="competency-tag">CAN Bus</span>
                  <span className="competency-tag">SPI / I2C</span>
                  <span className="competency-tag">MQTT</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 02: Selected Engineering Projects */}
        <section className="section" id="projects">
          <div className="section-container">
            <div className="section-header">
              <span className="section-tag">[ 02 // PORTFOLIO ]</span>
              <h2>Featured Engineering Systems</h2>
              <p className="section-desc">
                Curated physical computing systems, embedded firmware architectures, and verifiable hardware designs.
              </p>
            </div>

            <div className="project-filter-bar" role="tablist" aria-label="Project Categories">
              {["All", "Robotics", "Assistive", "IoT"].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`filter-btn ${projectCategory === cat ? "active" : ""}`}
                  onClick={() => setProjectCategory(cat)}
                  role="tab"
                  aria-selected={projectCategory === cat}
                >
                  {cat === "All" ? "All Projects (3)" : cat === "Robotics" ? "Robotics & Kinematics" : cat === "Assistive" ? "Assistive Tech" : "IoT & Telemetry"}
                </button>
              ))}
            </div>

            <div className="projects-list">
              {filteredProjects.map((project) => (
                <article className="project-card" key={project.title}>
                  <div className="project-media-col">
                    <ActivityImageGallery
                      images={project.images}
                      image={project.image}
                      alt={project.title}
                      aspectRatio="16/10"
                    />
                  </div>

                  <div className="project-content-col">
                    <div className="project-header-row">
                      <span className="project-category-tag">{project.category}</span>
                      <span className="project-serial">SYS {project.number}</span>
                    </div>

                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-impact-banner">
                      <span>{project.impactBadge}</span>
                    </div>
                    <p className="project-summary">{project.summary}</p>

                    {/* Hardware Spec Table */}
                    <div className="spec-box">
                      <div className="spec-header">
                        <span>TECHNICAL ARCHITECTURE SPECIFICATION</span>
                        <span className="spec-verified-pill">
                          <span className="beacon-dot" aria-hidden="true" />
                          VERIFIED HARDWARE
                        </span>
                      </div>
                      <div className="spec-grid">
                        <div className="spec-item">
                          <span className="spec-k">Controller Silicon</span>
                          <span className="spec-v">{project.specs.controller}</span>
                        </div>
                        <div className="spec-item">
                          <span className="spec-k">Interface / Bus</span>
                          <span className="spec-v">{project.specs.interface}</span>
                        </div>
                        <div className="spec-item">
                          <span className="spec-k">Actuators / Sensors</span>
                          <span className="spec-v">{project.specs.actuators}</span>
                        </div>
                        <div className="spec-item">
                          <span className="spec-k">Circuit Hardware</span>
                          <span className="spec-v">{project.specs.hardware}</span>
                        </div>
                      </div>
                      <div className="spec-outcome">
                        <strong>BENCHMARK &amp; DEPLOYMENT OUTCOME</strong>
                        <span>{project.outcome}</span>
                      </div>
                    </div>

                    <div className="project-highlights">
                      <strong>Core Deliverables:</strong>
                      <ul>
                        {project.highlights.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="project-tech-tags">
                      {project.stack.map((item) => (
                        <span className="project-tech-tag" key={item}>
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="project-actions">
                      {project.number === "01" && (
                        <a className="btn btn-sm btn-primary" href="/6dof-simulator/index.html" target="_blank" rel="noreferrer">
                          <IconExternal />
                          Launch 3D Web Simulator
                        </a>
                      )}
                      {project.liveUrl && (
                        <a className="btn btn-sm btn-primary" href={project.liveUrl} target="_blank" rel="noreferrer">
                          <IconExternal />
                          Live Web Dashboard
                        </a>
                      )}
                      <a
                        className="btn btn-sm btn-outline"
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <IconGithub />
                        Source Code
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* 3D Simulator Spotlight Banner */}
            <div className="simulator-spotlight-banner">
              <div className="sim-banner-text">
                <span className="sim-banner-tag">Interactive Simulation Module</span>
                <h3>6-DOF Robotic Arm 3D Web Simulator</h3>
                <p>
                  Experience the interactive 3D kinematic model, URDF joint definitions, and coordinate transform visualization directly in your browser.
                </p>
              </div>
              <a
                className="btn btn-primary btn-lg"
                href="/6dof-simulator/index.html"
                target="_blank"
                rel="noreferrer"
              >
                Launch Simulator
                <IconExternal />
              </a>
            </div>
          </div>
        </section>

        {/* Section 03: Technical Arsenal */}
        <section className="section section-alt" id="skills">
          <div className="section-container">
            <div className="section-header">
              <span className="section-tag">[ 03 // TOOLKIT ]</span>
              <h2>Technical Arsenal &amp; Silicon</h2>
              <p className="section-desc">
                Specialized microcontrollers, bare-metal &amp; RTOS firmware, communication protocols, and engineering design tools.
              </p>
            </div>

            <div className="toolkit-grid">
              {skillCategories.map((cat) => (
                <div className="toolkit-card" key={cat.name}>
                  <div className="toolkit-card-header">
                    <div>
                      <span className="toolkit-badge">{cat.badge}</span>
                      <h3>{cat.name}</h3>
                    </div>
                    <span className="toolkit-index">CAT {cat.index}</span>
                  </div>
                  <p className="toolkit-desc">{cat.description}</p>
                  <div className="toolkit-pills">
                    {cat.skills.map((skill) => (
                      <span className="toolkit-pill" key={skill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 04: Experience & Chronology */}
        <section className="section" id="experience">
          <div className="section-container">
            <div className="section-header">
              <span className="section-tag">[ 04 // FIELDWORK ]</span>
              <h2>Chronology &amp; Engineering Experience</h2>
              <p className="section-desc">
                Hands-on engineering through robotics competitions, university lab work, community outreach, and leadership.
              </p>
            </div>

            <div className="chronology-list">
              {experience.map((item) => (
                <article className="chronology-item" key={`${item.period}-${item.role}`}>
                  <div className="chronology-media">
                    <ActivityImageGallery
                      images={item.images}
                      image={item.image}
                      alt={`${item.role} at ${item.organization}`}
                      aspectRatio="16/10"
                    />
                  </div>

                  <div className="chronology-body">
                    <div className="chronology-header">
                      <span className="chronology-period">{item.period}</span>
                      <span className="chronology-location">
                        <IconMapPin />
                        {item.location}
                      </span>
                    </div>

                    <div>
                      <h3 className="chronology-role">{item.role}</h3>
                      <p className="chronology-org">
                        <strong>{item.organization}</strong> · <span>{item.type}</span>
                      </p>
                    </div>

                    <p className="chronology-desc">{item.description}</p>

                    <ul className="chronology-bullets">
                      {item.bullets.map((bullet, idx) => (
                        <li key={idx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Section 05: Verified Credentials */}
        <section className="section section-alt" id="credentials">
          <div className="section-container">
            <div className="section-header">
              <span className="section-tag">[ 05 // VERIFICATION ]</span>
              <h2>Credentials &amp; Verified Honors</h2>
              <p className="section-desc">
                Verified competition honors, international summits, and certified technical training.
              </p>
            </div>

            <div className="credentials-grid">
              {credentials.map((cred, index) => {
                const itemPage = Math.floor(index / CERTS_PER_PAGE) + 1;
                const isVisible = itemPage === certPage;
                if (!isVisible) return null;

                return (
                  <article className="credential-card" key={cred.title}>
                    <div className="cred-top">
                      <span className="cred-year">{cred.year}</span>
                      {cred.badge && (
                        <span className="cred-badge">
                          <IconAward />
                          <span>{cred.badge}</span>
                        </span>
                      )}
                    </div>

                    <h3 className="cred-title">
                      {cred.href ? (
                        <a href={cred.href} target="_blank" rel="noreferrer" title="Verify credential online">
                          {cred.title}
                          <IconExternal />
                        </a>
                      ) : (
                        cred.title
                      )}
                    </h3>

                    <p className="cred-issuer">{cred.issuer}</p>
                    <p className="cred-detail">{cred.detail}</p>

                    <div className="cred-gallery-slot">
                      <ActivityImageGallery
                        images={cred.images}
                        image={cred.image}
                        alt={cred.title}
                        aspectRatio="16/10"
                      />
                    </div>
                  </article>
                );
              })}
            </div>

            {totalCertPages > 1 && (
              <nav className="pagination-bar" aria-label="Certificates pagination">
                <div className="pagination-info">
                  Showing <strong>{(certPage - 1) * CERTS_PER_PAGE + 1}-{Math.min(certPage * CERTS_PER_PAGE, credentials.length)}</strong> of <strong>{credentials.length}</strong> credentials
                </div>
                <div className="pagination-controls">
                  <button
                    type="button"
                    className="pagination-btn"
                    onClick={() => handleCertPageChange(certPage - 1)}
                    disabled={certPage === 1}
                    aria-label="Previous page"
                  >
                    <IconChevronLeft />
                    <span>Prev</span>
                  </button>

                  {Array.from({ length: totalCertPages }, (_, i) => i + 1).map((pageNum) => (
                    <button
                      key={pageNum}
                      type="button"
                      className={`pagination-btn ${pageNum === certPage ? "active" : ""}`}
                      onClick={() => handleCertPageChange(pageNum)}
                      aria-current={pageNum === certPage ? "page" : undefined}
                      aria-label={`Page ${pageNum}`}
                    >
                      {pageNum}
                    </button>
                  ))}

                  <button
                    type="button"
                    className="pagination-btn"
                    onClick={() => handleCertPageChange(certPage + 1)}
                    disabled={certPage === totalCertPages}
                    aria-label="Next page"
                  >
                    <span>Next</span>
                    <IconChevronRight />
                  </button>
                </div>
              </nav>
            )}
          </div>
        </section>

        {/* Section 06: Direct Correspondence */}
        <section className="section" id="contact">
          <div className="section-container">
            <div className="contact-grid">
              <div className="contact-info">
                <div>
                  <span className="section-tag">[ 06 // CORRESPONDENCE ]</span>
                  <h2>Initiate Direct Contact</h2>
                </div>
                <p>
                  I am actively seeking robotics engineering internships, embedded firmware roles, and IoT collaborations. Direct correspondence is welcome.
                </p>

                <div className="contact-fields">
                  <div className="contact-field-row">
                    <span className="field-label">Electronic Mail</span>
                    <a className="field-link" href={links.email}>
                      rizkyhabir88@gmail.com
                    </a>
                  </div>
                  <div className="contact-field-row">
                    <span className="field-label">Location Station</span>
                    <span className="field-value">Malang, East Java, Indonesia</span>
                  </div>
                  <div className="contact-field-row">
                    <span className="field-label">Public Archives</span>
                    <div style={{ display: "flex", gap: "12px", marginTop: "4px" }}>
                      <a className="field-link" href={links.github} target="_blank" rel="noreferrer">
                        GitHub Archive ↗
                      </a>
                      <span style={{ color: "var(--border)" }}>|</span>
                      <a className="field-link" href={links.linkedin} target="_blank" rel="noreferrer">
                        LinkedIn Profile ↗
                      </a>
                    </div>
                  </div>
                </div>

                <div className="contact-sla-badge">
                  <span className="contact-sla-dot" aria-hidden="true" />
                  <span>Typically acknowledged within 24 hours</span>
                </div>
              </div>

              <div className="contact-actions-panel">
                <a className="btn btn-primary btn-lg" href={links.email}>
                  <IconMail />
                  Transmit Email Message
                </a>
                <button
                  type="button"
                  className={`btn btn-outline btn-lg ${copiedEmail ? "copied" : ""}`}
                  onClick={() => copyEmailToClipboard()}
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <IconCheck /> : <IconCopy />}
                  <span>{copiedEmail ? "Address Copied!" : "Copy Email Address"}</span>
                </button>
                <a className="btn btn-secondary btn-lg" href={links.linkedin} target="_blank" rel="noreferrer">
                  <IconLinkedin />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Swiss Colophon Footer */}
      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-left">
            <span className="brand-badge">RH</span>
            <div className="footer-meta">
              <strong>Rama Rizky Belrouzy Habir</strong>
              <span>Robotics &amp; Telecommunications · Universitas Brawijaya · Malang, Indonesia</span>
            </div>
          </div>

          <div className="footer-right">
            <a href={links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={links.email}>
              Email
            </a>
            <a href="#top" title="Jump to top of page">
              Top ↑
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
