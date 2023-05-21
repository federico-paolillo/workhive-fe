"use client";

import { FormEvent, useState } from "react";
import { EventToEdit } from "@work-hive/models/EventToEdit";

export type EventFormProps = {
  event: EventToEdit;
  onSubmit: (event: EventToEdit) => void;
};

export function EventForm({ event, onSubmit }: EventFormProps) {
  //TODO: Awful, dirty, terrible. Quick. We can clean this mess up later
  const [location, setLocation] = useState(event.location);
  const [description, setDescription] = useState(event.description);
  const [eventType, setEventType] = useState(event.eventType);
  const [maxGuest, setMaxGuest] = useState(event.maxGuest);
  const [startDateTime, setStartDateTime] = useState(event.startDateTime);
  const [endDateTime, setEndDateTime] = useState(event.endDateTime);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit({
      location,
      description,
      eventType,
      maxGuest,
      startDateTime,
      endDateTime,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Location</label>
        <input
          type="text"
          value={location}
          onChange={(evt) => setLocation(evt.target.value)}
        ></input>
      </div>
      <div>
        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={(evt) => setDescription(evt.target.value)}
        ></input>
      </div>
      <div>
        <label>Event Type</label>
        <input
          type="number"
          value={eventType}
          onChange={(evt) => setEventType(Number(evt.target.value))}
        ></input>
      </div>
      <div>
        <label>Max. Guests</label>
        <input
          type="number"
          value={maxGuest}
          onChange={(evt) => setMaxGuest(Number(evt.target.value))}
        ></input>
      </div>
      <div>
        <label>Start Date</label>
        <input
          type="date"
          value={String(startDateTime)}
          onChange={(evt) => setStartDateTime(new Date(evt.target.value))}
        ></input>
      </div>
      <div>
        <label>End Date</label>
        <input
          type="date"
          value={String(endDateTime)}
          onChange={(evt) => setEndDateTime(new Date(evt.target.value))}
        ></input>
      </div>
      <input type="Submit">Save</input>
    </form>
  );
}
