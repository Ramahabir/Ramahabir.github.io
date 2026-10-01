import type { Metadata } from "next";
import Portfolio from "./portfolio";

export const metadata: Metadata = {
  title: {
    absolute: "Rama Habir | Robotics & Embedded",
  },
  description: "Rama Habir | Robotics & Embedded",
};

export default function Home() {
  return <Portfolio />;
}
