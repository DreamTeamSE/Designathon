"use client";
import {motion} from "framer-motion"
import { cn } from "@/lib/utils"; // Ensure ShadCN utils are set up

export default function DateToggle({
  day,
  setDay,
}: Readonly<{ day: number; setDay: (day: number) => void }>) {
  return (
    <div 
    className="flex items-center justify-center" >
      {/* Toggle Container with White Background */}
      <div className="relative flex bg-white text-blue-600 rounded-full p-2 w-[40vw] border border-blue-500 shadow-md">
        {/* Sliding Background (Circle) */}
        <div
          className={cn(
            "absolute top-0 left-0 h-full w-1/2 bg-blue-500 rounded-full transition-all duration-300",
            day === 9 && "translate-x-full"
          )}
        />

        {/* Toggle Option 1 */}
        <button
          className="relative flex-1 text-center py-2 rounded-full font-semibold transition-all duration-300"
          onClick={() => setDay(8)}
        >
          <span className={cn(day === 8 ? "text-white" : "text-blue-600")}>
            8 Sat
          </span>
        </button>

        {/* Toggle Option 2 */}
        <button
          className="relative flex-1 text-center py-2 rounded-full font-semibold transition-all duration-300"
          onClick={() => setDay(9)}
        >
          <span className={cn(day === 9 ? "text-white" : "text-blue-600")}>
            9 Sun
          </span>
        </button>
      </div>
    </div>
  );
}
