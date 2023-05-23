import { EventsListItem } from "@work-hive/components/EventsListItem";
import { PlainEvent } from "@work-hive/models/PlainEvent";

export type EventListProps = {
  events: PlainEvent[];
};

export function EventsList({ events }: EventListProps) {
  const eventListItems = events.map((ev) => (
    <EventsListItem key={ev.id} event={ev} />
  ));

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 2xl:grid-cols-5 gap-4">
      {eventListItems}
    </div>
  );
}
