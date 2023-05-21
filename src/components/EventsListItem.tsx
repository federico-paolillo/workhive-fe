import { WHEventReply } from "@work-hive/grpc/workhive_pb";

export type EventProps = {
  event: WHEventReply;
};

export function EventsListItem({ event }: EventProps) {
  return (
    <div>
      <p>{event.getDescription()}</p>
      <p>{event.getLocation()}</p>
      <p>{event.getMaxguest()}</p>
      <p>{event.getEventtype()}</p>
    </div>
  );
}
