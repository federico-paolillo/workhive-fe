// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var workhive_pb = require('./workhive_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');

function serialize_CreateEventRequest(arg) {
  if (!(arg instanceof workhive_pb.CreateEventRequest)) {
    throw new Error('Expected argument of type CreateEventRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CreateEventRequest(buffer_arg) {
  return workhive_pb.CreateEventRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_DeleteEventRequest(arg) {
  if (!(arg instanceof workhive_pb.DeleteEventRequest)) {
    throw new Error('Expected argument of type DeleteEventRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_DeleteEventRequest(buffer_arg) {
  return workhive_pb.DeleteEventRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetEventFilterRequest(arg) {
  if (!(arg instanceof workhive_pb.GetEventFilterRequest)) {
    throw new Error('Expected argument of type GetEventFilterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetEventFilterRequest(buffer_arg) {
  return workhive_pb.GetEventFilterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetEventRequest(arg) {
  if (!(arg instanceof workhive_pb.GetEventRequest)) {
    throw new Error('Expected argument of type GetEventRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetEventRequest(buffer_arg) {
  return workhive_pb.GetEventRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_JoinEventRequest(arg) {
  if (!(arg instanceof workhive_pb.JoinEventRequest)) {
    throw new Error('Expected argument of type JoinEventRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_JoinEventRequest(buffer_arg) {
  return workhive_pb.JoinEventRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UpdateEventRequest(arg) {
  if (!(arg instanceof workhive_pb.UpdateEventRequest)) {
    throw new Error('Expected argument of type UpdateEventRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UpdateEventRequest(buffer_arg) {
  return workhive_pb.UpdateEventRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WHEventReply(arg) {
  if (!(arg instanceof workhive_pb.WHEventReply)) {
    throw new Error('Expected argument of type WHEventReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_WHEventReply(buffer_arg) {
  return workhive_pb.WHEventReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


var WHEventService = exports.WHEventService = {
  createEvent: {
    path: '/WHEvent/CreateEvent',
    requestStream: false,
    responseStream: false,
    requestType: workhive_pb.CreateEventRequest,
    responseType: workhive_pb.WHEventReply,
    requestSerialize: serialize_CreateEventRequest,
    requestDeserialize: deserialize_CreateEventRequest,
    responseSerialize: serialize_WHEventReply,
    responseDeserialize: deserialize_WHEventReply,
  },
  getEventStream: {
    path: '/WHEvent/GetEventStream',
    requestStream: false,
    responseStream: true,
    requestType: workhive_pb.GetEventFilterRequest,
    responseType: workhive_pb.WHEventReply,
    requestSerialize: serialize_GetEventFilterRequest,
    requestDeserialize: deserialize_GetEventFilterRequest,
    responseSerialize: serialize_WHEventReply,
    responseDeserialize: deserialize_WHEventReply,
  },
  getEvent: {
    path: '/WHEvent/GetEvent',
    requestStream: false,
    responseStream: false,
    requestType: workhive_pb.GetEventRequest,
    responseType: workhive_pb.WHEventReply,
    requestSerialize: serialize_GetEventRequest,
    requestDeserialize: deserialize_GetEventRequest,
    responseSerialize: serialize_WHEventReply,
    responseDeserialize: deserialize_WHEventReply,
  },
  updateEvent: {
    path: '/WHEvent/UpdateEvent',
    requestStream: false,
    responseStream: false,
    requestType: workhive_pb.UpdateEventRequest,
    responseType: workhive_pb.WHEventReply,
    requestSerialize: serialize_UpdateEventRequest,
    requestDeserialize: deserialize_UpdateEventRequest,
    responseSerialize: serialize_WHEventReply,
    responseDeserialize: deserialize_WHEventReply,
  },
  deleteEvent: {
    path: '/WHEvent/DeleteEvent',
    requestStream: false,
    responseStream: false,
    requestType: workhive_pb.DeleteEventRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_DeleteEventRequest,
    requestDeserialize: deserialize_DeleteEventRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  joinEvent: {
    path: '/WHEvent/JoinEvent',
    requestStream: false,
    responseStream: false,
    requestType: workhive_pb.JoinEventRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_JoinEventRequest,
    requestDeserialize: deserialize_JoinEventRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.WHEventClient = grpc.makeGenericClientConstructor(WHEventService);
