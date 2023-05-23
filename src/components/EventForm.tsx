"use client";

import { FormEvent, useState } from "react";
import { toYyyymmdd } from "@work-hive/utils/date";
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
    <form onSubmit={handleSubmit} className="p-6">
      <div className="mb-6">
        <label
          htmlFor="location"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Location
        </label>
        <input
          type="text"
          id="location"
          onChange={(evt) => setLocation(evt.target.value)}
          value={location}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="description"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Description
        </label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(evt) => setDescription(evt.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="number"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Event Type
        </label>
        <input
          type="number"
          id="event_type"
          value={eventType}
          onChange={(evt) => setEventType(Number(evt.target.value))}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="guest"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Max. Guests
        </label>
        <input
          type="number"
          id="guest"
          value={maxGuest}
          onChange={(evt) => setMaxGuest(Number(evt.target.value))}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div className="relative max-w-sm mb-6">
        <label
          htmlFor="startDate"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Start date
        </label>
        <input
          value={startDateTime}
          id="startDate"
          max={endDateTime}
          onChange={(evt) => setStartDateTime(evt.target.value)}
          type="date"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Start Date"
        />
      </div>
      <div className="relative max-w-sm">
        <label
          htmlFor="endDate"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          End date
        </label>
        <input
          value={endDateTime}
          id="endDate"
          min={startDateTime}
          onChange={(evt) => setEndDateTime(evt.target.value)}
          type="date"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="End Date"
        />
      </div>

      <button
        className="w-full mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded-lg"
        type="submit"
      >
        Save
      </button>
    </form>
  );
}
