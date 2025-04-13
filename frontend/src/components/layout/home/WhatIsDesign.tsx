"use client";

import AnimatedSection from "@/components/layout/sections/AnimatedSection";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      {/* What is Designathon Section */}
      <AnimatedSection>
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 px-6 lg:px-12 py-10">
          <div className="flex-1 flex justify-center items-center p-4">
            <div className="overflow-hidden rounded-2xl shadow-md mx-auto w-full max-w-[500px]">
              <Image
                src="/assets/what_is_designathon.png"
                alt="Designathon team in front of a presentation screen"
                width={500}
                height={200}
                className="object-cover w-full h-[50vw] lg:h-[30vw]"
              />
            </div>
          </div>
          <div className="flex-1 p-4 text-center lg:text-left">
            <h2 className="text-[40px] font-semibold mb-4">WHAT IS DESIGNATHON?</h2>
            <p className="text-xl text-muted-foreground mb-4 leading-9">
              Designathon is a 24-hour hackathon focused on creating innovative healthcare solutions, both in software and physical form. Participants will collaborate in teams, receive mentorship from industry professionals, and attend workshops, culminating in a live demo session and judging.
            </p>
            <p className="text-xl text-muted-foreground leading-9">
              The event provides a dynamic environment for students of all experience levels to develop impactful projects while networking with peers and experts. With sponsorship opportunities, prizes for top teams, and a platform to showcase ideas, Designathon fosters creativity and technological advancement in healthcare.
            </p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
