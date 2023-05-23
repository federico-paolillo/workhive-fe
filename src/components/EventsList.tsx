import { EventsListItem } from "@work-hive/components/EventsListItem";
import { PlainEvent } from "@work-hive/models/PlainEvent";
import style from "@work-hive/theme/EventList.module.css";

export type EventListProps = {
  events: PlainEvent[];
};

export function EventsList({ events }: EventListProps) {
  const eventListItems = events.map((ev) => (
    <EventsListItem event={ev} />
  ));

  return (
    <div className={["grid grid grid-cols-1 md:grid-cols-4 2xl:grid-cols-5 gap-4", style.event_list].join(" ")}>{eventListItems}</div>
  );
}
