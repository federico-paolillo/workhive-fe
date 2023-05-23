import { JoinButton } from "@work-hive/components/JoinButton";
import { EventType, PlainEvent } from "@work-hive/models/PlainEvent";
import style from "@work-hive/theme/EventListItem.module.css";
import { toRelativeDate } from "@work-hive/utils/date";
import Image from "next/image";

export type EventProps = {
  event: PlainEvent;
};

export function EventsListItem({ event }: EventProps) {
  const startDate = new Date(event.startDateTime);
  const startDateString = toRelativeDate(startDate);

  return (
    <div className="block max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <Image
          alt="eventimage"
          src="/images/file_not_found.png"
          width={200}
          height={200}
          className={style.event_image}
        />
      </div>
      <div className="mt-4 block justify-between p-6">
        <h1 className="text-xl text-gray-600 font-bold">{startDateString}</h1>
        <p className="mt-1 text-2xl font-bold">{EventType[event.eventType]}</p>
        <p className="mt-2 text-lg font-medium text-gray-500">
          {event.description}
        </p>
        <JoinButton id={event.id} />
      </div>
    </div>
  );
}
