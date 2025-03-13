import Hero from "@/components/layout/schedule/Hero";
import Schedule from "@/components/layout/schedule/Schedule";
import { Separator } from "@/components/ui/separator"


export default function Page() {
  return (
    <div>
      <Hero />
      <Separator className="w-[1vw]"/>
      <Schedule />
    </div>
  );
}
