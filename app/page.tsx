"use client";

import { HeroSlider } from "@/components/ui/hero-slider";
// import { ServicesPreview } from "@/components/sections/services-preview";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { PartnersSlider } from "@/components/sections/partners-slider";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { siteConfig } from "@/lib/site-config";
import AboutPage from "./about/page";
import IndustriesPage from "./industries/page";
import IndustriesWeServe from "@/components/sections/Industries";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSlider />

      {/* About Preview */}
      <AboutPage />

      {/* Services Preview
      <ServicesPreview /> */}

      {/* Industries We Serve */}
      <IndustriesWeServe />

      {/* Why Choose AJAB */}
      <WhyChooseUs />

      {/* Partners */}
      <PartnersSlider />
    </>
  );
}
