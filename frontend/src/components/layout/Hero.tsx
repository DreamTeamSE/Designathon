
import { Button } from "@/components/ui/button"


export default function Hero() {
    return (
      <div className="min-h-[calc(100vh-60px)] flex flex-col justify-center items-center">
        <span className="flex flex-row">
        <h1 className="text-4xl md:text-[6em] text-primary font-bayon">DESIGNATH</h1>
        <h1 className="text-4xl md:text-[6em] text-primary font-bayon">O</h1>
        <h1 className="text-4xl md:text-[6em] text-primary font-bayon">N</h1>
        </span>
        
        <h1 className="text-xl md:text-[2em] mt-[16px] text-secondary font-bayon">November 7th-8th, 2025</h1>
        <a href="https://form.typeform.com/to/SX2PnmnU" target="_blank">
          <Button className="my-4 mt-[24px]" variant="default" size="lg">Register Today!</Button>
        </a>
      </div>
    );
  }
  