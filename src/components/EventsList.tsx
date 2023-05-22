import { EventsListItem } from "@work-hive/components/EventsListItem";
import { PlainEvent } from "@work-hive/models/PlainEvent";

export type EventListProps = {
  events: PlainEvent[];
};

export function EventsList({ events }: EventListProps) {
  const eventListItems = events.map((ev) => (
    <li key={ev.id}>
      <EventsListItem event={ev} />
    </li>
  ));

  return <ul>{eventListItems}</ul>;
}
