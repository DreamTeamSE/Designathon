"use client"

import { useState } from "react";
import DateToggle from "@/components/ui/Schedule/schedule_button";
import EventSchedule from "@/components/ui/Schedule/schedule_events";

export default function Schedule() {
  const [day, setDay] = useState(8);



  return (
    <div className="pt-[60px] pb-[60px] flex flex-col justify-center items-center">
      <DateToggle day={day} setDay={setDay}></DateToggle>
      <EventSchedule day={day}></EventSchedule>
    </div>
  );
}