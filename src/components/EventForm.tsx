"use client";

import { FormEvent, useState } from "react";
import { toYyyymmdd } from "@work-hive/utils/date";
import { EditableEvent } from "@work-hive/models/EditableEvent";

export type EventFormProps = {
  event: EditableEvent;
  onSubmit: (event: EditableEvent) => void;
};

export function EventForm({ event, onSubmit }: EventFormProps) {
  const startDateTimeString = toYyyymmdd(event.startDateTime).slice(0, -5); //This is just...horrifying
  const endDateTimeString = toYyyymmdd(event.endDateTime).slice(0, -5);

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
    <form
      onSubmit={handleSubmit}
      className="bg-colore-card md:w-2/3 p-6 md:border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
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
        <textarea
          id="description"
          value={description}
          onChange={(evt) => setDescription(evt.target.value)}
          className="h-48 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div className="max-w-sm mb-6">
        <label
          htmlFor="number"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Event Type
        </label>
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
          value={eventType}
          onChange={(evt) => setEventType(Number(evt.target.value))}
        >
          <option value={1}>Work</option>
          <option value={2}>Fun</option>
          <option value={4}>Online</option>
          <option value={8}>Babysitting</option>
          <option value={4}>Online</option>
          <option value={3}>Work & Fun</option>
        </select>
      </div>
      <div className="max-w-sm mb-6">
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
      <div className="max-w-sm mb-6">
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
          type="datetime-local"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Start Date"
        />
      </div>
      <div className="max-w-sm mb-6">
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
          type="datetime-local"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="End Date"
        />
      </div>

      <button
        className="mt-4 bg-orange-400 hover:bg-orange-500 text-black font-bold py-2 px-4 border border-orange-500 rounded-lg"
        type="submit"
      >
        Save
      </button>
    </form>
  );
}
