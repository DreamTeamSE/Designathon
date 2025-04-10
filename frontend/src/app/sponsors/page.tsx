"use client";

import Hero from "@/components/layout/sponsors/Hero";
import { Separator } from "@/components/ui/items/separator";
import Sponsors from "@/components/layout/sponsors/Sponsors";
import ApplySection from "@/components/layout/sections/apply-section";
import AnimatedSection from "@/components/layout/sections/AnimatedSection";

export default function Page() {
  return (
    <div>
      {/* Hero Section */}
      <AnimatedSection>
        <Hero />
      </AnimatedSection>
      <Separator className="w-[1vw]" />

      {/* Sponsors Section */}
      <AnimatedSection>
        <Sponsors />
      </AnimatedSection>
      <Separator className="w-[1vw]" />

      {/* Apply Section */}
      <AnimatedSection>
        <ApplySection />
      </AnimatedSection>
    </div>
  );
}
