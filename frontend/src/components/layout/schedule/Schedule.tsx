"use client"

import { useState } from "react";
import DateToggle from "@/components/ui/schedule/schedule_button";
import EventSchedule from "@/components/ui/schedule/schedule_events";

export default function Schedule() {
  const [day, setDay] = useState(8);



  return (
    <div className="pt-[60px] flex flex-col items-center">
      <DateToggle day={day} setDay={setDay}></DateToggle>
      <EventSchedule day={day}></EventSchedule>
    </div>
  );
}