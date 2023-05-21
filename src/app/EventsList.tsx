import { fetchEvents } from "@work-hive/api/client";
import EventsListItem from "@work-hive/app/EventsListItem";

export default async function EventsList() {
  const events = await fetchEvents();

  const eventListItems = events.map((ev) => (
    <li key={ev.getId()}>
      <EventsListItem event={ev} />
    </li>
  ));

  return <ul>{eventListItems}</ul>;
}
