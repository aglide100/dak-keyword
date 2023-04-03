// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var pb_svc_provision_provision_pb = require('../../../pb/svc/provision/provision_pb.js');

function serialize_pb_svc_provision_CreateAnalyzerReq(arg) {
  if (!(arg instanceof pb_svc_provision_provision_pb.CreateAnalyzerReq)) {
    throw new Error('Expected argument of type pb.svc.provision.CreateAnalyzerReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_svc_provision_CreateAnalyzerReq(buffer_arg) {
  return pb_svc_provision_provision_pb.CreateAnalyzerReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_svc_provision_CreateAnalyzerRes(arg) {
  if (!(arg instanceof pb_svc_provision_provision_pb.CreateAnalyzerRes)) {
    throw new Error('Expected argument of type pb.svc.provision.CreateAnalyzerRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_svc_provision_CreateAnalyzerRes(buffer_arg) {
  return pb_svc_provision_provision_pb.CreateAnalyzerRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_svc_provision_CreateScraperReq(arg) {
  if (!(arg instanceof pb_svc_provision_provision_pb.CreateScraperReq)) {
    throw new Error('Expected argument of type pb.svc.provision.CreateScraperReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_svc_provision_CreateScraperReq(buffer_arg) {
  return pb_svc_provision_provision_pb.CreateScraperReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_svc_provision_CreateScraperRes(arg) {
  if (!(arg instanceof pb_svc_provision_provision_pb.CreateScraperRes)) {
    throw new Error('Expected argument of type pb.svc.provision.CreateScraperRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_svc_provision_CreateScraperRes(buffer_arg) {
  return pb_svc_provision_provision_pb.CreateScraperRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_svc_provision_GetAnalyzerStatusReq(arg) {
  if (!(arg instanceof pb_svc_provision_provision_pb.GetAnalyzerStatusReq)) {
    throw new Error('Expected argument of type pb.svc.provision.GetAnalyzerStatusReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_svc_provision_GetAnalyzerStatusReq(buffer_arg) {
  return pb_svc_provision_provision_pb.GetAnalyzerStatusReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_svc_provision_GetAnalyzerStatusRes(arg) {
  if (!(arg instanceof pb_svc_provision_provision_pb.GetAnalyzerStatusRes)) {
    throw new Error('Expected argument of type pb.svc.provision.GetAnalyzerStatusRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_svc_provision_GetAnalyzerStatusRes(buffer_arg) {
  return pb_svc_provision_provision_pb.GetAnalyzerStatusRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_svc_provision_GetScraperStatusReq(arg) {
  if (!(arg instanceof pb_svc_provision_provision_pb.GetScraperStatusReq)) {
    throw new Error('Expected argument of type pb.svc.provision.GetScraperStatusReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_svc_provision_GetScraperStatusReq(buffer_arg) {
  return pb_svc_provision_provision_pb.GetScraperStatusReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_svc_provision_GetScraperStatusRes(arg) {
  if (!(arg instanceof pb_svc_provision_provision_pb.GetScraperStatusRes)) {
    throw new Error('Expected argument of type pb.svc.provision.GetScraperStatusRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_svc_provision_GetScraperStatusRes(buffer_arg) {
  return pb_svc_provision_provision_pb.GetScraperStatusRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_svc_provision_RemoveAnalyzerReq(arg) {
  if (!(arg instanceof pb_svc_provision_provision_pb.RemoveAnalyzerReq)) {
    throw new Error('Expected argument of type pb.svc.provision.RemoveAnalyzerReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_svc_provision_RemoveAnalyzerReq(buffer_arg) {
  return pb_svc_provision_provision_pb.RemoveAnalyzerReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_svc_provision_RemoveAnalyzerRes(arg) {
  if (!(arg instanceof pb_svc_provision_provision_pb.RemoveAnalyzerRes)) {
    throw new Error('Expected argument of type pb.svc.provision.RemoveAnalyzerRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_svc_provision_RemoveAnalyzerRes(buffer_arg) {
  return pb_svc_provision_provision_pb.RemoveAnalyzerRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_svc_provision_RemoveScraperReq(arg) {
  if (!(arg instanceof pb_svc_provision_provision_pb.RemoveScraperReq)) {
    throw new Error('Expected argument of type pb.svc.provision.RemoveScraperReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_svc_provision_RemoveScraperReq(buffer_arg) {
  return pb_svc_provision_provision_pb.RemoveScraperReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_svc_provision_RemoveScraperRes(arg) {
  if (!(arg instanceof pb_svc_provision_provision_pb.RemoveScraperRes)) {
    throw new Error('Expected argument of type pb.svc.provision.RemoveScraperRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_svc_provision_RemoveScraperRes(buffer_arg) {
  return pb_svc_provision_provision_pb.RemoveScraperRes.deserializeBinary(new Uint8Array(buffer_arg));
}


var ProvisionService = exports.ProvisionService = {
  createScraper: {
    path: '/pb.svc.provision.Provision/CreateScraper',
    requestStream: false,
    responseStream: false,
    requestType: pb_svc_provision_provision_pb.CreateScraperReq,
    responseType: pb_svc_provision_provision_pb.CreateScraperRes,
    requestSerialize: serialize_pb_svc_provision_CreateScraperReq,
    requestDeserialize: deserialize_pb_svc_provision_CreateScraperReq,
    responseSerialize: serialize_pb_svc_provision_CreateScraperRes,
    responseDeserialize: deserialize_pb_svc_provision_CreateScraperRes,
  },
  createAnalyzer: {
    path: '/pb.svc.provision.Provision/CreateAnalyzer',
    requestStream: false,
    responseStream: false,
    requestType: pb_svc_provision_provision_pb.CreateAnalyzerReq,
    responseType: pb_svc_provision_provision_pb.CreateAnalyzerRes,
    requestSerialize: serialize_pb_svc_provision_CreateAnalyzerReq,
    requestDeserialize: deserialize_pb_svc_provision_CreateAnalyzerReq,
    responseSerialize: serialize_pb_svc_provision_CreateAnalyzerRes,
    responseDeserialize: deserialize_pb_svc_provision_CreateAnalyzerRes,
  },
  getScraperStatus: {
    path: '/pb.svc.provision.Provision/GetScraperStatus',
    requestStream: false,
    responseStream: false,
    requestType: pb_svc_provision_provision_pb.GetScraperStatusReq,
    responseType: pb_svc_provision_provision_pb.GetScraperStatusRes,
    requestSerialize: serialize_pb_svc_provision_GetScraperStatusReq,
    requestDeserialize: deserialize_pb_svc_provision_GetScraperStatusReq,
    responseSerialize: serialize_pb_svc_provision_GetScraperStatusRes,
    responseDeserialize: deserialize_pb_svc_provision_GetScraperStatusRes,
  },
  getAnalyzerStatus: {
    path: '/pb.svc.provision.Provision/GetAnalyzerStatus',
    requestStream: false,
    responseStream: false,
    requestType: pb_svc_provision_provision_pb.GetAnalyzerStatusReq,
    responseType: pb_svc_provision_provision_pb.GetAnalyzerStatusRes,
    requestSerialize: serialize_pb_svc_provision_GetAnalyzerStatusReq,
    requestDeserialize: deserialize_pb_svc_provision_GetAnalyzerStatusReq,
    responseSerialize: serialize_pb_svc_provision_GetAnalyzerStatusRes,
    responseDeserialize: deserialize_pb_svc_provision_GetAnalyzerStatusRes,
  },
  removeScraper: {
    path: '/pb.svc.provision.Provision/RemoveScraper',
    requestStream: false,
    responseStream: false,
    requestType: pb_svc_provision_provision_pb.RemoveScraperReq,
    responseType: pb_svc_provision_provision_pb.RemoveScraperRes,
    requestSerialize: serialize_pb_svc_provision_RemoveScraperReq,
    requestDeserialize: deserialize_pb_svc_provision_RemoveScraperReq,
    responseSerialize: serialize_pb_svc_provision_RemoveScraperRes,
    responseDeserialize: deserialize_pb_svc_provision_RemoveScraperRes,
  },
  removeAnalyzer: {
    path: '/pb.svc.provision.Provision/RemoveAnalyzer',
    requestStream: false,
    responseStream: false,
    requestType: pb_svc_provision_provision_pb.RemoveAnalyzerReq,
    responseType: pb_svc_provision_provision_pb.RemoveAnalyzerRes,
    requestSerialize: serialize_pb_svc_provision_RemoveAnalyzerReq,
    requestDeserialize: deserialize_pb_svc_provision_RemoveAnalyzerReq,
    responseSerialize: serialize_pb_svc_provision_RemoveAnalyzerRes,
    responseDeserialize: deserialize_pb_svc_provision_RemoveAnalyzerRes,
  },
};

exports.ProvisionClient = grpc.makeGenericClientConstructor(ProvisionService);
