import Hero from "@/components/layout/sponsors/Hero";
import { Separator } from "@/components/ui/items/separator"
import Sponsors from "@/components/layout/sponsors/Sponsors";


export default function Page() {
  return (
    <div>
      <Hero />
      <Separator className="w-[1vw]"/>
      <Sponsors />
    </div>
  );
}
