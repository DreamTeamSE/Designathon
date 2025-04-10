"use client";

import Hero from "@/components/layout/home/Hero";
import { Separator } from "@/components/ui/items/separator";
import ApplySection from "@/components/layout/sections/apply-section";
import AnimatedSection from "@/components/layout/sections/AnimatedSection";
import WhatIsDesign from "@/components/layout/home/WhatIsDesign";
import WhyShouldYouJoin from "@/components/layout/home/WhyJoin";

export default function Page() {
  return (
    <div>
      {/* Hero Section */}
      <AnimatedSection>
        <Hero />
      </AnimatedSection>
      <Separator className="w-[1vw]" />
      <AnimatedSection>
        <WhatIsDesign />
      </AnimatedSection>
      <AnimatedSection>
        <WhyShouldYouJoin />
      </AnimatedSection>
      <AnimatedSection>
        <ApplySection />
      </AnimatedSection>

    </div>
  );
}
