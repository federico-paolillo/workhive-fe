import { EventsListItem } from "@work-hive/components/EventsListItem";
import { PlainEvent } from "@work-hive/models/PlainEvent";
import style from '../theme/eventList.module.css'

export type EventListProps = {
  events: PlainEvent[];
};

export function EventsList({ events }: EventListProps) {
  const eventListItems = events.map((ev) => (
    <div>
      <EventsListItem event={ev} />
    </div>
  ));

  return <div className={["flex", style.event_list].join(' ')}>{eventListItems}</div>;
}
