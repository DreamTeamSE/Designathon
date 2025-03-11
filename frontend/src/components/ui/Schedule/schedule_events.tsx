"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";

type Event = {
  title: string;
  time: string;
};

const eventsForDay = (day: number): Event[] => {
  const eventsDay7: Event[] = [
    { title: "Breakfast", time: "10 AM - 1 PM" },
    { title: "Lunch", time: "10 AM - 1 PM" },
    { title: "Hacking Ends", time: "10 AM - 1 PM" },
    { title: "Live Judging Coordination", time: "10 AM - 1 PM" },
    { title: "Live Judging", time: "10 AM - 1 PM" },
    { title: "Winner Announcement", time: "10 AM - 1 PM" },
    { title: "Closing Ceremony", time: "10 AM - 1 PM" },
  ];

  const eventsDay8: Event[] = [
    { title: "Breakfast", time: "9 AM - 10 AM" },
    { title: "Workshop", time: "10 AM - 12 PM" },
    { title: "Lunch", time: "12 PM - 1 PM" },
    { title: "Panel Discussion", time: "1 PM - 3 PM" },
    { title: "Networking", time: "3 PM - 5 PM" },
    { title: "Closing Remarks", time: "5 PM - 6 PM" },
  ];

  return day === 7 ? eventsDay7 : eventsDay8;
};

export default function EventSchedule({day}: Readonly<{day: number}>) {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    setEvents(eventsForDay(day));
  }, [day]);

  return (
    <div className="flex flex-col items-center justify-center mt-[2em]">
      <div className="max-w-2xl space-y-3 flex flex-col items-center justify-center">
        {events.map((event, index) => (
          <Card key={index} className="border border-[#fca5a5] bg-[#fef2f2] w-[90vw]">
            <CardContent className="flex flex-row justify-between">
              <span className="font-semibold">{event.title}</span>
              <span>{event.time}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
