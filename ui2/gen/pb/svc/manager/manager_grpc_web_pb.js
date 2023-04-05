/**
 * @fileoverview gRPC-Web generated client stub for pb.svc.manager
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v3.20.3
// source: pb/svc/manager/manager.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var pb_unit_job_job_pb = require('../../../pb/unit/job/job_pb.js')

var pb_unit_worker_worker_pb = require('../../../pb/unit/worker/worker_pb.js')

var pb_unit_article_article_pb = require('../../../pb/unit/article/article_pb.js')
const proto = {};
proto.pb = {};
proto.pb.svc = {};
proto.pb.svc.manager = require('./manager_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.pb.svc.manager.ManagerClient =
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
proto.pb.svc.manager.ManagerPromiseClient =
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
 *   !proto.pb.svc.manager.CreateNewJobReq,
 *   !proto.pb.svc.manager.CreateNewJobRes>}
 */
const methodDescriptor_Manager_CreateNewJob = new grpc.web.MethodDescriptor(
  '/pb.svc.manager.Manager/CreateNewJob',
  grpc.web.MethodType.UNARY,
  proto.pb.svc.manager.CreateNewJobReq,
  proto.pb.svc.manager.CreateNewJobRes,
  /**
   * @param {!proto.pb.svc.manager.CreateNewJobReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.svc.manager.CreateNewJobRes.deserializeBinary
);


/**
 * @param {!proto.pb.svc.manager.CreateNewJobReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.pb.svc.manager.CreateNewJobRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.svc.manager.CreateNewJobRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.svc.manager.ManagerClient.prototype.createNewJob =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.svc.manager.Manager/CreateNewJob',
      request,
      metadata || {},
      methodDescriptor_Manager_CreateNewJob,
      callback);
};


/**
 * @param {!proto.pb.svc.manager.CreateNewJobReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.svc.manager.CreateNewJobRes>}
 *     Promise that resolves to the response
 */
proto.pb.svc.manager.ManagerPromiseClient.prototype.createNewJob =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.svc.manager.Manager/CreateNewJob',
      request,
      metadata || {},
      methodDescriptor_Manager_CreateNewJob);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.svc.manager.ReRunJobReq,
 *   !proto.pb.svc.manager.ReRunJobRes>}
 */
const methodDescriptor_Manager_ReRunJob = new grpc.web.MethodDescriptor(
  '/pb.svc.manager.Manager/ReRunJob',
  grpc.web.MethodType.UNARY,
  proto.pb.svc.manager.ReRunJobReq,
  proto.pb.svc.manager.ReRunJobRes,
  /**
   * @param {!proto.pb.svc.manager.ReRunJobReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.svc.manager.ReRunJobRes.deserializeBinary
);


/**
 * @param {!proto.pb.svc.manager.ReRunJobReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.pb.svc.manager.ReRunJobRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.svc.manager.ReRunJobRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.svc.manager.ManagerClient.prototype.reRunJob =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.svc.manager.Manager/ReRunJob',
      request,
      metadata || {},
      methodDescriptor_Manager_ReRunJob,
      callback);
};


/**
 * @param {!proto.pb.svc.manager.ReRunJobReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.svc.manager.ReRunJobRes>}
 *     Promise that resolves to the response
 */
proto.pb.svc.manager.ManagerPromiseClient.prototype.reRunJob =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.svc.manager.Manager/ReRunJob',
      request,
      metadata || {},
      methodDescriptor_Manager_ReRunJob);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.svc.manager.GetJobStatusReq,
 *   !proto.pb.svc.manager.GetJobStatusRes>}
 */
const methodDescriptor_Manager_GetJobStatus = new grpc.web.MethodDescriptor(
  '/pb.svc.manager.Manager/GetJobStatus',
  grpc.web.MethodType.UNARY,
  proto.pb.svc.manager.GetJobStatusReq,
  proto.pb.svc.manager.GetJobStatusRes,
  /**
   * @param {!proto.pb.svc.manager.GetJobStatusReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.svc.manager.GetJobStatusRes.deserializeBinary
);


/**
 * @param {!proto.pb.svc.manager.GetJobStatusReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.pb.svc.manager.GetJobStatusRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.svc.manager.GetJobStatusRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.svc.manager.ManagerClient.prototype.getJobStatus =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.svc.manager.Manager/GetJobStatus',
      request,
      metadata || {},
      methodDescriptor_Manager_GetJobStatus,
      callback);
};


/**
 * @param {!proto.pb.svc.manager.GetJobStatusReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.svc.manager.GetJobStatusRes>}
 *     Promise that resolves to the response
 */
proto.pb.svc.manager.ManagerPromiseClient.prototype.getJobStatus =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.svc.manager.Manager/GetJobStatus',
      request,
      metadata || {},
      methodDescriptor_Manager_GetJobStatus);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.svc.manager.GetJobListReq,
 *   !proto.pb.svc.manager.GetJobListRes>}
 */
const methodDescriptor_Manager_GetJobList = new grpc.web.MethodDescriptor(
  '/pb.svc.manager.Manager/GetJobList',
  grpc.web.MethodType.UNARY,
  proto.pb.svc.manager.GetJobListReq,
  proto.pb.svc.manager.GetJobListRes,
  /**
   * @param {!proto.pb.svc.manager.GetJobListReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.svc.manager.GetJobListRes.deserializeBinary
);


/**
 * @param {!proto.pb.svc.manager.GetJobListReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.pb.svc.manager.GetJobListRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.svc.manager.GetJobListRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.svc.manager.ManagerClient.prototype.getJobList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.svc.manager.Manager/GetJobList',
      request,
      metadata || {},
      methodDescriptor_Manager_GetJobList,
      callback);
};


/**
 * @param {!proto.pb.svc.manager.GetJobListReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.svc.manager.GetJobListRes>}
 *     Promise that resolves to the response
 */
proto.pb.svc.manager.ManagerPromiseClient.prototype.getJobList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.svc.manager.Manager/GetJobList',
      request,
      metadata || {},
      methodDescriptor_Manager_GetJobList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.svc.manager.GetJobIsReRunReq,
 *   !proto.pb.svc.manager.GetJobIsReRunRes>}
 */
const methodDescriptor_Manager_GetJobIsReRun = new grpc.web.MethodDescriptor(
  '/pb.svc.manager.Manager/GetJobIsReRun',
  grpc.web.MethodType.UNARY,
  proto.pb.svc.manager.GetJobIsReRunReq,
  proto.pb.svc.manager.GetJobIsReRunRes,
  /**
   * @param {!proto.pb.svc.manager.GetJobIsReRunReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.svc.manager.GetJobIsReRunRes.deserializeBinary
);


/**
 * @param {!proto.pb.svc.manager.GetJobIsReRunReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.pb.svc.manager.GetJobIsReRunRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.svc.manager.GetJobIsReRunRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.svc.manager.ManagerClient.prototype.getJobIsReRun =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.svc.manager.Manager/GetJobIsReRun',
      request,
      metadata || {},
      methodDescriptor_Manager_GetJobIsReRun,
      callback);
};


/**
 * @param {!proto.pb.svc.manager.GetJobIsReRunReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.svc.manager.GetJobIsReRunRes>}
 *     Promise that resolves to the response
 */
proto.pb.svc.manager.ManagerPromiseClient.prototype.getJobIsReRun =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.svc.manager.Manager/GetJobIsReRun',
      request,
      metadata || {},
      methodDescriptor_Manager_GetJobIsReRun);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.svc.manager.GetWorkerListReq,
 *   !proto.pb.svc.manager.GetWorkerListRes>}
 */
const methodDescriptor_Manager_GetWorkerList = new grpc.web.MethodDescriptor(
  '/pb.svc.manager.Manager/GetWorkerList',
  grpc.web.MethodType.UNARY,
  proto.pb.svc.manager.GetWorkerListReq,
  proto.pb.svc.manager.GetWorkerListRes,
  /**
   * @param {!proto.pb.svc.manager.GetWorkerListReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.svc.manager.GetWorkerListRes.deserializeBinary
);


/**
 * @param {!proto.pb.svc.manager.GetWorkerListReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.pb.svc.manager.GetWorkerListRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.svc.manager.GetWorkerListRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.svc.manager.ManagerClient.prototype.getWorkerList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.svc.manager.Manager/GetWorkerList',
      request,
      metadata || {},
      methodDescriptor_Manager_GetWorkerList,
      callback);
};


/**
 * @param {!proto.pb.svc.manager.GetWorkerListReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.svc.manager.GetWorkerListRes>}
 *     Promise that resolves to the response
 */
proto.pb.svc.manager.ManagerPromiseClient.prototype.getWorkerList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.svc.manager.Manager/GetWorkerList',
      request,
      metadata || {},
      methodDescriptor_Manager_GetWorkerList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.svc.manager.GetArticleInfoReq,
 *   !proto.pb.svc.manager.GetArticleInfoRes>}
 */
const methodDescriptor_Manager_GetArticleInfo = new grpc.web.MethodDescriptor(
  '/pb.svc.manager.Manager/GetArticleInfo',
  grpc.web.MethodType.UNARY,
  proto.pb.svc.manager.GetArticleInfoReq,
  proto.pb.svc.manager.GetArticleInfoRes,
  /**
   * @param {!proto.pb.svc.manager.GetArticleInfoReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.svc.manager.GetArticleInfoRes.deserializeBinary
);


/**
 * @param {!proto.pb.svc.manager.GetArticleInfoReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.pb.svc.manager.GetArticleInfoRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.svc.manager.GetArticleInfoRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.svc.manager.ManagerClient.prototype.getArticleInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.svc.manager.Manager/GetArticleInfo',
      request,
      metadata || {},
      methodDescriptor_Manager_GetArticleInfo,
      callback);
};


/**
 * @param {!proto.pb.svc.manager.GetArticleInfoReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.svc.manager.GetArticleInfoRes>}
 *     Promise that resolves to the response
 */
proto.pb.svc.manager.ManagerPromiseClient.prototype.getArticleInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.svc.manager.Manager/GetArticleInfo',
      request,
      metadata || {},
      methodDescriptor_Manager_GetArticleInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.svc.manager.GetArticleListReq,
 *   !proto.pb.svc.manager.GetArticleListRes>}
 */
const methodDescriptor_Manager_GetArticleList = new grpc.web.MethodDescriptor(
  '/pb.svc.manager.Manager/GetArticleList',
  grpc.web.MethodType.UNARY,
  proto.pb.svc.manager.GetArticleListReq,
  proto.pb.svc.manager.GetArticleListRes,
  /**
   * @param {!proto.pb.svc.manager.GetArticleListReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.svc.manager.GetArticleListRes.deserializeBinary
);


/**
 * @param {!proto.pb.svc.manager.GetArticleListReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.pb.svc.manager.GetArticleListRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.svc.manager.GetArticleListRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.svc.manager.ManagerClient.prototype.getArticleList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.svc.manager.Manager/GetArticleList',
      request,
      metadata || {},
      methodDescriptor_Manager_GetArticleList,
      callback);
};


/**
 * @param {!proto.pb.svc.manager.GetArticleListReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.svc.manager.GetArticleListRes>}
 *     Promise that resolves to the response
 */
proto.pb.svc.manager.ManagerPromiseClient.prototype.getArticleList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.svc.manager.Manager/GetArticleList',
      request,
      metadata || {},
      methodDescriptor_Manager_GetArticleList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.svc.manager.GetArticleCountByHourReq,
 *   !proto.pb.svc.manager.GetArticleCountByHourRes>}
 */
const methodDescriptor_Manager_GetArticleCountByHour = new grpc.web.MethodDescriptor(
  '/pb.svc.manager.Manager/GetArticleCountByHour',
  grpc.web.MethodType.UNARY,
  proto.pb.svc.manager.GetArticleCountByHourReq,
  proto.pb.svc.manager.GetArticleCountByHourRes,
  /**
   * @param {!proto.pb.svc.manager.GetArticleCountByHourReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.svc.manager.GetArticleCountByHourRes.deserializeBinary
);


/**
 * @param {!proto.pb.svc.manager.GetArticleCountByHourReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.pb.svc.manager.GetArticleCountByHourRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.svc.manager.GetArticleCountByHourRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.svc.manager.ManagerClient.prototype.getArticleCountByHour =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.svc.manager.Manager/GetArticleCountByHour',
      request,
      metadata || {},
      methodDescriptor_Manager_GetArticleCountByHour,
      callback);
};


/**
 * @param {!proto.pb.svc.manager.GetArticleCountByHourReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.svc.manager.GetArticleCountByHourRes>}
 *     Promise that resolves to the response
 */
proto.pb.svc.manager.ManagerPromiseClient.prototype.getArticleCountByHour =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.svc.manager.Manager/GetArticleCountByHour',
      request,
      metadata || {},
      methodDescriptor_Manager_GetArticleCountByHour);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.svc.manager.GetArticleCountByDayReq,
 *   !proto.pb.svc.manager.GetArticleCountByDayRes>}
 */
const methodDescriptor_Manager_GetArticleCountByDay = new grpc.web.MethodDescriptor(
  '/pb.svc.manager.Manager/GetArticleCountByDay',
  grpc.web.MethodType.UNARY,
  proto.pb.svc.manager.GetArticleCountByDayReq,
  proto.pb.svc.manager.GetArticleCountByDayRes,
  /**
   * @param {!proto.pb.svc.manager.GetArticleCountByDayReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.svc.manager.GetArticleCountByDayRes.deserializeBinary
);


/**
 * @param {!proto.pb.svc.manager.GetArticleCountByDayReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.pb.svc.manager.GetArticleCountByDayRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.svc.manager.GetArticleCountByDayRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.svc.manager.ManagerClient.prototype.getArticleCountByDay =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.svc.manager.Manager/GetArticleCountByDay',
      request,
      metadata || {},
      methodDescriptor_Manager_GetArticleCountByDay,
      callback);
};


/**
 * @param {!proto.pb.svc.manager.GetArticleCountByDayReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.svc.manager.GetArticleCountByDayRes>}
 *     Promise that resolves to the response
 */
proto.pb.svc.manager.ManagerPromiseClient.prototype.getArticleCountByDay =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.svc.manager.Manager/GetArticleCountByDay',
      request,
      metadata || {},
      methodDescriptor_Manager_GetArticleCountByDay);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.svc.manager.UpdateWorkerStatusReq,
 *   !proto.pb.svc.manager.UpdateWorkerStatusRes>}
 */
const methodDescriptor_Manager_UpdateWorkerStatus = new grpc.web.MethodDescriptor(
  '/pb.svc.manager.Manager/UpdateWorkerStatus',
  grpc.web.MethodType.UNARY,
  proto.pb.svc.manager.UpdateWorkerStatusReq,
  proto.pb.svc.manager.UpdateWorkerStatusRes,
  /**
   * @param {!proto.pb.svc.manager.UpdateWorkerStatusReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.svc.manager.UpdateWorkerStatusRes.deserializeBinary
);


/**
 * @param {!proto.pb.svc.manager.UpdateWorkerStatusReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.pb.svc.manager.UpdateWorkerStatusRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.svc.manager.UpdateWorkerStatusRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.svc.manager.ManagerClient.prototype.updateWorkerStatus =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.svc.manager.Manager/UpdateWorkerStatus',
      request,
      metadata || {},
      methodDescriptor_Manager_UpdateWorkerStatus,
      callback);
};


/**
 * @param {!proto.pb.svc.manager.UpdateWorkerStatusReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.svc.manager.UpdateWorkerStatusRes>}
 *     Promise that resolves to the response
 */
proto.pb.svc.manager.ManagerPromiseClient.prototype.updateWorkerStatus =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.svc.manager.Manager/UpdateWorkerStatus',
      request,
      metadata || {},
      methodDescriptor_Manager_UpdateWorkerStatus);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.svc.manager.UpdateJobStatusReq,
 *   !proto.pb.svc.manager.UpdateJobStatusRes>}
 */
const methodDescriptor_Manager_UpdateJobStatus = new grpc.web.MethodDescriptor(
  '/pb.svc.manager.Manager/UpdateJobStatus',
  grpc.web.MethodType.UNARY,
  proto.pb.svc.manager.UpdateJobStatusReq,
  proto.pb.svc.manager.UpdateJobStatusRes,
  /**
   * @param {!proto.pb.svc.manager.UpdateJobStatusReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.svc.manager.UpdateJobStatusRes.deserializeBinary
);


/**
 * @param {!proto.pb.svc.manager.UpdateJobStatusReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.pb.svc.manager.UpdateJobStatusRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.svc.manager.UpdateJobStatusRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.svc.manager.ManagerClient.prototype.updateJobStatus =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.svc.manager.Manager/UpdateJobStatus',
      request,
      metadata || {},
      methodDescriptor_Manager_UpdateJobStatus,
      callback);
};


/**
 * @param {!proto.pb.svc.manager.UpdateJobStatusReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.svc.manager.UpdateJobStatusRes>}
 *     Promise that resolves to the response
 */
proto.pb.svc.manager.ManagerPromiseClient.prototype.updateJobStatus =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.svc.manager.Manager/UpdateJobStatus',
      request,
      metadata || {},
      methodDescriptor_Manager_UpdateJobStatus);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.svc.manager.WhenStartScraperReq,
 *   !proto.pb.svc.manager.WhenStartScraperRes>}
 */
const methodDescriptor_Manager_WhenStartScraper = new grpc.web.MethodDescriptor(
  '/pb.svc.manager.Manager/WhenStartScraper',
  grpc.web.MethodType.UNARY,
  proto.pb.svc.manager.WhenStartScraperReq,
  proto.pb.svc.manager.WhenStartScraperRes,
  /**
   * @param {!proto.pb.svc.manager.WhenStartScraperReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.svc.manager.WhenStartScraperRes.deserializeBinary
);


/**
 * @param {!proto.pb.svc.manager.WhenStartScraperReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.pb.svc.manager.WhenStartScraperRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.svc.manager.WhenStartScraperRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.svc.manager.ManagerClient.prototype.whenStartScraper =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.svc.manager.Manager/WhenStartScraper',
      request,
      metadata || {},
      methodDescriptor_Manager_WhenStartScraper,
      callback);
};


/**
 * @param {!proto.pb.svc.manager.WhenStartScraperReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.svc.manager.WhenStartScraperRes>}
 *     Promise that resolves to the response
 */
proto.pb.svc.manager.ManagerPromiseClient.prototype.whenStartScraper =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.svc.manager.Manager/WhenStartScraper',
      request,
      metadata || {},
      methodDescriptor_Manager_WhenStartScraper);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.svc.manager.WhenDoneScraperReq,
 *   !proto.pb.svc.manager.WhenDoneScraperRes>}
 */
const methodDescriptor_Manager_WhenDoneScraper = new grpc.web.MethodDescriptor(
  '/pb.svc.manager.Manager/WhenDoneScraper',
  grpc.web.MethodType.UNARY,
  proto.pb.svc.manager.WhenDoneScraperReq,
  proto.pb.svc.manager.WhenDoneScraperRes,
  /**
   * @param {!proto.pb.svc.manager.WhenDoneScraperReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.svc.manager.WhenDoneScraperRes.deserializeBinary
);


/**
 * @param {!proto.pb.svc.manager.WhenDoneScraperReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.pb.svc.manager.WhenDoneScraperRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.svc.manager.WhenDoneScraperRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.svc.manager.ManagerClient.prototype.whenDoneScraper =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.svc.manager.Manager/WhenDoneScraper',
      request,
      metadata || {},
      methodDescriptor_Manager_WhenDoneScraper,
      callback);
};


/**
 * @param {!proto.pb.svc.manager.WhenDoneScraperReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.svc.manager.WhenDoneScraperRes>}
 *     Promise that resolves to the response
 */
proto.pb.svc.manager.ManagerPromiseClient.prototype.whenDoneScraper =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.svc.manager.Manager/WhenDoneScraper',
      request,
      metadata || {},
      methodDescriptor_Manager_WhenDoneScraper);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.svc.manager.WhenStartAnalyzerReq,
 *   !proto.pb.svc.manager.WhenStartAnalyzerRes>}
 */
const methodDescriptor_Manager_WhenStartAnalyzer = new grpc.web.MethodDescriptor(
  '/pb.svc.manager.Manager/WhenStartAnalyzer',
  grpc.web.MethodType.UNARY,
  proto.pb.svc.manager.WhenStartAnalyzerReq,
  proto.pb.svc.manager.WhenStartAnalyzerRes,
  /**
   * @param {!proto.pb.svc.manager.WhenStartAnalyzerReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.svc.manager.WhenStartAnalyzerRes.deserializeBinary
);


/**
 * @param {!proto.pb.svc.manager.WhenStartAnalyzerReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.pb.svc.manager.WhenStartAnalyzerRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.svc.manager.WhenStartAnalyzerRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.svc.manager.ManagerClient.prototype.whenStartAnalyzer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.svc.manager.Manager/WhenStartAnalyzer',
      request,
      metadata || {},
      methodDescriptor_Manager_WhenStartAnalyzer,
      callback);
};


/**
 * @param {!proto.pb.svc.manager.WhenStartAnalyzerReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.svc.manager.WhenStartAnalyzerRes>}
 *     Promise that resolves to the response
 */
proto.pb.svc.manager.ManagerPromiseClient.prototype.whenStartAnalyzer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.svc.manager.Manager/WhenStartAnalyzer',
      request,
      metadata || {},
      methodDescriptor_Manager_WhenStartAnalyzer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.svc.manager.WhenDoneAnalyzerReq,
 *   !proto.pb.svc.manager.WhenDoneAnalyzerRes>}
 */
const methodDescriptor_Manager_WhenDoneAnalyzer = new grpc.web.MethodDescriptor(
  '/pb.svc.manager.Manager/WhenDoneAnalyzer',
  grpc.web.MethodType.UNARY,
  proto.pb.svc.manager.WhenDoneAnalyzerReq,
  proto.pb.svc.manager.WhenDoneAnalyzerRes,
  /**
   * @param {!proto.pb.svc.manager.WhenDoneAnalyzerReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.svc.manager.WhenDoneAnalyzerRes.deserializeBinary
);


/**
 * @param {!proto.pb.svc.manager.WhenDoneAnalyzerReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.pb.svc.manager.WhenDoneAnalyzerRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.svc.manager.WhenDoneAnalyzerRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.svc.manager.ManagerClient.prototype.whenDoneAnalyzer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.svc.manager.Manager/WhenDoneAnalyzer',
      request,
      metadata || {},
      methodDescriptor_Manager_WhenDoneAnalyzer,
      callback);
};


/**
 * @param {!proto.pb.svc.manager.WhenDoneAnalyzerReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.svc.manager.WhenDoneAnalyzerRes>}
 *     Promise that resolves to the response
 */
proto.pb.svc.manager.ManagerPromiseClient.prototype.whenDoneAnalyzer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.svc.manager.Manager/WhenDoneAnalyzer',
      request,
      metadata || {},
      methodDescriptor_Manager_WhenDoneAnalyzer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.svc.manager.WhenScraperHavingErrReq,
 *   !proto.pb.svc.manager.WhenScraperHavingErrRes>}
 */
const methodDescriptor_Manager_WhenScraperHavingErr = new grpc.web.MethodDescriptor(
  '/pb.svc.manager.Manager/WhenScraperHavingErr',
  grpc.web.MethodType.UNARY,
  proto.pb.svc.manager.WhenScraperHavingErrReq,
  proto.pb.svc.manager.WhenScraperHavingErrRes,
  /**
   * @param {!proto.pb.svc.manager.WhenScraperHavingErrReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.svc.manager.WhenScraperHavingErrRes.deserializeBinary
);


/**
 * @param {!proto.pb.svc.manager.WhenScraperHavingErrReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.pb.svc.manager.WhenScraperHavingErrRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.svc.manager.WhenScraperHavingErrRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.svc.manager.ManagerClient.prototype.whenScraperHavingErr =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.svc.manager.Manager/WhenScraperHavingErr',
      request,
      metadata || {},
      methodDescriptor_Manager_WhenScraperHavingErr,
      callback);
};


/**
 * @param {!proto.pb.svc.manager.WhenScraperHavingErrReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.svc.manager.WhenScraperHavingErrRes>}
 *     Promise that resolves to the response
 */
proto.pb.svc.manager.ManagerPromiseClient.prototype.whenScraperHavingErr =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.svc.manager.Manager/WhenScraperHavingErr',
      request,
      metadata || {},
      methodDescriptor_Manager_WhenScraperHavingErr);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.svc.manager.WhenAnalyzerHavingErrReq,
 *   !proto.pb.svc.manager.WhenAnalyzerHavingErrRes>}
 */
const methodDescriptor_Manager_WhenAnalyzerHavingErr = new grpc.web.MethodDescriptor(
  '/pb.svc.manager.Manager/WhenAnalyzerHavingErr',
  grpc.web.MethodType.UNARY,
  proto.pb.svc.manager.WhenAnalyzerHavingErrReq,
  proto.pb.svc.manager.WhenAnalyzerHavingErrRes,
  /**
   * @param {!proto.pb.svc.manager.WhenAnalyzerHavingErrReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.svc.manager.WhenAnalyzerHavingErrRes.deserializeBinary
);


/**
 * @param {!proto.pb.svc.manager.WhenAnalyzerHavingErrReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.pb.svc.manager.WhenAnalyzerHavingErrRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.svc.manager.WhenAnalyzerHavingErrRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.svc.manager.ManagerClient.prototype.whenAnalyzerHavingErr =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.svc.manager.Manager/WhenAnalyzerHavingErr',
      request,
      metadata || {},
      methodDescriptor_Manager_WhenAnalyzerHavingErr,
      callback);
};


/**
 * @param {!proto.pb.svc.manager.WhenAnalyzerHavingErrReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.svc.manager.WhenAnalyzerHavingErrRes>}
 *     Promise that resolves to the response
 */
proto.pb.svc.manager.ManagerPromiseClient.prototype.whenAnalyzerHavingErr =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.svc.manager.Manager/WhenAnalyzerHavingErr',
      request,
      metadata || {},
      methodDescriptor_Manager_WhenAnalyzerHavingErr);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.svc.manager.StopJobReq,
 *   !proto.pb.svc.manager.StopJobRes>}
 */
const methodDescriptor_Manager_StopJob = new grpc.web.MethodDescriptor(
  '/pb.svc.manager.Manager/StopJob',
  grpc.web.MethodType.UNARY,
  proto.pb.svc.manager.StopJobReq,
  proto.pb.svc.manager.StopJobRes,
  /**
   * @param {!proto.pb.svc.manager.StopJobReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.svc.manager.StopJobRes.deserializeBinary
);


/**
 * @param {!proto.pb.svc.manager.StopJobReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.pb.svc.manager.StopJobRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.svc.manager.StopJobRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.svc.manager.ManagerClient.prototype.stopJob =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.svc.manager.Manager/StopJob',
      request,
      metadata || {},
      methodDescriptor_Manager_StopJob,
      callback);
};


/**
 * @param {!proto.pb.svc.manager.StopJobReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.svc.manager.StopJobRes>}
 *     Promise that resolves to the response
 */
proto.pb.svc.manager.ManagerPromiseClient.prototype.stopJob =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.svc.manager.Manager/StopJob',
      request,
      metadata || {},
      methodDescriptor_Manager_StopJob);
};


module.exports = proto.pb.svc.manager;
