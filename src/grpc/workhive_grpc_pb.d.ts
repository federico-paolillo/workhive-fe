// package: 
// file: workhive.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as workhive_pb from "./workhive_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

interface IWHEventService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createEvent: IWHEventService_ICreateEvent;
    getEventStream: IWHEventService_IGetEventStream;
    getEvents: IWHEventService_IGetEvents;
    getEvent: IWHEventService_IGetEvent;
    updateEvent: IWHEventService_IUpdateEvent;
    deleteEvent: IWHEventService_IDeleteEvent;
    joinEvent: IWHEventService_IJoinEvent;
}

interface IWHEventService_ICreateEvent extends grpc.MethodDefinition<workhive_pb.CreateEventRequest, workhive_pb.WHEventReply> {
    path: "/WHEvent/CreateEvent";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<workhive_pb.CreateEventRequest>;
    requestDeserialize: grpc.deserialize<workhive_pb.CreateEventRequest>;
    responseSerialize: grpc.serialize<workhive_pb.WHEventReply>;
    responseDeserialize: grpc.deserialize<workhive_pb.WHEventReply>;
}
interface IWHEventService_IGetEventStream extends grpc.MethodDefinition<workhive_pb.GetEventFilterRequest, workhive_pb.WHEventReply> {
    path: "/WHEvent/GetEventStream";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<workhive_pb.GetEventFilterRequest>;
    requestDeserialize: grpc.deserialize<workhive_pb.GetEventFilterRequest>;
    responseSerialize: grpc.serialize<workhive_pb.WHEventReply>;
    responseDeserialize: grpc.deserialize<workhive_pb.WHEventReply>;
}
interface IWHEventService_IGetEvents extends grpc.MethodDefinition<workhive_pb.GetEventFilterRequest, workhive_pb.WHEventsReply> {
    path: "/WHEvent/GetEvents";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<workhive_pb.GetEventFilterRequest>;
    requestDeserialize: grpc.deserialize<workhive_pb.GetEventFilterRequest>;
    responseSerialize: grpc.serialize<workhive_pb.WHEventsReply>;
    responseDeserialize: grpc.deserialize<workhive_pb.WHEventsReply>;
}
interface IWHEventService_IGetEvent extends grpc.MethodDefinition<workhive_pb.GetEventRequest, workhive_pb.WHEventReply> {
    path: "/WHEvent/GetEvent";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<workhive_pb.GetEventRequest>;
    requestDeserialize: grpc.deserialize<workhive_pb.GetEventRequest>;
    responseSerialize: grpc.serialize<workhive_pb.WHEventReply>;
    responseDeserialize: grpc.deserialize<workhive_pb.WHEventReply>;
}
interface IWHEventService_IUpdateEvent extends grpc.MethodDefinition<workhive_pb.UpdateEventRequest, workhive_pb.WHEventReply> {
    path: "/WHEvent/UpdateEvent";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<workhive_pb.UpdateEventRequest>;
    requestDeserialize: grpc.deserialize<workhive_pb.UpdateEventRequest>;
    responseSerialize: grpc.serialize<workhive_pb.WHEventReply>;
    responseDeserialize: grpc.deserialize<workhive_pb.WHEventReply>;
}
interface IWHEventService_IDeleteEvent extends grpc.MethodDefinition<workhive_pb.DeleteEventRequest, google_protobuf_empty_pb.Empty> {
    path: "/WHEvent/DeleteEvent";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<workhive_pb.DeleteEventRequest>;
    requestDeserialize: grpc.deserialize<workhive_pb.DeleteEventRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IWHEventService_IJoinEvent extends grpc.MethodDefinition<workhive_pb.JoinEventRequest, google_protobuf_empty_pb.Empty> {
    path: "/WHEvent/JoinEvent";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<workhive_pb.JoinEventRequest>;
    requestDeserialize: grpc.deserialize<workhive_pb.JoinEventRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}

export const WHEventService: IWHEventService;

export interface IWHEventServer extends grpc.UntypedServiceImplementation {
    createEvent: grpc.handleUnaryCall<workhive_pb.CreateEventRequest, workhive_pb.WHEventReply>;
    getEventStream: grpc.handleServerStreamingCall<workhive_pb.GetEventFilterRequest, workhive_pb.WHEventReply>;
    getEvents: grpc.handleUnaryCall<workhive_pb.GetEventFilterRequest, workhive_pb.WHEventsReply>;
    getEvent: grpc.handleUnaryCall<workhive_pb.GetEventRequest, workhive_pb.WHEventReply>;
    updateEvent: grpc.handleUnaryCall<workhive_pb.UpdateEventRequest, workhive_pb.WHEventReply>;
    deleteEvent: grpc.handleUnaryCall<workhive_pb.DeleteEventRequest, google_protobuf_empty_pb.Empty>;
    joinEvent: grpc.handleUnaryCall<workhive_pb.JoinEventRequest, google_protobuf_empty_pb.Empty>;
}

export interface IWHEventClient {
    createEvent(request: workhive_pb.CreateEventRequest, callback: (error: grpc.ServiceError | null, response: workhive_pb.WHEventReply) => void): grpc.ClientUnaryCall;
    createEvent(request: workhive_pb.CreateEventRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: workhive_pb.WHEventReply) => void): grpc.ClientUnaryCall;
    createEvent(request: workhive_pb.CreateEventRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: workhive_pb.WHEventReply) => void): grpc.ClientUnaryCall;
    getEventStream(request: workhive_pb.GetEventFilterRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<workhive_pb.WHEventReply>;
    getEventStream(request: workhive_pb.GetEventFilterRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<workhive_pb.WHEventReply>;
    getEvents(request: workhive_pb.GetEventFilterRequest, callback: (error: grpc.ServiceError | null, response: workhive_pb.WHEventsReply) => void): grpc.ClientUnaryCall;
    getEvents(request: workhive_pb.GetEventFilterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: workhive_pb.WHEventsReply) => void): grpc.ClientUnaryCall;
    getEvents(request: workhive_pb.GetEventFilterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: workhive_pb.WHEventsReply) => void): grpc.ClientUnaryCall;
    getEvent(request: workhive_pb.GetEventRequest, callback: (error: grpc.ServiceError | null, response: workhive_pb.WHEventReply) => void): grpc.ClientUnaryCall;
    getEvent(request: workhive_pb.GetEventRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: workhive_pb.WHEventReply) => void): grpc.ClientUnaryCall;
    getEvent(request: workhive_pb.GetEventRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: workhive_pb.WHEventReply) => void): grpc.ClientUnaryCall;
    updateEvent(request: workhive_pb.UpdateEventRequest, callback: (error: grpc.ServiceError | null, response: workhive_pb.WHEventReply) => void): grpc.ClientUnaryCall;
    updateEvent(request: workhive_pb.UpdateEventRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: workhive_pb.WHEventReply) => void): grpc.ClientUnaryCall;
    updateEvent(request: workhive_pb.UpdateEventRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: workhive_pb.WHEventReply) => void): grpc.ClientUnaryCall;
    deleteEvent(request: workhive_pb.DeleteEventRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteEvent(request: workhive_pb.DeleteEventRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteEvent(request: workhive_pb.DeleteEventRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    joinEvent(request: workhive_pb.JoinEventRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    joinEvent(request: workhive_pb.JoinEventRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    joinEvent(request: workhive_pb.JoinEventRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class WHEventClient extends grpc.Client implements IWHEventClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createEvent(request: workhive_pb.CreateEventRequest, callback: (error: grpc.ServiceError | null, response: workhive_pb.WHEventReply) => void): grpc.ClientUnaryCall;
    public createEvent(request: workhive_pb.CreateEventRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: workhive_pb.WHEventReply) => void): grpc.ClientUnaryCall;
    public createEvent(request: workhive_pb.CreateEventRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: workhive_pb.WHEventReply) => void): grpc.ClientUnaryCall;
    public getEventStream(request: workhive_pb.GetEventFilterRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<workhive_pb.WHEventReply>;
    public getEventStream(request: workhive_pb.GetEventFilterRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<workhive_pb.WHEventReply>;
    public getEvents(request: workhive_pb.GetEventFilterRequest, callback: (error: grpc.ServiceError | null, response: workhive_pb.WHEventsReply) => void): grpc.ClientUnaryCall;
    public getEvents(request: workhive_pb.GetEventFilterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: workhive_pb.WHEventsReply) => void): grpc.ClientUnaryCall;
    public getEvents(request: workhive_pb.GetEventFilterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: workhive_pb.WHEventsReply) => void): grpc.ClientUnaryCall;
    public getEvent(request: workhive_pb.GetEventRequest, callback: (error: grpc.ServiceError | null, response: workhive_pb.WHEventReply) => void): grpc.ClientUnaryCall;
    public getEvent(request: workhive_pb.GetEventRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: workhive_pb.WHEventReply) => void): grpc.ClientUnaryCall;
    public getEvent(request: workhive_pb.GetEventRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: workhive_pb.WHEventReply) => void): grpc.ClientUnaryCall;
    public updateEvent(request: workhive_pb.UpdateEventRequest, callback: (error: grpc.ServiceError | null, response: workhive_pb.WHEventReply) => void): grpc.ClientUnaryCall;
    public updateEvent(request: workhive_pb.UpdateEventRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: workhive_pb.WHEventReply) => void): grpc.ClientUnaryCall;
    public updateEvent(request: workhive_pb.UpdateEventRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: workhive_pb.WHEventReply) => void): grpc.ClientUnaryCall;
    public deleteEvent(request: workhive_pb.DeleteEventRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteEvent(request: workhive_pb.DeleteEventRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteEvent(request: workhive_pb.DeleteEventRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public joinEvent(request: workhive_pb.JoinEventRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public joinEvent(request: workhive_pb.JoinEventRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public joinEvent(request: workhive_pb.JoinEventRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}
