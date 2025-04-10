"use client";

import Image from "next/image";

export default function WhyShouldYouJoin() {
  const items = [
    {
      title: "CREATE",
      alt: "Participant creating a project",
      src: "/assets/operation.png",
    },
    {
      title: "LEARN",
      alt: "Participant learning during a session",
      src: "/assets/operation.png",
    },
    {
      title: "NETWORK",
      alt: "Group of participants networking at a table",
      src: "/assets/operation.png",
    },
  ];

  return (
    <div className="flex flex-col items-center py-10 px-6 md:px-12">
      <h2 className="text-xl font-semibold mb-10 text-center">WHY SHOULD YOU JOIN?</h2>
      <div className="flex flex-wrap justify-center gap-6 w-full max-w-6xl">
        {items.map((item) => (
          <div
            key={item.title}
            className="bg-indigo-200 border-2 border-indigo-400 rounded-2xl min-w-[20rem]"
          >
            <div className="flex flex-col">
              <h3 className="text-md font-bold p-4">{item.title}</h3>
              <div className="relative w-65 h-65 overflow-hidden quarter__circle ml-auto m-4">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={500}
                  height={300}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
