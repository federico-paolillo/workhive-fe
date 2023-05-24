"use server";

import * as grpc from "@grpc/grpc-js";
import { WHEventClient } from "@work-hive/grpc/workhive_grpc_pb";
import {
  CreateEventRequest,
  CreateFakeEventRequest,
  GetEventFilterRequest,
  GetEventRequest,
  JoinEventRequest,
  UpdateEventRequest,
  WHEventReply,
} from "@work-hive/grpc/workhive_pb";
import { EditableEvent } from "@work-hive/models/EditableEvent";
import { PlainEvent } from "@work-hive/models/PlainEvent";

const workhiveClient = new WHEventClient(
  process.env.WORKHIVE_API_ENDPOINT,
  grpc.credentials.createInsecure()
);

function toPlainEvent(whEventReply: WHEventReply): PlainEvent {
  return {
    id: whEventReply.getId(),
    description: whEventReply.getDescription(),
    location: whEventReply.getLocation(),
    maxGuest: whEventReply.getMaxguest() ?? 0,
    eventType: whEventReply.getEventtype(),
    startDateTime: whEventReply.getStartdatetime(),
    endDateTime: whEventReply.getEnddatetime(),
    organizerId: whEventReply.getOrganizerid(),
    guestCount: whEventReply.getGuestidsList().length,
  };
}

export async function fetchEvents(): Promise<PlainEvent[]> {
  const getEventsRequest = new GetEventFilterRequest();

  getEventsRequest.setEventtype(1); //TODO: Where is the enum ?

  const eventsStream = workhiveClient.getEventStream(getEventsRequest);

  return new Promise<PlainEvent[]>((resolve, reject) => {
    const eventsReceived: PlainEvent[] = [];

    eventsStream.on("data", (data: WHEventReply) =>
      eventsReceived.push(toPlainEvent(data))
    );

    eventsStream.on("error", (error: Error) => reject(error));
    eventsStream.on("end", () => resolve(eventsReceived));
  });
}

export async function fetchEvent(id: string): Promise<PlainEvent> {
  const getEventRequest = new GetEventRequest();

  getEventRequest.setId(id);

  return new Promise<PlainEvent>((resolve, reject) => {
    workhiveClient.getEvent(getEventRequest, (error, resp) => {
      if (error) {
        reject(error);
      } else {
        resolve(toPlainEvent(resp));
      }
    });
  });
}

export async function createEvent(event: EditableEvent): Promise<void> {
  const createEventRequest = new CreateEventRequest();

  createEventRequest.setDescription(event.description);
  createEventRequest.setEventtype(event.eventType);
  createEventRequest.setLocation(event.location);
  createEventRequest.setMaxguest(event.maxGuest);
  createEventRequest.setStartdatetime(event.startDateTime.valueOf());
  createEventRequest.setEnddatetime(event.endDateTime.valueOf());

  return new Promise<void>((resolve, reject) => {
    workhiveClient.createEvent(createEventRequest, (error, _) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}

export async function updateEvent(
  id: string,
  event: EditableEvent
): Promise<void> {
  const updateEventRequest = new UpdateEventRequest();

  updateEventRequest.setId(id);
  updateEventRequest.setDescription(event.description);
  updateEventRequest.setEventtype(event.eventType);
  updateEventRequest.setLocation(event.location);
  updateEventRequest.setMaxguest(event.maxGuest);
  updateEventRequest.setStartdatetime(event.startDateTime.valueOf());
  updateEventRequest.setEnddatetime(event.endDateTime.valueOf());

  return new Promise<void>((resolve, reject) => {
    workhiveClient.updateEvent(updateEventRequest, (error, _) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}

export async function joinEvent(id: string): Promise<void> {
  const joinEventRequest = new JoinEventRequest();

  joinEventRequest.setId(id);

  return new Promise((resolve, reject) => {
    workhiveClient.joinEvent(joinEventRequest, (error, _) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}

export async function createFakeEvent(id: string): Promise<void> {
  const createFakeEventRequest = new CreateFakeEventRequest();

  createFakeEventRequest.setOrganizerid("");

  return new Promise((resolve, reject) => {
    workhiveClient.createFakeEvent(createFakeEventRequest, (error, _) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}
