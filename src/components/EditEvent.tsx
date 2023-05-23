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

  return (
    <div className="md:flex md:flex-col md:w-full md:h-full md:items-center">
      <h2 className="text-2xl mb-4">Edit event</h2>
      <EventForm event={editableEvent} onSubmit={edit} />
    </div>
  );
}
