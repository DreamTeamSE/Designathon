import Image from "next/image";



export default function WhatIsDesign() {
    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 h-min py-[52px]">
            <div className="flex items-center justify-center">
                <Image
                    src="/assets/transparent_heart.png"
                    alt="Designathon Heart Logo"
                    width={250}
                    height={250}
                    className="object-contain animate-move relative h-[40vw] md:h-[20vw] w-auto"
                />
            </div>
     
            <div className="px-8 xl:pr-[200px] xl:px-[0px] px-[32px] text-center xl:text-left">
                <h1 className="mt-[16px] text-[40px] font-bold">WHAT IS DESIGNATHON?</h1>
                <div className="mt-[32px] text-[18px] flex flex-col gap-[24px]">
                    <p>Designathon is a 24-hour hackathon focused on creating innovative healthcare solutions, both in software and physical form. Participants will collaborate in teams, receive mentorship from industry professionals, and attend workshops, culminating in a live demo session and judging.</p>
                    <p>The event provides a dynamic environment for students of all experience levels to develop impactful projects while networking with peers and experts. With sponsorship opportunities, prizes for top teams, and a platform to showcase ideas, Designathon fosters creativity and technological advancement in healthcare.</p> 
                </div>
            </div>
        </div>
    );
}
