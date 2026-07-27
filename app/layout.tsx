import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rama-habir.dev";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const socialImage = new URL("og-v2.png", `${siteUrl.replace(/\/$/, "")}/`).toString();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Rama Habir — Robotics & Telecommunications",
    template: "%s | Rama Habir",
  },
  description:
    "Electrical Engineering student building robotics software, embedded systems, and connected devices.",
  keywords: ["Rama Rizky Belrouzy Habir", "robotics", "telecommunications", "embedded systems", "STM32", "ESP32", "IoT"],
  authors: [{ name: "Rama Rizky Belrouzy Habir" }],
  icons: {
    icon: `${basePath}/favicon.svg`,
  },
  openGraph: {
    title: "Rama Habir — Robotics & Telecommunications",
    description: "Building machines that sense, communicate, and act.",
    type: "website",
    images: [{ url: socialImage, width: 1660, height: 948, alt: "Rama Habir — Robotics & Telecommunications" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rama Habir — Robotics & Telecommunications",
    description: "Building machines that sense, communicate, and act.",
    images: [socialImage],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#071126",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
