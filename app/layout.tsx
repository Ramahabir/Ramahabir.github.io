import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rama-habir.dev";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const socialImage = new URL("og-v2.png", `${siteUrl.replace(/\/$/, "")}/`).toString();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Rama Habir | Robotics & Embedded",
    template: "%s | Rama Habir",
  },
  description: "Rama Habir | Robotics & Embedded",
  keywords: ["Rama Rizky Belrouzy Habir", "robotics", "embedded systems", "STM32", "ESP32", "IoT"],
  authors: [{ name: "Rama Rizky Belrouzy Habir" }],
  icons: {
    icon: [
      { url: `${basePath}/favicon.ico`, sizes: "any" },
      { url: `${basePath}/favicon.png`, type: "image/png" },
    ],
    shortcut: `${basePath}/favicon.png`,
    apple: `${basePath}/apple-touch-icon.png`,
  },
  openGraph: {
    title: "Rama Habir | Robotics & Embedded",
    description: "Rama Habir | Robotics & Embedded",
    type: "website",
    images: [{ url: socialImage, width: 1660, height: 948, alt: "Rama Habir | Robotics & Embedded" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rama Habir | Robotics & Embedded",
    description: "Rama Habir | Robotics & Embedded",
    images: [socialImage],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07090b",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={`${basePath}/favicon.png`} type="image/png" />
        <link rel="shortcut icon" href={`${basePath}/favicon.ico`} />
        <link rel="apple-touch-icon" href={`${basePath}/apple-touch-icon.png`} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
