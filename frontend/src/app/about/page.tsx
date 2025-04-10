import Hero from "@/components/layout/about/Hero";
import WhatIsDesign from "@/components/layout/about/WhatIsDesign";
import { Separator } from "@/components/ui/items/separator"
import FAQs from "@/components/layout/about/FAQs";


export default function Page() {
  return (
    <div>
      <Hero />
      <Separator className="w-[1vw]"/>
      <WhatIsDesign />
      <Separator className="w-[1vw]"/>
      <FAQs />
      <Separator className="w-[1vw]"/>
    </div>
  );
}
