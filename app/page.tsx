"use client";

import { HeroSlider } from "@/components/ui/hero-slider";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { PartnersSlider } from "@/components/sections/partners-slider";

import IndustriesWeServe from "@/components/sections/Industries";
import AboutPreview from "@/components/sections/About";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSlider />

      {/* About Preview */}
      <AboutPreview />

      {/* Industries We Serve */}
      <IndustriesWeServe />

      {/* Why Choose AJAB */}
      <WhyChooseUs />
    </>
  );
}
