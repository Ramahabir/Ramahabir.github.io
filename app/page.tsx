import type { Metadata } from "next";
import Portfolio from "./portfolio";

export const metadata: Metadata = {
  title: "Rama Habir — Robotics & Telecommunications",
  description:
    "Electrical Engineering student building robotics software, embedded systems, and connected devices.",
};

export default function Home() {
  return <Portfolio />;
}
