"use client";

import Hero from "@/components/layout/schedule/Hero";
import Schedule from "@/components/layout/schedule/Schedule";
import ApplySection from "@/components/layout/sections/apply-section";
import { Separator } from "@/components/ui/items/separator";
import AnimatedSection from "@/components/layout/sections/AnimatedSection";

export default function Page() {
  return (
    <div>
      {/* Hero Section */}
      <AnimatedSection>
        <Hero />
      </AnimatedSection>
      <Separator className="w-[1vw]" />
      
      {/* Schedule Section */}
      <AnimatedSection>
        <Schedule />
      </AnimatedSection>
      <Separator className="w-[1vw]" />
      
      {/* Apply Section */}
      <AnimatedSection>
        <ApplySection />
      </AnimatedSection>
    </div>
  );
}
