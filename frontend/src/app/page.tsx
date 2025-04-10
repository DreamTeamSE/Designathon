"use client";

import Hero from "@/components/layout/landing_page/Hero";
import { Separator } from "@/components/ui/items/separator";
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
      <AnimatedSection>
        <ApplySection />
      </AnimatedSection>
    </div>
  );
}
