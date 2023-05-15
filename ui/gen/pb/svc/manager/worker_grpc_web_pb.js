/**
 * @fileoverview gRPC-Web generated client stub for pb.svc.manager.worker
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v3.20.3
// source: pb/svc/manager/worker.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var pb_unit_worker_worker_pb = require('../../../pb/unit/worker/worker_pb.js')
const proto = {};
proto.pb = {};
proto.pb.svc = {};
proto.pb.svc.manager = {};
proto.pb.svc.manager.worker = require('./worker_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.pb.svc.manager.worker.WorkerServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.pb.svc.manager.worker.WorkerServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.svc.manager.worker.GetWorkerListReq,
 *   !proto.pb.svc.manager.worker.GetWorkerListRes>}
 */
const methodDescriptor_WorkerService_GetWorkerList = new grpc.web.MethodDescriptor(
  '/pb.svc.manager.worker.WorkerService/GetWorkerList',
  grpc.web.MethodType.UNARY,
  proto.pb.svc.manager.worker.GetWorkerListReq,
  proto.pb.svc.manager.worker.GetWorkerListRes,
  /**
   * @param {!proto.pb.svc.manager.worker.GetWorkerListReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.svc.manager.worker.GetWorkerListRes.deserializeBinary
);


/**
 * @param {!proto.pb.svc.manager.worker.GetWorkerListReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.pb.svc.manager.worker.GetWorkerListRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.svc.manager.worker.GetWorkerListRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.svc.manager.worker.WorkerServiceClient.prototype.getWorkerList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.svc.manager.worker.WorkerService/GetWorkerList',
      request,
      metadata || {},
      methodDescriptor_WorkerService_GetWorkerList,
      callback);
};


/**
 * @param {!proto.pb.svc.manager.worker.GetWorkerListReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.svc.manager.worker.GetWorkerListRes>}
 *     Promise that resolves to the response
 */
proto.pb.svc.manager.worker.WorkerServicePromiseClient.prototype.getWorkerList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.svc.manager.worker.WorkerService/GetWorkerList',
      request,
      metadata || {},
      methodDescriptor_WorkerService_GetWorkerList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.svc.manager.worker.UpdateWorkerStatusReq,
 *   !proto.pb.svc.manager.worker.UpdateWorkerStatusRes>}
 */
const methodDescriptor_WorkerService_UpdateWorkerStatus = new grpc.web.MethodDescriptor(
  '/pb.svc.manager.worker.WorkerService/UpdateWorkerStatus',
  grpc.web.MethodType.UNARY,
  proto.pb.svc.manager.worker.UpdateWorkerStatusReq,
  proto.pb.svc.manager.worker.UpdateWorkerStatusRes,
  /**
   * @param {!proto.pb.svc.manager.worker.UpdateWorkerStatusReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.svc.manager.worker.UpdateWorkerStatusRes.deserializeBinary
);


/**
 * @param {!proto.pb.svc.manager.worker.UpdateWorkerStatusReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.pb.svc.manager.worker.UpdateWorkerStatusRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.svc.manager.worker.UpdateWorkerStatusRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.svc.manager.worker.WorkerServiceClient.prototype.updateWorkerStatus =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.svc.manager.worker.WorkerService/UpdateWorkerStatus',
      request,
      metadata || {},
      methodDescriptor_WorkerService_UpdateWorkerStatus,
      callback);
};


/**
 * @param {!proto.pb.svc.manager.worker.UpdateWorkerStatusReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.svc.manager.worker.UpdateWorkerStatusRes>}
 *     Promise that resolves to the response
 */
proto.pb.svc.manager.worker.WorkerServicePromiseClient.prototype.updateWorkerStatus =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.svc.manager.worker.WorkerService/UpdateWorkerStatus',
      request,
      metadata || {},
      methodDescriptor_WorkerService_UpdateWorkerStatus);
};


module.exports = proto.pb.svc.manager.worker;

