"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    return (
        <div className="pt-[60px] pb-[48px] flex flex-col justify-center items-center">
            <span className="flex flex-row font-bayon select-none">
                <h1 className="text-4xl md:text-[6em] relative group">
                    DESIGNATH
                </h1>
                <Image
                    src="/assets/transparent_heart.png"
                    alt="X"
                    width={100}
                    height={100}
                    className="object-cover animate-move relative -translate-y-[8px]"
                />
                <h1 className="text-4xl md:text-[6em]">N</h1>
            </span>
            <h1 className="text-xl md:text-[2em] mt-[8px] text-primary font-bayon">
                Brought to you by Dream Team Engineering
            </h1>
        </div>
    );
}
