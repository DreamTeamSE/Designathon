"use client"

import { Button } from "@/components/ui/items/button";
import {motion} from "framer-motion"
import Image from "next/image";


export default function ApplySection() {
    return (
      <div 
      className="pt-[60px] pb-[48px] flex flex-col justify-center items-center">
        <h1 className="pb-[32px] text-[2em] font-bold">READY TO APPLY?</h1>
        <Button variant="default" size={"xl"}>Register Now</Button>
      </div>
    );
  }
  