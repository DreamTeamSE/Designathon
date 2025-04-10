"use client";

import Hero from "@/components/layout/prizes/Hero";
import { Separator } from "@/components/ui/items/separator";
import Prizes from "@/components/layout/prizes/Prizes";
import ApplySection from "@/components/layout/sections/apply-section";
import AnimatedSection from "@/components/layout/sections/AnimatedSection";
import React from "react";

export default function Page() {
  return (
    <div>
      {/* Hero Section */}
      <AnimatedSection>
        <Hero />
      </AnimatedSection>

      <Separator className="w-[1vw]" />

      {/* Prizes Section */}
      <AnimatedSection>
        <Prizes />
      </AnimatedSection>

      <Separator className="w-[1vw]" />

      {/* Apply Section */}
      <AnimatedSection>
        <ApplySection />
      </AnimatedSection>
    </div>
  );
}
