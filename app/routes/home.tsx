import type { Route } from "./+types/home";
import { GrowthStationLanding } from "../components/landing/GrowthStationLanding";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Growth Station | Strategic Growth Partner — Egypt & GCC" },
    {
      name: "description",
      content:
        "We partner with ambitious businesses across Egypt & the GCC to build powerful brands and drive measurable growth.",
    },
  ];
}

export default function Home() {
  return <GrowthStationLanding />;
}
