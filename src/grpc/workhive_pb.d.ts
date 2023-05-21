// package: 
// file: workhive.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class GetEventRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): GetEventRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetEventRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetEventRequest): GetEventRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetEventRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetEventRequest;
    static deserializeBinaryFromReader(message: GetEventRequest, reader: jspb.BinaryReader): GetEventRequest;
}

export namespace GetEventRequest {
    export type AsObject = {
        id: string,
    }
}

export class JoinEventRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): JoinEventRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): JoinEventRequest.AsObject;
    static toObject(includeInstance: boolean, msg: JoinEventRequest): JoinEventRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: JoinEventRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): JoinEventRequest;
    static deserializeBinaryFromReader(message: JoinEventRequest, reader: jspb.BinaryReader): JoinEventRequest;
}

export namespace JoinEventRequest {
    export type AsObject = {
        id: string,
    }
}

export class GetEventFilterRequest extends jspb.Message { 

    hasStartdatetime(): boolean;
    clearStartdatetime(): void;
    getStartdatetime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStartdatetime(value?: google_protobuf_timestamp_pb.Timestamp): GetEventFilterRequest;

    hasEnddatetime(): boolean;
    clearEnddatetime(): void;
    getEnddatetime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEnddatetime(value?: google_protobuf_timestamp_pb.Timestamp): GetEventFilterRequest;

    hasLocation(): boolean;
    clearLocation(): void;
    getLocation(): string | undefined;
    setLocation(value: string): GetEventFilterRequest;

    hasOrganizerid(): boolean;
    clearOrganizerid(): void;
    getOrganizerid(): string | undefined;
    setOrganizerid(value: string): GetEventFilterRequest;
    getEventtype(): number;
    setEventtype(value: number): GetEventFilterRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetEventFilterRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetEventFilterRequest): GetEventFilterRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetEventFilterRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetEventFilterRequest;
    static deserializeBinaryFromReader(message: GetEventFilterRequest, reader: jspb.BinaryReader): GetEventFilterRequest;
}

export namespace GetEventFilterRequest {
    export type AsObject = {
        startdatetime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        enddatetime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        location?: string,
        organizerid?: string,
        eventtype: number,
    }
}

export class WHEventReply extends jspb.Message { 
    getId(): string;
    setId(value: string): WHEventReply;
    getOrganizerid(): string;
    setOrganizerid(value: string): WHEventReply;

    hasStartdatetime(): boolean;
    clearStartdatetime(): void;
    getStartdatetime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStartdatetime(value?: google_protobuf_timestamp_pb.Timestamp): WHEventReply;

    hasEnddatetime(): boolean;
    clearEnddatetime(): void;
    getEnddatetime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEnddatetime(value?: google_protobuf_timestamp_pb.Timestamp): WHEventReply;
    getLocation(): string;
    setLocation(value: string): WHEventReply;

    hasMaxguest(): boolean;
    clearMaxguest(): void;
    getMaxguest(): google_protobuf_wrappers_pb.Int32Value | undefined;
    setMaxguest(value?: google_protobuf_wrappers_pb.Int32Value): WHEventReply;
    getDescription(): string;
    setDescription(value: string): WHEventReply;
    getEventtype(): number;
    setEventtype(value: number): WHEventReply;
    clearGuestidsList(): void;
    getGuestidsList(): Array<string>;
    setGuestidsList(value: Array<string>): WHEventReply;
    addGuestids(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WHEventReply.AsObject;
    static toObject(includeInstance: boolean, msg: WHEventReply): WHEventReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WHEventReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WHEventReply;
    static deserializeBinaryFromReader(message: WHEventReply, reader: jspb.BinaryReader): WHEventReply;
}

export namespace WHEventReply {
    export type AsObject = {
        id: string,
        organizerid: string,
        startdatetime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        enddatetime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        location: string,
        maxguest?: google_protobuf_wrappers_pb.Int32Value.AsObject,
        description: string,
        eventtype: number,
        guestidsList: Array<string>,
    }
}

export class CreateEventRequest extends jspb.Message { 

    hasStartdatetime(): boolean;
    clearStartdatetime(): void;
    getStartdatetime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStartdatetime(value?: google_protobuf_timestamp_pb.Timestamp): CreateEventRequest;

    hasEnddatetime(): boolean;
    clearEnddatetime(): void;
    getEnddatetime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEnddatetime(value?: google_protobuf_timestamp_pb.Timestamp): CreateEventRequest;
    getLocation(): string;
    setLocation(value: string): CreateEventRequest;
    getEventtype(): number;
    setEventtype(value: number): CreateEventRequest;
    getDescription(): string;
    setDescription(value: string): CreateEventRequest;

    hasMaxguest(): boolean;
    clearMaxguest(): void;
    getMaxguest(): number | undefined;
    setMaxguest(value: number): CreateEventRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateEventRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateEventRequest): CreateEventRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateEventRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateEventRequest;
    static deserializeBinaryFromReader(message: CreateEventRequest, reader: jspb.BinaryReader): CreateEventRequest;
}

export namespace CreateEventRequest {
    export type AsObject = {
        startdatetime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        enddatetime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        location: string,
        eventtype: number,
        description: string,
        maxguest?: number,
    }
}

export class UpdateEventRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): UpdateEventRequest;

    hasStartdatetime(): boolean;
    clearStartdatetime(): void;
    getStartdatetime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStartdatetime(value?: google_protobuf_timestamp_pb.Timestamp): UpdateEventRequest;

    hasEnddatetime(): boolean;
    clearEnddatetime(): void;
    getEnddatetime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEnddatetime(value?: google_protobuf_timestamp_pb.Timestamp): UpdateEventRequest;

    hasLocation(): boolean;
    clearLocation(): void;
    getLocation(): string | undefined;
    setLocation(value: string): UpdateEventRequest;
    getEventtype(): number;
    setEventtype(value: number): UpdateEventRequest;

    hasDescription(): boolean;
    clearDescription(): void;
    getDescription(): string | undefined;
    setDescription(value: string): UpdateEventRequest;

    hasMaxguest(): boolean;
    clearMaxguest(): void;
    getMaxguest(): number | undefined;
    setMaxguest(value: number): UpdateEventRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateEventRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateEventRequest): UpdateEventRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateEventRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateEventRequest;
    static deserializeBinaryFromReader(message: UpdateEventRequest, reader: jspb.BinaryReader): UpdateEventRequest;
}

export namespace UpdateEventRequest {
    export type AsObject = {
        id: string,
        startdatetime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        enddatetime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        location?: string,
        eventtype: number,
        description?: string,
        maxguest?: number,
    }
}

export class DeleteEventRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): DeleteEventRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteEventRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteEventRequest): DeleteEventRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteEventRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteEventRequest;
    static deserializeBinaryFromReader(message: DeleteEventRequest, reader: jspb.BinaryReader): DeleteEventRequest;
}

export namespace DeleteEventRequest {
    export type AsObject = {
        id: string,
    }
}
