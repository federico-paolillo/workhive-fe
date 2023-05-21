import { fetchEvents } from "@work-hive/api/client";
import { EventsList } from "@work-hive/components/EventsList";

export default async function Home() {
  const events = await fetchEvents();
  return (
    <main>
      <EventsList events={events} />
    </main>
  );
}
