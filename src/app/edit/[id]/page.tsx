"use client";

import { fetchEvent } from "@work-hive/api/client";
import { EventForm } from "@work-hive/components/EventForm";
import { EventToEdit } from "@work-hive/models/EventToEdit";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export type EditPageParams = {
  id: string;
};

export type EditProps = {
  params: EditPageParams;
};

export default async function Edit({ params }: EditProps) {
  const router = useRouter();
  const [eventToEdit, setEventToEdit] = useState<EventToEdit | null>(null);

  useEffect(() => {
    const doFetchEvent = async () => {
      const event = await fetchEvent(params.id);
      setEventToEdit({
        description: event.getDescription(),
        location: event.getLocation(),
        eventType: event.getEventtype(),
        maxGuest: event.getMaxguest(),
        endDateTime: event.getEnddatetime(),
        startDateTime: event.getStartdatetime(),
      });
    };

    doFetchEvent().catch(console.error);
  }, [params]);

  async function updateEvent(event: EventToEdit) {
    if (event) {
      await updateEvent(event);
      router.push("/");
    }
  }

  if (eventToEdit) {
    return <EventForm event={eventToEdit} onSubmit={updateEvent} />;
  }

  return null;
}
