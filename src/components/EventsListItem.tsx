import { JoinButton } from "@work-hive/components/JoinButton";
import { EventType, PlainEvent } from "@work-hive/models/PlainEvent";
import style from "@work-hive/theme/EventListItem.module.css";
import { toRelativeDate } from "@work-hive/utils/date";
import Image from "next/image";
import Link from "next/link";
import { EditButton } from "./EditButton";

export type EventProps = {
  event: PlainEvent;
};

export function EventsListItem({ event }: EventProps) {
  const startDate = new Date(event.startDateTime);
  const startDateString = toRelativeDate(startDate);

  function getImageFromEventType(eventType: EventType): string {
    switch (eventType) {
      case EventType.Work:
        return "https://picsum.photos/id/7/300/200";
      case EventType.Fun:
        return "https://picsum.photos/id/16/300/200";
      case EventType.Babysitting:
        return "https://picsum.photos/id/822/300/200";
      case EventType.WorkAndFun:
        return "https://picsum.photos/id/42/300/200";
      default:
        return "https://picsum.photos/id/10/300/200";
    }
  }

  return (
    <div
      className="flex flex-col relative max-w-sm bg-colore-card border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      key={event.id}
    >
      <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-colore-card lg:aspect-none group-hover:opacity-75 lg:h-80">
        <Image
          alt="eventimage"
          src={getImageFromEventType(event.eventType)}
          width={200}
          height={200}
          className={style.event_image}
        />
      </div>
      <div className="mt-4 block justify-between p-4">
        <h1 className="text-xl text-gray-600 font-bold">{startDateString}</h1>
        <p className="mt-1 text-2xl font-bold">{EventType[event.eventType]}</p>
        <p className="mt-2 text-lg font-medium text-gray-500">
          {event.description}
        </p>
      </div>
      <div className="mt-8 block pt-6">
        <EditButton id={event.id} />
        <JoinButton id={event.id} />
      </div>
    </div>
  );
}
