import * as grpc from "@grpc/grpc-js";
import { WHEventClient } from "@work-hive/grpc/workhive_grpc_pb";
import {
  GetEventFilterRequest,
  WHEventReply,
} from "@work-hive/grpc/workhive_pb";

const workhiveClient = new WHEventClient(
  process.env.WORKHIVE_API_ENDPOINT,
  grpc.credentials.createInsecure()
);

export async function fetchEvents(): Promise<WHEventReply[]> {
  const getEventsRequest = new GetEventFilterRequest();

  getEventsRequest.setEventtype(1); //TODO: Where is the enum ?

  const eventsStream = workhiveClient.getEventStream(getEventsRequest);

  console.log("Ooooooook");
  return new Promise<WHEventReply[]>((resolve, reject) => {
    const eventsReceived: WHEventReply[] = [];

    eventsStream.on("data", (data: WHEventReply) => eventsReceived.push(data));

    eventsStream.on("error", (error: Error) => {
      console.log(error);
      reject(error);
    });

    eventsStream.on("end", () => resolve(eventsReceived));
  });
}
