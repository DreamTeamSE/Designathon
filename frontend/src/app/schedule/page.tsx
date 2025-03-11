import Hero from "@/components/layout/Schedule/Hero";
import Schedule from "@/components/layout/Schedule/Schedule";
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
