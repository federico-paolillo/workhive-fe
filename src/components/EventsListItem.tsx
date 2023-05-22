import { PlainEvent } from "@work-hive/models/PlainEvent";
import Link from "next/link";

export type EventProps = {
  event: PlainEvent;
};

export function EventsListItem({ event }: EventProps) {
  const startDate = new Date(event.startDateTime);
  const endDate = new Date(event.endDateTime);

  const startDateString = startDate.toLocaleDateString("en-US");
  const endDateString = endDate.toLocaleDateString("en-US");

  return (
    <div>
      <p>{event.description}</p>
      <p>{event.location}</p>
      <p>{event.maxGuest}</p>
      <p>{event.eventType}</p>
      <p>{startDateString}</p>
      <p>{endDateString}</p>
      <Link href={`/edit/${event.id}`}>edit</Link>
    </div>
  );
}
