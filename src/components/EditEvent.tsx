"use client";

import { EditableEvent } from "@work-hive/models/EditableEvent";
import { PlainEvent } from "@work-hive/models/PlainEvent";
import { useRouter } from "next/navigation";
import { EventForm } from "@work-hive/components/EventForm";
import { updateEvent } from "@work-hive/api/client";

export type EditEventProps = {
  event: PlainEvent;
};

export function EditEvent({ event }: EditEventProps) {
  const router = useRouter();

  const editableEvent: EditableEvent = {
    description: event.description,
    location: event.location,
    maxGuest: event.maxGuest,
    eventType: event.eventType,
    endDateTime: new Date(event.endDateTime),
    startDateTime: new Date(event.startDateTime),
  };

  async function edit(eventEdited: EditableEvent) {
    await updateEvent(event.id, eventEdited);
    router.push("/"); // Go back home for now
  }

  return <EventForm event={editableEvent} onSubmit={edit} />;
}
