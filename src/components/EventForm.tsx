"use client";

import { FormEvent, useState } from "react";
import { toYyyymmdd } from "@work-hive/utils/toYyyymmdd";
import { EditableEvent } from "@work-hive/models/EditableEvent";

export type EventFormProps = {
  event: EditableEvent;
  onSubmit: (event: EditableEvent) => void;
};

export function EventForm({ event, onSubmit }: EventFormProps) {
  const startDateTimeString = toYyyymmdd(event.startDateTime);
  const endDateTimeString = toYyyymmdd(event.endDateTime);

  //TODO: Awful, dirty, terrible. Quick. We can clean this mess up later
  const [location, setLocation] = useState(event.location);
  const [description, setDescription] = useState(event.description);
  const [eventType, setEventType] = useState(event.eventType);
  const [maxGuest, setMaxGuest] = useState(event.maxGuest);
  const [startDateTime, setStartDateTime] = useState(startDateTimeString);
  const [endDateTime, setEndDateTime] = useState(endDateTimeString);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const startDateTimeDate = new Date(startDateTime);
    const endDateTimeDate = new Date(endDateTime);

    onSubmit({
      location,
      description,
      eventType,
      maxGuest,
      startDateTime: startDateTimeDate,
      endDateTime: endDateTimeDate,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Location</label>
        <input
          type="text"
          value={location}
          required
          onChange={(evt) => setLocation(evt.target.value)}
        />
      </div>
      <div>
        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={(evt) => setDescription(evt.target.value)}
        />
      </div>
      <div>
        <label>Event Type</label>
        <input
          type="number"
          required
          value={eventType}
          onChange={(evt) => setEventType(Number(evt.target.value))}
        />
      </div>
      <div>
        <label>Max. Guests</label>
        <input
          type="number"
          required
          value={maxGuest}
          onChange={(evt) => setMaxGuest(Number(evt.target.value))}
        />
      </div>
      <div>
        <label>Start Date</label>
        <input
          type="date"
          required
          value={startDateTime}
          onChange={(evt) => setStartDateTime(evt.target.value)}
        />
      </div>
      <div>
        <label>End Date</label>
        <input
          type="date"
          required
          value={endDateTime}
          onChange={(evt) => setEndDateTime(evt.target.value)}
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
}
