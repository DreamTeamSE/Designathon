import Hero from "@/components/layout/sponsors/Hero";
import { Separator } from "@/components/ui/items/separator"
import Sponsors from "@/components/layout/sponsors/Sponsors";
import ApplySection from "@/components/layout/sections/apply-section";


export default function Page() {
  return (
    <div>
      <Hero />
      <Separator className="w-[1vw]"/>
      <Sponsors />
      <Separator className="w-[1vw]"/>
      <ApplySection />
    </div>
  );
}
