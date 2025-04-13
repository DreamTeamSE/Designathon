"use client";

import Image from "next/image";

export default function Hero() {
    return (
        <div className="pt-[60px] pb-[48px] flex flex-col justify-center items-center">
            <span className="flex flex-row font-bayon select-none items-center">
                <h1 className="text-4xl md:text-[6em] font-extrabold font-bayon relative group">
                    DESIGNATH
                </h1>
                <Image
                    src="/assets/transparent_heart.png"
                    alt="X"
                    width={80}
                    height={80}
                    className="object-cover w-[32px] h-[32px] md:w-[80px] md:h-[80px] -translate-y-[3px] md:-translate-y-[10px]"
                />
                <h1 className="text-4xl md:text-[6em] font-extrabold font-bayon">N</h1>
            </span>
            <h1 className="text-xl md:text-[2em] mt-[8px]  font-bold text-primary font-bayon">
                Brought to you by Dream Team Engineering
            </h1>
        </div>
    );
}
