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
    summary:
      "An articulated robotic manipulator controlled by an STM32F411 microcontroller. Combines high-speed half-duplex UART communication with Dynamixel AX-series smart actuators, custom KiCad controller hardware, and forward/inverse kinematics for coordinated multi-axis manipulation.",
    role: "Robotics & Firmware Engineer",
    stack: ["STM32F411", "C / C++", "Dynamixel", "Half-Duplex UART", "KiCad", "FreeRTOS"],
    outcome: "Closed-loop multi-joint position & torque control at 1 Mbps bus speed",
    highlights: [
      "Engineered half-duplex serial driver using 74LS241 buffer for 1 Mbps Dynamixel Protocol 1.0 communication.",
      "Designed custom controller PCB in KiCad with dedicated power distribution and logic level isolation.",
      "Implemented packet parsing with checksum validation, status return error handling, and smooth trajectory planning.",
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
    summary:
      "As Team Lead for PKM-KI 2026 at Universitas Brawijaya, I directed the development of LA-Braille—an affordable electromechanical refreshable braille display engineered to bridge the literacy access gap for visually impaired individuals in Indonesia. The system replaces expensive conventional piezoelectric units with custom 3D-printed cam actuators and rare-earth NdFeB micro-magnets, mechanically latching braille pins with zero continuous power draw.",
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
    outcome: "Affordable, zero-static-power refreshable Braille hardware validated in user trials with visually impaired students at Universitas Brawijaya",
    highlights: [
      "Novel Cam Actuator: Replaced costly piezoelectric modules with custom 3D-printed rotary-to-linear cam actuators and 1 × 0.5 mm NdFeB rare-earth micro-magnets that lock pins mechanically without consuming idle power.",
      "Custom Driver Electronics: Designed H-bridge driving board in KiCad using Toshiba TBD62783/TBD62083 DMOS FET arrays, 74HC238D line decoders, and Raspberry Pi GPIO for multiplexed pin actuation.",
      "OCR & Accessible LMS: Developed an automated PDF-to-Braille conversion pipeline (Tesseract, OpenCV, PDF2Image) and a cross-platform Flutter/PostgreSQL mobile & web LMS with offline caching and screen-reader compatibility.",
      "Field Validation: Evaluated and benchmarked the complete system directly alongside visually impaired students at Universitas Brawijaya for technical and real-world validation.",
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
    images: [], // Pass multiple photos: ["/projects/hardy-iot-1.jpg", "/projects/hardy-iot-2.jpg"]
    image: "",
    placeholderHint: "Photos of KiCad 3D PCB render, assembled circuit board, or web telemetry dashboard",
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
  images?: string[];
  image?: string | string[];
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
    images: ["/activities/sertifikat-krsri-hme.png"],
    image: "",
    placeholderHint: "Activity Photos: KRSRI robot chassis, test field arena, or team workshop debugging",
    recommendedFile: "/activities/sertifikat-krsri-hme.png",
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
    images: [], // Pass multiple photos: ["/activities/brawijaya-lab-1.jpg", "/activities/brawijaya-lab-2.jpg"]
    image: "",
    placeholderHint: "Activity Photos: University electronics workbench, oscilloscope testing, or campus lab",
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
    detail: "Demonstrated foundational knowledge and practical competence in generative AI concepts, prompt engineering, and core Gemini capabilities in educational and technical workflows. Valid 2026 — 2029.",
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
    detail: "Semifinalist — Formulated comprehensive technical solutions and business strategies for complex engineering scenarios.",
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
    detail: "Poster Presentation Finalist — Selected as finalist representing international academic collaboration across Indonesia and Malaysia.",
    badge: "International Finalist",
    images: ["/activities/sertif-iss.png"],
    image: "",
    placeholderHint: "Certificate: 2nd International Student Summit 2026",
    recommendedFile: "/activities/sertif-iss.png",
  },
  {
    year: "2025",
    title: "Scientific Design Competition",
    issuer: "Online Asian Agrocomplex Student Competition (OAASC)",
    detail: "1st Place (Gold Medal) — Designed and defended an engineering technology concept evaluated by an international academic jury.",
    badge: "1st Place Winner",
    images: ["/activities/sertif-oaasc.jpg"],
    image: "",
    placeholderHint: "Award / certificate photo: Scientific Design Competition 1st Place",
    recommendedFile: "/activities/sertif-oaasc.jpg",
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
    issuer: "PKRb Remedial Learning Program — MAN Insan Cendekia Gorontalo",
    detail: "Selected as instructor to mentor students in foundational physics, problem analysis, and circuit fundamentals.",
    badge: "Academic Honor",
    images: ["/activities/sertif-tutor.png"],
    image: "",
    placeholderHint: "Tutor appointment letter or study session photo",
    recommendedFile: "/activities/sertif-tutor.png",
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

// Clean standard SVG icons (Lucide / Feather style)
function IconMail() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function IconGithub() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function IconLinkedin() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function IconExternal() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function IconMapPin() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconAward() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

function IconFileText() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

function IconCamera() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  );
}

function IconChevronLeft() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function IconChevronRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

function IconZoomIn() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
      <line x1="11" y1="8" x2="11" y2="14" />
      <line x1="8" y1="11" x2="14" y2="11" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

// Multi-Photo Gallery Slider with fallback placeholder & click-to-enlarge Lightbox
function ActivityImageGallery({
  images,
  image,
  alt,
  placeholderHint,
  recommendedFile,
  aspectRatio = "16/10",
}: {
  images?: string[];
  image?: string | string[];
  alt: string;
  placeholderHint: string;
  recommendedFile: string;
  aspectRatio?: string;
}) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Normalize photo sources from both array and single string prop
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
            title="Click to expand photo"
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
              <span>Click to expand</span>
            </div>
          </div>

          {photoList.length > 1 && (
            <>
              <button
                type="button"
                className="gallery-nav-btn gallery-prev"
                onClick={prevPhoto}
                aria-label="Previous photo"
              >
                <IconChevronLeft />
              </button>
              <button
                type="button"
                className="gallery-nav-btn gallery-next"
                onClick={nextPhoto}
                aria-label="Next photo"
              >
                <IconChevronRight />
              </button>

              <div className="gallery-counter-badge">
                {activeIndex + 1} / {photoList.length}
              </div>

              <div className="gallery-dots-row">
                {photoList.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`gallery-dot ${idx === activeIndex ? "active" : ""}`}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setCurrentIdx(idx);
                    }}
                    aria-label={`View photo ${idx + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {isLightboxOpen && (
          <div
            className="lightbox-overlay"
            onClick={() => setIsLightboxOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label={`${alt} full view`}
          >
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <div className="lightbox-header">
                <div className="lightbox-title-text">
                  <span>{alt}</span>
                  {photoList.length > 1 && (
                    <span className="lightbox-counter">
                      ({activeIndex + 1} of {photoList.length})
                    </span>
                  )}
                </div>
                <button
                  type="button"
                  className="lightbox-close-btn"
                  onClick={() => setIsLightboxOpen(false)}
                  aria-label="Close full view"
                >
                  <IconClose />
                </button>
              </div>

              <div className="lightbox-image-container">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={activePhoto}
                  alt={`${alt} (Full view, photo ${activeIndex + 1} of ${photoList.length})`}
                  className="lightbox-image"
                />

                {photoList.length > 1 && (
                  <>
                    <button
                      type="button"
                      className="lightbox-nav-btn lightbox-prev"
                      onClick={prevPhoto}
                      aria-label="Previous photo"
                    >
                      <IconChevronLeft />
                    </button>
                    <button
                      type="button"
                      className="lightbox-nav-btn lightbox-next"
                      onClick={nextPhoto}
                      aria-label="Next photo"
                    >
                      <IconChevronRight />
                    </button>
                  </>
                )}
              </div>

              {photoList.length > 1 && (
                <div className="lightbox-footer">
                  <div className="gallery-dots-row static-dots">
                    {photoList.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        className={`gallery-dot ${idx === activeIndex ? "active" : ""}`}
                        onClick={() => setCurrentIdx(idx)}
                        aria-label={`Jump to photo ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <div className="activity-placeholder" style={{ aspectRatio }} aria-label={`Placeholder for: ${alt}`}>
      <div className="placeholder-content">
        <div className="placeholder-icon-wrap" aria-hidden="true">
          <IconCamera />
        </div>
        <span className="placeholder-tag">PHOTO GALLERY PLACEHOLDER</span>
        <p className="placeholder-hint">{placeholderHint}</p>
        <span className="placeholder-path">
          File: <code>public{recommendedFile}</code>
        </span>
        <span className="placeholder-multi-hint">
          Supports multiple photos: <code>images: [&quot;...&quot;, &quot;...&quot;]</code>
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

      {/* Clean Light Header */}
      <header className="site-header">
        <div className="header-container">
          <a className="brand" href="#top" aria-label="Rama Habir, top of page">
            <span className="brand-badge">RH</span>
            <span className="brand-name">Rama Habir</span>
            <span className="brand-role">· Robotics & Embedded</span>
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
              Contact Me
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
        {/* Clean Wix-Style Hero Section */}
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-container">
            <div className="hero-layout">
              <div className="hero-text-col">
                <div className="hero-tag">
                  <IconMapPin />
                  <span>Malang, Indonesia · Open to Opportunities</span>
                </div>

                <h1 id="hero-title" className="hero-title">
                  Rama Rizky Belrouzy Habir
                  <span className="hero-subtitle">Engineering Machines that sense, communicate, and act.</span>
                </h1>

                <p className="hero-lead">
                  Electrical Engineering student at <strong>Universitas Brawijaya</strong> and KRSRI Software Engineer with the <strong>Brawijaya Robotics Team</strong>. Focused on microcontroller firmware (STM32, ESP32), sensor telemetry, and reliable communication protocols.
                </p>

                <div className="hero-actions">
                  <a className="btn btn-primary" href="#projects">
                    View Projects
                  </a>
                  <a className="btn btn-outline" href={links.email}>
                    <IconMail />
                    Email Me
                  </a>
                  <a className="btn btn-secondary" href="/CV-Rama-Rizky-Belrouzy-Habir.pdf" target="_blank" rel="noreferrer">
                    <IconFileText />
                    Download CV
                  </a>
                  <a className="btn btn-secondary" href={links.github} target="_blank" rel="noreferrer">
                    <IconGithub />
                    GitHub
                  </a>
                  <a className="btn btn-secondary" href={links.linkedin} target="_blank" rel="noreferrer">
                    <IconLinkedin />
                    LinkedIn
                  </a>
                </div>

                <div className="hero-stats-row">
                  <div className="hero-stat-card">
                    <span className="stat-label">Current Role</span>
                    <strong className="stat-val">KRSRI Software Engineer</strong>
                    <span className="stat-sub">Brawijaya Robotics Team</span>
                  </div>
                  <div className="hero-stat-card">
                    <span className="stat-label">Education</span>
                    <strong className="stat-val">Electrical Engineering</strong>
                    <span className="stat-sub">Universitas Brawijaya (GPA 3.35)</span>
                  </div>
                  <div className="hero-stat-card">
                    <span className="stat-label">Core Stack</span>
                    <strong className="stat-val">STM32 · ESP32 · C/C++</strong>
                    <span className="stat-sub">FreeRTOS · MQTT · KiCad</span>
                  </div>
                </div>
              </div>

              <div className="hero-photo-col">
                <div className="hero-photo-card">
                  <div className="hero-photo-wrap">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/rama-profile.jpg" alt="Rama Rizky Belrouzy Habir" className="hero-profile-img" />
                  </div>
                  <div className="hero-photo-caption">
                    <h3>Rama Habir</h3>
                    <p>Robotics & Embedded Systems</p>
                    <span>Universitas Brawijaya</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="section section-alt" id="about">
          <div className="section-container">
            <div className="section-header">
              <span className="section-label">ABOUT ME</span>
              <h2>Engineering Background</h2>
              <p className="section-desc">
                Bridging embedded electronics, software algorithms, and physical actuation.
              </p>
            </div>

            <div className="about-cards-grid">
              <div className="info-card">
                <h3>Embedded Hardware & Firmware</h3>
                <p>
                  I build firmware close to the metal: sampling analog sensors with precision ADCs, controlling actuators, implementing hardware ring buffers, and organizing non-blocking tasks under FreeRTOS.
                </p>
              </div>

              <div className="info-card">
                <h3>Autonomous Robotics</h3>
                <p>
                  In the Brawijaya Robotics Team, I work on software algorithms for the national KRSRI autonomous fire-fighting robot contest—focusing on arena navigation, obstacle avoidance, and real-time responsiveness.
                </p>
              </div>

              <div className="info-card">
                <h3>Communication Protocols</h3>
                <p>
                  Specializing in reliable device communication: UART/USART serial bridges, packet framing with checksum verification, MQTT IoT telemetry, and bus protocols like I²C, SPI, and CAN.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="section" id="projects">
          <div className="section-container">
            <div className="section-header">
              <span className="section-label">FEATURED WORK</span>
              <h2>Selected Engineering Projects</h2>
              <p className="section-desc">
                Practical hardware and firmware implementations with verifiable source code.
              </p>
            </div>

            <div className="project-cards-container">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <div className="project-image-side">
                    <ActivityImageGallery
                      images={project.images}
                      image={project.image}
                      alt={project.title}
                      placeholderHint={project.placeholderHint}
                      recommendedFile={project.recommendedFile}
                      aspectRatio="16/10"
                    />
                  </div>

                  <div className="project-info-side">
                    <div className="project-badge-row">
                      <span className="project-category-badge">{project.category}</span>
                      <span className="project-num-tag">Project {project.number}</span>
                    </div>

                    <h3 className="project-card-title">{project.title}</h3>
                    <p className="project-card-summary">{project.summary}</p>

                    <div className="project-key-points">
                      <strong>Key Engineering Work:</strong>
                      <ul>
                        {project.highlights.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="project-tags">
                      {project.stack.map((item) => (
                        <span className="tag-pill" key={item}>
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="project-btn-row">
                      <a className="btn btn-sm btn-primary" href={project.href} target="_blank" rel="noreferrer">
                        View on GitHub
                        <IconExternal />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Experience & Activities */}
        <section className="section section-alt" id="experience">
          <div className="section-container">
            <div className="section-header">
              <span className="section-label">ACTIVITIES & EXPERIENCE</span>
              <h2>Practical Experience & Trajectory</h2>
              <p className="section-desc">
                Hands-on engineering through robotics competitions, university lab work, and leadership.
              </p>
            </div>

            <div className="experience-cards-container">
              {experience.map((item) => (
                <article className="experience-card" key={`${item.period}-${item.role}`}>
                  <div className="exp-image-side">
                    <ActivityImageGallery
                      images={item.images}
                      image={item.image}
                      alt={`${item.role} at ${item.organization}`}
                      placeholderHint={item.placeholderHint}
                      recommendedFile={item.recommendedFile}
                      aspectRatio="16/10"
                    />
                  </div>

                  <div className="exp-info-side">
                    <div className="exp-top-line">
                      <span className="exp-period-pill">{item.period}</span>
                      <span className="exp-location-text">{item.location}</span>
                    </div>

                    <h3 className="exp-title">{item.role}</h3>
                    <p className="exp-org-name">
                      <strong>{item.organization}</strong> · <span>{item.type}</span>
                    </p>

                    <p className="exp-paragraph">{item.description}</p>

                    <div className="exp-checklist">
                      <strong>Responsibilities & Outcomes:</strong>
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

        {/* Credentials & Verification */}
        <section className="section" id="credentials">
          <div className="section-container">
            <div className="section-header">
              <span className="section-label">ACHIEVEMENTS</span>
              <h2>Credentials & Competitions</h2>
              <p className="section-desc">
                Verified competitions, awards, and technical training.
              </p>
            </div>

            <div className="credentials-grid">
              {credentials.map((cred) => (
                <article className="cred-card" key={cred.title}>
                  <div className="cred-header">
                    <div className="cred-icon-wrap">
                      <IconAward />
                    </div>
                    {cred.badge && <span className="cred-badge-pill">{cred.badge}</span>}
                  </div>

                  <span className="cred-year-tag">{cred.year}</span>
                  <h3 className="cred-card-title">
                    {cred.href ? (
                      <a href={cred.href} target="_blank" rel="noreferrer" className="cred-title-link">
                        {cred.title}
                        <IconExternal />
                      </a>
                    ) : (
                      cred.title
                    )}
                  </h3>
                  <p className="cred-issuer-text">{cred.issuer}</p>
                  <p className="cred-description">{cred.detail}</p>

                  <div className="cred-photo-slot">
                    <ActivityImageGallery
                      images={cred.images}
                      image={cred.image}
                      alt={cred.title}
                      placeholderHint={cred.placeholderHint}
                      recommendedFile={cred.recommendedFile}
                      aspectRatio="4/3"
                    />
                  </div>
                </article>
              ))}
            </div>

            {/* Skills Toolkit */}
            <div className="skills-section-box">
              <div className="skills-header">
                <h3>Technical Skills & Toolkit</h3>
                <p>Core competencies in hardware, programming languages, and engineering software.</p>
              </div>

              <div className="skills-columns">
                {skillCategories.map((cat) => (
                  <div className="skill-col-card" key={cat.name}>
                    <h4 className="skill-col-title">{cat.name}</h4>
                    <div className="skill-pills-wrap">
                      {cat.skills.map((skill) => (
                        <span className="skill-badge" key={skill}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section section-alt" id="contact">
          <div className="section-container">
            <div className="contact-card">
              <div className="contact-content">
                <span className="section-label">GET IN TOUCH</span>
                <h2>Let&apos;s Connect</h2>
                <p>
                  I am open to robotics engineering internships, embedded firmware roles, and IoT collaborations. Feel free to reach out directly.
                </p>

                <div className="contact-details-list">
                  <div className="contact-detail-item">
                    <span className="cd-title">Email Address:</span>
                    <a className="cd-link" href={links.email}>
                      rizkyhabir88@gmail.com
                    </a>
                  </div>
                  <div className="contact-detail-item">
                    <span className="cd-title">Location:</span>
                    <span className="cd-val">Malang, East Java, Indonesia</span>
                  </div>
                  <div className="contact-detail-item">
                    <span className="cd-title">Profiles:</span>
                    <div className="cd-links">
                      <a href={links.github} target="_blank" rel="noreferrer">
                        GitHub ↗
                      </a>
                      <span>·</span>
                      <a href={links.linkedin} target="_blank" rel="noreferrer">
                        LinkedIn ↗
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-cta-panel">
                <a className="btn btn-primary btn-lg" href={links.email}>
                  <IconMail />
                  Send Me an Email
                </a>
                <a className="btn btn-outline btn-lg" href={links.linkedin} target="_blank" rel="noreferrer">
                  <IconLinkedin />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Clean Footer */}
      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-left">
            <span className="brand-badge">RH</span>
            <div>
              <strong>Rama Rizky Belrouzy Habir</strong>
              <p>Robotics & Telecommunications · Universitas Brawijaya</p>
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
            <a href="#top">
              Back to Top ↑
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
