"use client";

import { createEvent } from "@work-hive/api/client";
import { audioWideFont } from "@work-hive/fonts";
import { EventForm } from "@work-hive/components/EventForm";
import { EditableEvent } from "@work-hive/models/EditableEvent";
import { useRouter } from "next/navigation";

export function CreateEvent() {
  const router = useRouter();

  const eventToEdit: EditableEvent = {
    startDateTime: new Date(),
    endDateTime: new Date(),
    description: "",
    eventType: 1,
    location: "",
    maxGuest: 1,
  };

  async function create(event: EditableEvent) {
    await createEvent(event);
    router.push("/"); // Head back home for now
  }

  return (
    <div className="md:flex md:flex-col md:w-full md:h-full md:items-center">
      <h2 className={`${audioWideFont.className} mb-2 text-white text-2xl`}>
        CREATE NEW EVENT
      </h2>
      <EventForm event={eventToEdit} onSubmit={create} />
    </div>
  );
}
