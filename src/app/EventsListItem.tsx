import { WHEventReply } from "@work-hive/grpc/workhive_pb";

export type EventProps = {
  event: WHEventReply;
};

export default function EventsListItem(props: EventProps) {
  return <div></div>;
}
