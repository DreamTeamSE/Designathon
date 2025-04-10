"use client";

import { Button } from "@/components/ui/items/button";

export default function ApplySection() {
    return (
        <div className="py-[5em] min-h-[25vh] flex flex-col justify-center items-center">
            <h1 className="pb-[32px] text-[2em] font-bold">READY TO APPLY?</h1>
            <a href="https://form.typeform.com/to/SX2PnmnU" target="_blank" rel="noopener noreferrer">
          <Button variant="default" size={"xl"}>Register Now</Button>
            </a>
        </div>
    );
}