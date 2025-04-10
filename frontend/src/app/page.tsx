import Hero from "@/components/layout/landing_page/Hero";
import { Separator } from "@/components/ui/items/separator"
import ApplySection from "@/components/layout/sections/apply-section"

export default function Page() {
  return (
    <div>
      <Hero />
      <Separator className="w-[1vw]"/>
      <ApplySection />
    </div>
  );
}
