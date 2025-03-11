"use client"

import { useState } from "react";
import DateToggle from "@/components/ui/Schedule/schedule_button";
import EventSchedule from "@/components/ui/Schedule/schedule_events";

export default function Schedule() {
  const [day, setDay] = useState(7);



  return (
    <div className="pt-[60px] pb-[60px] flex flex-col justify-center items-center">
      <h1 className="text-l md:text-[1.5em] mt-[8px] text-primary font-bayon pb-[32px]">
      {day === 7 ? "Saturday, November 7th" : "Sunday, November 8th"}
      </h1>
      <DateToggle day={day} setDay={setDay}></DateToggle>
      <EventSchedule day={day}></EventSchedule>
    </div>
  );
}