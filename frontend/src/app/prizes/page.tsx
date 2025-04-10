import Hero from "@/components/layout/prizes/Hero";
import { Separator } from "@/components/ui/items/separator"
import Prizes from "@/components/layout/prizes/Prizes";


export default function Page() {
  return (
    <div>
      <Hero />
      <Separator className="w-[1vw]"/>
      <Prizes />
    </div>
  );
}
