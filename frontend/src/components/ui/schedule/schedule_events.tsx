"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/items/card";
import { useState, useEffect } from "react";

type Event = {
  id: number
  title: string;
  time: string;
};
const eventsForDay = (day: number): Event[] => {
  const eventsDay8: Event[] = [
    { id: 1, title: "Check In", time: "10 AM - 1 PM" },
    { id: 2, title: "Opening Ceremony", time: "11:45 AM - 12 PM" },
    { id: 3, title: "Start Hacking", time: "11:45 AM - 12 PM" },
    { id: 4, title: "Dinner", time: "5:00 PM" },
    { id: 5, title: "Midnight Snack", time: "12:00 AM" },
  ];

  const eventsDay9: Event[] = [
    { id: 6, title: "Breakfast", time: "9:00 AM" },
    { id: 7, title: "Hacking Ends", time: "1:00 PM" },
    { id: 8, title: "Lunch", time: "1:00 PM" },
    { id: 9, title: "Live Juding Coordination", time: "1 PM - 2 PM" },
    { id: 10, title: "Live Juding", time: "2 PM - 3 PM" },
    { id: 11, title: "Winner Announcement ", time: "5:30 PM - 6 PM" },
    { id: 12, title: "Closing Ceremony ", time: "5:30 PM - 6 PM" }
  ];

  return day === 8 ? eventsDay8 : eventsDay9;
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
          <motion.div 
          key={event.id} 
          initial={{ opacity: 0 }}  
          animate={{ opacity: 1}} 
          transition={{ duration: .5 + 0.25 * index, ease: "easeInOut" }} 
          className="flex justify-center">
            <Card className="border border-[#fca5a5] bg-[#fef2f2] w-[90vw] my-[8px]">
              <CardContent className="flex flex-row justify-between items-center my-[6px]">
                <span className="font-semibold text-l">{event.title}</span>
                <span className="text-l">{event.time}</span>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
