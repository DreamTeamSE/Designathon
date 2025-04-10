import Hero from "@/components/layout/prizes/Hero";
import { Separator } from "@/components/ui/items/separator"
import Prizes from "@/components/layout/prizes/Prizes";
import ApplySection from "@/components/layout/sections/apply-section";


export default function Page() {
  return (
    <div>
      <Hero />
      <Separator className="w-[1vw]"/>
      <Prizes />
      <Separator className="w-[1vw]"/>
      <ApplySection />
    </div>
  );
}
