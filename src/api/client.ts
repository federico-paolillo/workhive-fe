"use server";

import * as grpc from "@grpc/grpc-js";
import { WHEventClient } from "@work-hive/grpc/workhive_grpc_pb";
import {
  CreateEventRequest,
  GetEventFilterRequest,
  GetEventRequest,
  UpdateEventRequest,
  WHEventReply,
} from "@work-hive/grpc/workhive_pb";
import { EventToEdit } from "@work-hive/models/EventToEdit";

const workhiveClient = new WHEventClient(
  process.env.WORKHIVE_API_ENDPOINT,
  grpc.credentials.createInsecure()
);

export async function fetchEvents(): Promise<WHEventReply[]> {
  const getEventsRequest = new GetEventFilterRequest();

  getEventsRequest.setEventtype(1); //TODO: Where is the enum ?

  const eventsStream = workhiveClient.getEventStream(getEventsRequest);

  return new Promise<WHEventReply[]>((resolve, reject) => {
    const eventsReceived: WHEventReply[] = [];

    eventsStream.on("data", (data: WHEventReply) => eventsReceived.push(data));
    eventsStream.on("error", (error: Error) => reject(error));
    eventsStream.on("end", () => resolve(eventsReceived));
  });
}

export async function fetchEvent(id: string): Promise<WHEventReply> {
  const getEventRequest = new GetEventRequest();

  getEventRequest.setId(id);

  return new Promise<WHEventReply>((resolve, reject) => {
    workhiveClient.getEvent(getEventRequest, (error, resp) => {
      if (error) {
        reject(error);
      } else {
        resolve(resp);
      }
    });
  });
}

export async function createEvent(event: EventToEdit): Promise<WHEventReply> {
  const createEventRequest = new CreateEventRequest();

  createEventRequest.setDescription(event.description);
  createEventRequest.setEventtype(event.eventType);
  createEventRequest.setLocation(event.location);
  createEventRequest.setMaxguest(event.maxGuest);
  createEventRequest.setStartdatetime(event.startDateTime);
  createEventRequest.setEnddatetime(event.endDateTime);

  return new Promise<WHEventReply>((resolve, reject) => {
    workhiveClient.createEvent(createEventRequest, (error, resp) => {
      if (error) {
        reject(error);
      } else {
        resolve(resp);
      }
    });
  });
}

export async function updateEvent(event: EventToEdit): Promise<WHEventReply> {
  const updateEventRequest = new UpdateEventRequest();

  updateEventRequest.setDescription(event.description);
  updateEventRequest.setEventtype(event.eventType);
  updateEventRequest.setLocation(event.location);
  updateEventRequest.setMaxguest(event.maxGuest);
  updateEventRequest.setStartdatetime(event.startDateTime);
  updateEventRequest.setEnddatetime(event.endDateTime);

  return new Promise<WHEventReply>((resolve, reject) => {
    workhiveClient.updateEvent(updateEventRequest, (error, resp) => {
      if (error) {
        reject(error);
      } else {
        resolve(resp);
      }
    });
  });
}
