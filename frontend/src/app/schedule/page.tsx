"use client"

import Hero from "@/components/layout/schedule/Hero";
import Schedule from "@/components/layout/schedule/Schedule";
import ApplySection from "@/components/layout/sections/apply-section";
import {motion} from "framer-motion"
import { Separator } from "@/components/ui/items/separator"


export default function Page() {
  return (
    <>
      <motion.div      
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}  
          transition={{ duration: 0.5, ease: "easeInOut" }} >
                  <Hero />
                  <Separator className="w-[1vw]"/>
      </motion.div>
      <Schedule />

      <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="mt-[60px] mb-[48px] flex flex-col justify-center items-center">
        <Separator className="mt-[5em] mb-[5em] w-[1vw]"/>
        <ApplySection />
      </motion.div>
    </>
  );
}
