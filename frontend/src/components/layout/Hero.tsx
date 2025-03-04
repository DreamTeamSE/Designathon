
import { Button } from "@/components/ui/button"


export default function Hero() {
    return (
      <div className="min-h-[calc(100vh-60px)] flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-[6em] text-primary">Designathon</h1>
        <h1 className="text-xl md:text-[2em] mt-[16px] text-secondary">November 7th-8th, 2025</h1>
        <Button className="my-4 mt-[24px]" variant="default" size="lg">Register Today!</Button>
      </div>
    );
  }
  