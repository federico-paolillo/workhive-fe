"use client";

import { createEvent } from "@work-hive/api/client";
import { EventForm } from "@work-hive/components/EventForm";
import { EventToEdit } from "@work-hive/models/EventToEdit";
import { useRouter } from "next/router";

export default function New() {
  const router = useRouter();

  const eventToEdit: EventToEdit = {
    startDateTime: new Date(),
    endDateTime: new Date(),
    description: "",
    eventType: 1,
    location: "",
    maxGuest: 1,
  };

  async function newEvent(event: EventToEdit) {
    if (event) {
      await createEvent(event);
      router.push("/");
    }
  }

  return <EventForm event={eventToEdit} onSubmit={newEvent} />;
}
