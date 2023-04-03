// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var pb_svc_analyzer_analyzer_pb = require('../../../pb/svc/analyzer/analyzer_pb.js');

function serialize_pb_svc_analyzer_GetStatusReq(arg) {
  if (!(arg instanceof pb_svc_analyzer_analyzer_pb.GetStatusReq)) {
    throw new Error('Expected argument of type pb.svc.analyzer.GetStatusReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_svc_analyzer_GetStatusReq(buffer_arg) {
  return pb_svc_analyzer_analyzer_pb.GetStatusReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_svc_analyzer_GetStatusRes(arg) {
  if (!(arg instanceof pb_svc_analyzer_analyzer_pb.GetStatusRes)) {
    throw new Error('Expected argument of type pb.svc.analyzer.GetStatusRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_svc_analyzer_GetStatusRes(buffer_arg) {
  return pb_svc_analyzer_analyzer_pb.GetStatusRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_svc_analyzer_StartAnalyzerReq(arg) {
  if (!(arg instanceof pb_svc_analyzer_analyzer_pb.StartAnalyzerReq)) {
    throw new Error('Expected argument of type pb.svc.analyzer.StartAnalyzerReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_svc_analyzer_StartAnalyzerReq(buffer_arg) {
  return pb_svc_analyzer_analyzer_pb.StartAnalyzerReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_svc_analyzer_StartAnalyzerRes(arg) {
  if (!(arg instanceof pb_svc_analyzer_analyzer_pb.StartAnalyzerRes)) {
    throw new Error('Expected argument of type pb.svc.analyzer.StartAnalyzerRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_svc_analyzer_StartAnalyzerRes(buffer_arg) {
  return pb_svc_analyzer_analyzer_pb.StartAnalyzerRes.deserializeBinary(new Uint8Array(buffer_arg));
}


var AnalyzerService = exports.AnalyzerService = {
  startAnalyzer: {
    path: '/pb.svc.analyzer.Analyzer/StartAnalyzer',
    requestStream: false,
    responseStream: false,
    requestType: pb_svc_analyzer_analyzer_pb.StartAnalyzerReq,
    responseType: pb_svc_analyzer_analyzer_pb.StartAnalyzerRes,
    requestSerialize: serialize_pb_svc_analyzer_StartAnalyzerReq,
    requestDeserialize: deserialize_pb_svc_analyzer_StartAnalyzerReq,
    responseSerialize: serialize_pb_svc_analyzer_StartAnalyzerRes,
    responseDeserialize: deserialize_pb_svc_analyzer_StartAnalyzerRes,
  },
  getStatus: {
    path: '/pb.svc.analyzer.Analyzer/GetStatus',
    requestStream: false,
    responseStream: false,
    requestType: pb_svc_analyzer_analyzer_pb.GetStatusReq,
    responseType: pb_svc_analyzer_analyzer_pb.GetStatusRes,
    requestSerialize: serialize_pb_svc_analyzer_GetStatusReq,
    requestDeserialize: deserialize_pb_svc_analyzer_GetStatusReq,
    responseSerialize: serialize_pb_svc_analyzer_GetStatusRes,
    responseDeserialize: deserialize_pb_svc_analyzer_GetStatusRes,
  },
};

exports.AnalyzerClient = grpc.makeGenericClientConstructor(AnalyzerService);
