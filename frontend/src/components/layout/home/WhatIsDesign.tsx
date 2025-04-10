"use client";

import Hero from "@/components/layout/home/Hero";
import { Separator } from "@/components/ui/items/separator";
import ApplySection from "@/components/layout/sections/apply-section";
import AnimatedSection from "@/components/layout/sections/AnimatedSection";
import Image from "next/image";
import { Card } from "@/components/ui/items/card";

export default function Page() {
  return (
    <div>
      {/* What is Designathon Section */}
      <AnimatedSection>
        <div className="flex flex-col md:flex-row items-start justify-center gap-8 px-6 md:px-12 py-10">
          <Card className="overflow-hidden rounded-2xl shadow-md mx-auto">
            <Image
              src="/images/designathon-info.png"
              alt="Designathon team in front of a presentation screen"
              width={400}
              height={300}
              className="object-cover h-full w-full"
            />
          </Card>
          <div className="max-w-xl mx-auto">
            <h2 className="text-xl font-semibold mb-4">WHAT IS DESIGNATHON?</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Designathon is a 24-hour hackathon focused on creating innovative healthcare solutions, both in software and physical form. Participants will collaborate in teams, receive mentorship from industry professionals, and attend workshops, culminating in a live demo session and judging.
            </p>
            <p className="text-sm text-muted-foreground">
              The event provides a dynamic environment for students of all experience levels to develop impactful projects while networking with peers and experts. With sponsorship opportunities, prizes for top teams, and a platform to showcase ideas, Designathon fosters creativity and technological advancement in healthcare.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <Separator className="w-[1vw]" />

      <AnimatedSection>
        <ApplySection />
      </AnimatedSection>
    </div>
  );
}
