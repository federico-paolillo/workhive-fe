import EventsList from "@work-hive/app/EventsList";

/* @ts-expect-error Async Server Component */

export default function Home() {
  return (
    <main>
      <EventsList />
    </main>
  );
}
