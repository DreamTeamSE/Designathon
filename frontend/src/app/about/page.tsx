"use client";

import React from "react";
import Hero from "@/components/layout/about/Hero";
import WhatIsDesign from "@/components/layout/about/WhatIsDesign";
import { Separator } from "@/components/ui/items/separator";
import FAQs from "@/components/layout/about/FAQs";
import ApplySection from "@/components/layout/sections/apply-section";
import AnimatedSection from "@/components/layout/sections/AnimatedSection";

export default function Page() {
  return (
    <div>
      {/* Hero Section */}
      <AnimatedSection>
        <Hero />
      </AnimatedSection>

      <Separator className="w-[2vw]" />

      {/* What Is Design Section */}
      <AnimatedSection>
        <WhatIsDesign />
      </AnimatedSection>

      <Separator className="w-[2vw]" />

      {/* FAQs Section */}
      <AnimatedSection>
        <FAQs />
      </AnimatedSection>

      <Separator className="w-[2vw]" />

      {/* Apply Section */}
      <AnimatedSection>
        <ApplySection />
      </AnimatedSection>
    </div>
  );
}