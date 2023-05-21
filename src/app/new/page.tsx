"use client";

import { EventForm } from "@work-hive/components/EventForm";
import { EventToEdit } from "@work-hive/models/EventToEdit";

export default function New() {
  const newEvent: EventToEdit = {
    startDateTime: new Date(),
    endDateTime: new Date(),
    description: "",
    eventType: 1,
    location: "",
    maxGuest: 1,
  };

  async function onSubmit(event: EventToEdit) {}

  return <EventForm event={newEvent} onSubmit={onSubmit} />;
}
