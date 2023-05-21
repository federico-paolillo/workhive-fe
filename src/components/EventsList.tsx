import { EventsListItem } from "@work-hive/components/EventsListItem";
import { WHEventReply } from "@work-hive/grpc/workhive_pb";

export type EventListProps = {
  events: WHEventReply[];
};

export function EventsList({ events }: EventListProps) {
  const eventListItems = events.map((ev) => (
    <li key={ev.getId()}>
      <EventsListItem event={ev} />
    </li>
  ));

  return <ul>{eventListItems}</ul>;
}
