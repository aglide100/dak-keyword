// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var pb_svc_manager_manager_pb = require('../../../pb/svc/manager/manager_pb.js');
var pb_unit_job_job_pb = require('../../../pb/unit/job/job_pb.js');
var pb_unit_worker_worker_pb = require('../../../pb/unit/worker/worker_pb.js');
var pb_unit_article_article_pb = require('../../../pb/unit/article/article_pb.js');

function serialize_pb_svc_manager_CreateNewJobReq(arg) {
  if (!(arg instanceof pb_svc_manager_manager_pb.CreateNewJobReq)) {
    throw new Error('Expected argument of type pb.svc.manager.CreateNewJobReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_svc_manager_CreateNewJobReq(buffer_arg) {
  return pb_svc_manager_manager_pb.CreateNewJobReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_svc_manager_CreateNewJobRes(arg) {
  if (!(arg instanceof pb_svc_manager_manager_pb.CreateNewJobRes)) {
    throw new Error('Expected argument of type pb.svc.manager.CreateNewJobRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_svc_manager_CreateNewJobRes(buffer_arg) {
  return pb_svc_manager_manager_pb.CreateNewJobRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_svc_manager_GetArticleCountByDayReq(arg) {
  if (!(arg instanceof pb_svc_manager_manager_pb.GetArticleCountByDayReq)) {
    throw new Error('Expected argument of type pb.svc.manager.GetArticleCountByDayReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_svc_manager_GetArticleCountByDayReq(buffer_arg) {
  return pb_svc_manager_manager_pb.GetArticleCountByDayReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_svc_manager_GetArticleCountByDayRes(arg) {
  if (!(arg instanceof pb_svc_manager_manager_pb.GetArticleCountByDayRes)) {
    throw new Error('Expected argument of type pb.svc.manager.GetArticleCountByDayRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_svc_manager_GetArticleCountByDayRes(buffer_arg) {
  return pb_svc_manager_manager_pb.GetArticleCountByDayRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_svc_manager_GetArticleCountByHourReq(arg) {
  if (!(arg instanceof pb_svc_manager_manager_pb.GetArticleCountByHourReq)) {
    throw new Error('Expected argument of type pb.svc.manager.GetArticleCountByHourReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_svc_manager_GetArticleCountByHourReq(buffer_arg) {
  return pb_svc_manager_manager_pb.GetArticleCountByHourReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_svc_manager_GetArticleCountByHourRes(arg) {
  if (!(arg instanceof pb_svc_manager_manager_pb.GetArticleCountByHourRes)) {
    throw new Error('Expected argument of type pb.svc.manager.GetArticleCountByHourRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_svc_manager_GetArticleCountByHourRes(buffer_arg) {
  return pb_svc_manager_manager_pb.GetArticleCountByHourRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_svc_manager_GetArticleInfoReq(arg) {
  if (!(arg instanceof pb_svc_manager_manager_pb.GetArticleInfoReq)) {
    throw new Error('Expected argument of type pb.svc.manager.GetArticleInfoReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_svc_manager_GetArticleInfoReq(buffer_arg) {
  return pb_svc_manager_manager_pb.GetArticleInfoReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_svc_manager_GetArticleInfoRes(arg) {
  if (!(arg instanceof pb_svc_manager_manager_pb.GetArticleInfoRes)) {
    throw new Error('Expected argument of type pb.svc.manager.GetArticleInfoRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_svc_manager_GetArticleInfoRes(buffer_arg) {
  return pb_svc_manager_manager_pb.GetArticleInfoRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_svc_manager_GetArticleListReq(arg) {
  if (!(arg instanceof pb_svc_manager_manager_pb.GetArticleListReq)) {
    throw new Error('Expected argument of type pb.svc.manager.GetArticleListReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_svc_manager_GetArticleListReq(buffer_arg) {
  return pb_svc_manager_manager_pb.GetArticleListReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_svc_manager_GetArticleListRes(arg) {
  if (!(arg instanceof pb_svc_manager_manager_pb.GetArticleListRes)) {
    throw new Error('Expected argument of type pb.svc.manager.GetArticleListRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_svc_manager_GetArticleListRes(buffer_arg) {
  return pb_svc_manager_manager_pb.GetArticleListRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_svc_manager_GetJobIsReRunReq(arg) {
  if (!(arg instanceof pb_svc_manager_manager_pb.GetJobIsReRunReq)) {
    throw new Error('Expected argument of type pb.svc.manager.GetJobIsReRunReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_svc_manager_GetJobIsReRunReq(buffer_arg) {
  return pb_svc_manager_manager_pb.GetJobIsReRunReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_svc_manager_GetJobIsReRunRes(arg) {
  if (!(arg instanceof pb_svc_manager_manager_pb.GetJobIsReRunRes)) {
    throw new Error('Expected argument of type pb.svc.manager.GetJobIsReRunRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_svc_manager_GetJobIsReRunRes(buffer_arg) {
  return pb_svc_manager_manager_pb.GetJobIsReRunRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_svc_manager_GetJobListReq(arg) {
  if (!(arg instanceof pb_svc_manager_manager_pb.GetJobListReq)) {
    throw new Error('Expected argument of type pb.svc.manager.GetJobListReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_svc_manager_GetJobListReq(buffer_arg) {
  return pb_svc_manager_manager_pb.GetJobListReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_svc_manager_GetJobListRes(arg) {
  if (!(arg instanceof pb_svc_manager_manager_pb.GetJobListRes)) {
    throw new Error('Expected argument of type pb.svc.manager.GetJobListRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_svc_manager_GetJobListRes(buffer_arg) {
  return pb_svc_manager_manager_pb.GetJobListRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_svc_manager_GetJobStatusReq(arg) {
  if (!(arg instanceof pb_svc_manager_manager_pb.GetJobStatusReq)) {
    throw new Error('Expected argument of type pb.svc.manager.GetJobStatusReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_svc_manager_GetJobStatusReq(buffer_arg) {
  return pb_svc_manager_manager_pb.GetJobStatusReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_svc_manager_GetJobStatusRes(arg) {
  if (!(arg instanceof pb_svc_manager_manager_pb.GetJobStatusRes)) {
    throw new Error('Expected argument of type pb.svc.manager.GetJobStatusRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_svc_manager_GetJobStatusRes(buffer_arg) {
  return pb_svc_manager_manager_pb.GetJobStatusRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_svc_manager_GetWorkerListReq(arg) {
  if (!(arg instanceof pb_svc_manager_manager_pb.GetWorkerListReq)) {
    throw new Error('Expected argument of type pb.svc.manager.GetWorkerListReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_svc_manager_GetWorkerListReq(buffer_arg) {
  return pb_svc_manager_manager_pb.GetWorkerListReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_svc_manager_GetWorkerListRes(arg) {
  if (!(arg instanceof pb_svc_manager_manager_pb.GetWorkerListRes)) {
    throw new Error('Expected argument of type pb.svc.manager.GetWorkerListRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_svc_manager_GetWorkerListRes(buffer_arg) {
  return pb_svc_manager_manager_pb.GetWorkerListRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_svc_manager_ReRunJobReq(arg) {
  if (!(arg instanceof pb_svc_manager_manager_pb.ReRunJobReq)) {
    throw new Error('Expected argument of type pb.svc.manager.ReRunJobReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_svc_manager_ReRunJobReq(buffer_arg) {
  return pb_svc_manager_manager_pb.ReRunJobReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_svc_manager_ReRunJobRes(arg) {
  if (!(arg instanceof pb_svc_manager_manager_pb.ReRunJobRes)) {
    throw new Error('Expected argument of type pb.svc.manager.ReRunJobRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_svc_manager_ReRunJobRes(buffer_arg) {
  return pb_svc_manager_manager_pb.ReRunJobRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_svc_manager_StopJobReq(arg) {
  if (!(arg instanceof pb_svc_manager_manager_pb.StopJobReq)) {
    throw new Error('Expected argument of type pb.svc.manager.StopJobReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_svc_manager_StopJobReq(buffer_arg) {
  return pb_svc_manager_manager_pb.StopJobReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_svc_manager_StopJobRes(arg) {
  if (!(arg instanceof pb_svc_manager_manager_pb.StopJobRes)) {
    throw new Error('Expected argument of type pb.svc.manager.StopJobRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_svc_manager_StopJobRes(buffer_arg) {
  return pb_svc_manager_manager_pb.StopJobRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_svc_manager_UpdateJobStatusReq(arg) {
  if (!(arg instanceof pb_svc_manager_manager_pb.UpdateJobStatusReq)) {
    throw new Error('Expected argument of type pb.svc.manager.UpdateJobStatusReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_svc_manager_UpdateJobStatusReq(buffer_arg) {
  return pb_svc_manager_manager_pb.UpdateJobStatusReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_svc_manager_UpdateJobStatusRes(arg) {
  if (!(arg instanceof pb_svc_manager_manager_pb.UpdateJobStatusRes)) {
    throw new Error('Expected argument of type pb.svc.manager.UpdateJobStatusRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_svc_manager_UpdateJobStatusRes(buffer_arg) {
  return pb_svc_manager_manager_pb.UpdateJobStatusRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_svc_manager_UpdateWorkerStatusReq(arg) {
  if (!(arg instanceof pb_svc_manager_manager_pb.UpdateWorkerStatusReq)) {
    throw new Error('Expected argument of type pb.svc.manager.UpdateWorkerStatusReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_svc_manager_UpdateWorkerStatusReq(buffer_arg) {
  return pb_svc_manager_manager_pb.UpdateWorkerStatusReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_svc_manager_UpdateWorkerStatusRes(arg) {
  if (!(arg instanceof pb_svc_manager_manager_pb.UpdateWorkerStatusRes)) {
    throw new Error('Expected argument of type pb.svc.manager.UpdateWorkerStatusRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_svc_manager_UpdateWorkerStatusRes(buffer_arg) {
  return pb_svc_manager_manager_pb.UpdateWorkerStatusRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_svc_manager_WhenAnalyzerHavingErrReq(arg) {
  if (!(arg instanceof pb_svc_manager_manager_pb.WhenAnalyzerHavingErrReq)) {
    throw new Error('Expected argument of type pb.svc.manager.WhenAnalyzerHavingErrReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_svc_manager_WhenAnalyzerHavingErrReq(buffer_arg) {
  return pb_svc_manager_manager_pb.WhenAnalyzerHavingErrReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_svc_manager_WhenAnalyzerHavingErrRes(arg) {
  if (!(arg instanceof pb_svc_manager_manager_pb.WhenAnalyzerHavingErrRes)) {
    throw new Error('Expected argument of type pb.svc.manager.WhenAnalyzerHavingErrRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_svc_manager_WhenAnalyzerHavingErrRes(buffer_arg) {
  return pb_svc_manager_manager_pb.WhenAnalyzerHavingErrRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_svc_manager_WhenDoneAnalyzerReq(arg) {
  if (!(arg instanceof pb_svc_manager_manager_pb.WhenDoneAnalyzerReq)) {
    throw new Error('Expected argument of type pb.svc.manager.WhenDoneAnalyzerReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_svc_manager_WhenDoneAnalyzerReq(buffer_arg) {
  return pb_svc_manager_manager_pb.WhenDoneAnalyzerReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_svc_manager_WhenDoneAnalyzerRes(arg) {
  if (!(arg instanceof pb_svc_manager_manager_pb.WhenDoneAnalyzerRes)) {
    throw new Error('Expected argument of type pb.svc.manager.WhenDoneAnalyzerRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_svc_manager_WhenDoneAnalyzerRes(buffer_arg) {
  return pb_svc_manager_manager_pb.WhenDoneAnalyzerRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_svc_manager_WhenDoneScraperReq(arg) {
  if (!(arg instanceof pb_svc_manager_manager_pb.WhenDoneScraperReq)) {
    throw new Error('Expected argument of type pb.svc.manager.WhenDoneScraperReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_svc_manager_WhenDoneScraperReq(buffer_arg) {
  return pb_svc_manager_manager_pb.WhenDoneScraperReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_svc_manager_WhenDoneScraperRes(arg) {
  if (!(arg instanceof pb_svc_manager_manager_pb.WhenDoneScraperRes)) {
    throw new Error('Expected argument of type pb.svc.manager.WhenDoneScraperRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_svc_manager_WhenDoneScraperRes(buffer_arg) {
  return pb_svc_manager_manager_pb.WhenDoneScraperRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_svc_manager_WhenScraperHavingErrReq(arg) {
  if (!(arg instanceof pb_svc_manager_manager_pb.WhenScraperHavingErrReq)) {
    throw new Error('Expected argument of type pb.svc.manager.WhenScraperHavingErrReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_svc_manager_WhenScraperHavingErrReq(buffer_arg) {
  return pb_svc_manager_manager_pb.WhenScraperHavingErrReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_svc_manager_WhenScraperHavingErrRes(arg) {
  if (!(arg instanceof pb_svc_manager_manager_pb.WhenScraperHavingErrRes)) {
    throw new Error('Expected argument of type pb.svc.manager.WhenScraperHavingErrRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_svc_manager_WhenScraperHavingErrRes(buffer_arg) {
  return pb_svc_manager_manager_pb.WhenScraperHavingErrRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_svc_manager_WhenStartAnalyzerReq(arg) {
  if (!(arg instanceof pb_svc_manager_manager_pb.WhenStartAnalyzerReq)) {
    throw new Error('Expected argument of type pb.svc.manager.WhenStartAnalyzerReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_svc_manager_WhenStartAnalyzerReq(buffer_arg) {
  return pb_svc_manager_manager_pb.WhenStartAnalyzerReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_svc_manager_WhenStartAnalyzerRes(arg) {
  if (!(arg instanceof pb_svc_manager_manager_pb.WhenStartAnalyzerRes)) {
    throw new Error('Expected argument of type pb.svc.manager.WhenStartAnalyzerRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_svc_manager_WhenStartAnalyzerRes(buffer_arg) {
  return pb_svc_manager_manager_pb.WhenStartAnalyzerRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_svc_manager_WhenStartScraperReq(arg) {
  if (!(arg instanceof pb_svc_manager_manager_pb.WhenStartScraperReq)) {
    throw new Error('Expected argument of type pb.svc.manager.WhenStartScraperReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_svc_manager_WhenStartScraperReq(buffer_arg) {
  return pb_svc_manager_manager_pb.WhenStartScraperReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_svc_manager_WhenStartScraperRes(arg) {
  if (!(arg instanceof pb_svc_manager_manager_pb.WhenStartScraperRes)) {
    throw new Error('Expected argument of type pb.svc.manager.WhenStartScraperRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_svc_manager_WhenStartScraperRes(buffer_arg) {
  return pb_svc_manager_manager_pb.WhenStartScraperRes.deserializeBinary(new Uint8Array(buffer_arg));
}


var ManagerService = exports.ManagerService = {
  createNewJob: {
    path: '/pb.svc.manager.Manager/CreateNewJob',
    requestStream: false,
    responseStream: false,
    requestType: pb_svc_manager_manager_pb.CreateNewJobReq,
    responseType: pb_svc_manager_manager_pb.CreateNewJobRes,
    requestSerialize: serialize_pb_svc_manager_CreateNewJobReq,
    requestDeserialize: deserialize_pb_svc_manager_CreateNewJobReq,
    responseSerialize: serialize_pb_svc_manager_CreateNewJobRes,
    responseDeserialize: deserialize_pb_svc_manager_CreateNewJobRes,
  },
  reRunJob: {
    path: '/pb.svc.manager.Manager/ReRunJob',
    requestStream: false,
    responseStream: false,
    requestType: pb_svc_manager_manager_pb.ReRunJobReq,
    responseType: pb_svc_manager_manager_pb.ReRunJobRes,
    requestSerialize: serialize_pb_svc_manager_ReRunJobReq,
    requestDeserialize: deserialize_pb_svc_manager_ReRunJobReq,
    responseSerialize: serialize_pb_svc_manager_ReRunJobRes,
    responseDeserialize: deserialize_pb_svc_manager_ReRunJobRes,
  },
  getJobStatus: {
    path: '/pb.svc.manager.Manager/GetJobStatus',
    requestStream: false,
    responseStream: false,
    requestType: pb_svc_manager_manager_pb.GetJobStatusReq,
    responseType: pb_svc_manager_manager_pb.GetJobStatusRes,
    requestSerialize: serialize_pb_svc_manager_GetJobStatusReq,
    requestDeserialize: deserialize_pb_svc_manager_GetJobStatusReq,
    responseSerialize: serialize_pb_svc_manager_GetJobStatusRes,
    responseDeserialize: deserialize_pb_svc_manager_GetJobStatusRes,
  },
  getJobList: {
    path: '/pb.svc.manager.Manager/GetJobList',
    requestStream: false,
    responseStream: false,
    requestType: pb_svc_manager_manager_pb.GetJobListReq,
    responseType: pb_svc_manager_manager_pb.GetJobListRes,
    requestSerialize: serialize_pb_svc_manager_GetJobListReq,
    requestDeserialize: deserialize_pb_svc_manager_GetJobListReq,
    responseSerialize: serialize_pb_svc_manager_GetJobListRes,
    responseDeserialize: deserialize_pb_svc_manager_GetJobListRes,
  },
  getJobIsReRun: {
    path: '/pb.svc.manager.Manager/GetJobIsReRun',
    requestStream: false,
    responseStream: false,
    requestType: pb_svc_manager_manager_pb.GetJobIsReRunReq,
    responseType: pb_svc_manager_manager_pb.GetJobIsReRunRes,
    requestSerialize: serialize_pb_svc_manager_GetJobIsReRunReq,
    requestDeserialize: deserialize_pb_svc_manager_GetJobIsReRunReq,
    responseSerialize: serialize_pb_svc_manager_GetJobIsReRunRes,
    responseDeserialize: deserialize_pb_svc_manager_GetJobIsReRunRes,
  },
  getWorkerList: {
    path: '/pb.svc.manager.Manager/GetWorkerList',
    requestStream: false,
    responseStream: false,
    requestType: pb_svc_manager_manager_pb.GetWorkerListReq,
    responseType: pb_svc_manager_manager_pb.GetWorkerListRes,
    requestSerialize: serialize_pb_svc_manager_GetWorkerListReq,
    requestDeserialize: deserialize_pb_svc_manager_GetWorkerListReq,
    responseSerialize: serialize_pb_svc_manager_GetWorkerListRes,
    responseDeserialize: deserialize_pb_svc_manager_GetWorkerListRes,
  },
  getArticleInfo: {
    path: '/pb.svc.manager.Manager/GetArticleInfo',
    requestStream: false,
    responseStream: false,
    requestType: pb_svc_manager_manager_pb.GetArticleInfoReq,
    responseType: pb_svc_manager_manager_pb.GetArticleInfoRes,
    requestSerialize: serialize_pb_svc_manager_GetArticleInfoReq,
    requestDeserialize: deserialize_pb_svc_manager_GetArticleInfoReq,
    responseSerialize: serialize_pb_svc_manager_GetArticleInfoRes,
    responseDeserialize: deserialize_pb_svc_manager_GetArticleInfoRes,
  },
  getArticleList: {
    path: '/pb.svc.manager.Manager/GetArticleList',
    requestStream: false,
    responseStream: false,
    requestType: pb_svc_manager_manager_pb.GetArticleListReq,
    responseType: pb_svc_manager_manager_pb.GetArticleListRes,
    requestSerialize: serialize_pb_svc_manager_GetArticleListReq,
    requestDeserialize: deserialize_pb_svc_manager_GetArticleListReq,
    responseSerialize: serialize_pb_svc_manager_GetArticleListRes,
    responseDeserialize: deserialize_pb_svc_manager_GetArticleListRes,
  },
  getArticleCountByHour: {
    path: '/pb.svc.manager.Manager/GetArticleCountByHour',
    requestStream: false,
    responseStream: false,
    requestType: pb_svc_manager_manager_pb.GetArticleCountByHourReq,
    responseType: pb_svc_manager_manager_pb.GetArticleCountByHourRes,
    requestSerialize: serialize_pb_svc_manager_GetArticleCountByHourReq,
    requestDeserialize: deserialize_pb_svc_manager_GetArticleCountByHourReq,
    responseSerialize: serialize_pb_svc_manager_GetArticleCountByHourRes,
    responseDeserialize: deserialize_pb_svc_manager_GetArticleCountByHourRes,
  },
  getArticleCountByDay: {
    path: '/pb.svc.manager.Manager/GetArticleCountByDay',
    requestStream: false,
    responseStream: false,
    requestType: pb_svc_manager_manager_pb.GetArticleCountByDayReq,
    responseType: pb_svc_manager_manager_pb.GetArticleCountByDayRes,
    requestSerialize: serialize_pb_svc_manager_GetArticleCountByDayReq,
    requestDeserialize: deserialize_pb_svc_manager_GetArticleCountByDayReq,
    responseSerialize: serialize_pb_svc_manager_GetArticleCountByDayRes,
    responseDeserialize: deserialize_pb_svc_manager_GetArticleCountByDayRes,
  },
  updateWorkerStatus: {
    path: '/pb.svc.manager.Manager/UpdateWorkerStatus',
    requestStream: false,
    responseStream: false,
    requestType: pb_svc_manager_manager_pb.UpdateWorkerStatusReq,
    responseType: pb_svc_manager_manager_pb.UpdateWorkerStatusRes,
    requestSerialize: serialize_pb_svc_manager_UpdateWorkerStatusReq,
    requestDeserialize: deserialize_pb_svc_manager_UpdateWorkerStatusReq,
    responseSerialize: serialize_pb_svc_manager_UpdateWorkerStatusRes,
    responseDeserialize: deserialize_pb_svc_manager_UpdateWorkerStatusRes,
  },
  updateJobStatus: {
    path: '/pb.svc.manager.Manager/UpdateJobStatus',
    requestStream: false,
    responseStream: false,
    requestType: pb_svc_manager_manager_pb.UpdateJobStatusReq,
    responseType: pb_svc_manager_manager_pb.UpdateJobStatusRes,
    requestSerialize: serialize_pb_svc_manager_UpdateJobStatusReq,
    requestDeserialize: deserialize_pb_svc_manager_UpdateJobStatusReq,
    responseSerialize: serialize_pb_svc_manager_UpdateJobStatusRes,
    responseDeserialize: deserialize_pb_svc_manager_UpdateJobStatusRes,
  },
  whenStartScraper: {
    path: '/pb.svc.manager.Manager/WhenStartScraper',
    requestStream: false,
    responseStream: false,
    requestType: pb_svc_manager_manager_pb.WhenStartScraperReq,
    responseType: pb_svc_manager_manager_pb.WhenStartScraperRes,
    requestSerialize: serialize_pb_svc_manager_WhenStartScraperReq,
    requestDeserialize: deserialize_pb_svc_manager_WhenStartScraperReq,
    responseSerialize: serialize_pb_svc_manager_WhenStartScraperRes,
    responseDeserialize: deserialize_pb_svc_manager_WhenStartScraperRes,
  },
  whenDoneScraper: {
    path: '/pb.svc.manager.Manager/WhenDoneScraper',
    requestStream: false,
    responseStream: false,
    requestType: pb_svc_manager_manager_pb.WhenDoneScraperReq,
    responseType: pb_svc_manager_manager_pb.WhenDoneScraperRes,
    requestSerialize: serialize_pb_svc_manager_WhenDoneScraperReq,
    requestDeserialize: deserialize_pb_svc_manager_WhenDoneScraperReq,
    responseSerialize: serialize_pb_svc_manager_WhenDoneScraperRes,
    responseDeserialize: deserialize_pb_svc_manager_WhenDoneScraperRes,
  },
  whenStartAnalyzer: {
    path: '/pb.svc.manager.Manager/WhenStartAnalyzer',
    requestStream: false,
    responseStream: false,
    requestType: pb_svc_manager_manager_pb.WhenStartAnalyzerReq,
    responseType: pb_svc_manager_manager_pb.WhenStartAnalyzerRes,
    requestSerialize: serialize_pb_svc_manager_WhenStartAnalyzerReq,
    requestDeserialize: deserialize_pb_svc_manager_WhenStartAnalyzerReq,
    responseSerialize: serialize_pb_svc_manager_WhenStartAnalyzerRes,
    responseDeserialize: deserialize_pb_svc_manager_WhenStartAnalyzerRes,
  },
  whenDoneAnalyzer: {
    path: '/pb.svc.manager.Manager/WhenDoneAnalyzer',
    requestStream: false,
    responseStream: false,
    requestType: pb_svc_manager_manager_pb.WhenDoneAnalyzerReq,
    responseType: pb_svc_manager_manager_pb.WhenDoneAnalyzerRes,
    requestSerialize: serialize_pb_svc_manager_WhenDoneAnalyzerReq,
    requestDeserialize: deserialize_pb_svc_manager_WhenDoneAnalyzerReq,
    responseSerialize: serialize_pb_svc_manager_WhenDoneAnalyzerRes,
    responseDeserialize: deserialize_pb_svc_manager_WhenDoneAnalyzerRes,
  },
  whenScraperHavingErr: {
    path: '/pb.svc.manager.Manager/WhenScraperHavingErr',
    requestStream: false,
    responseStream: false,
    requestType: pb_svc_manager_manager_pb.WhenScraperHavingErrReq,
    responseType: pb_svc_manager_manager_pb.WhenScraperHavingErrRes,
    requestSerialize: serialize_pb_svc_manager_WhenScraperHavingErrReq,
    requestDeserialize: deserialize_pb_svc_manager_WhenScraperHavingErrReq,
    responseSerialize: serialize_pb_svc_manager_WhenScraperHavingErrRes,
    responseDeserialize: deserialize_pb_svc_manager_WhenScraperHavingErrRes,
  },
  whenAnalyzerHavingErr: {
    path: '/pb.svc.manager.Manager/WhenAnalyzerHavingErr',
    requestStream: false,
    responseStream: false,
    requestType: pb_svc_manager_manager_pb.WhenAnalyzerHavingErrReq,
    responseType: pb_svc_manager_manager_pb.WhenAnalyzerHavingErrRes,
    requestSerialize: serialize_pb_svc_manager_WhenAnalyzerHavingErrReq,
    requestDeserialize: deserialize_pb_svc_manager_WhenAnalyzerHavingErrReq,
    responseSerialize: serialize_pb_svc_manager_WhenAnalyzerHavingErrRes,
    responseDeserialize: deserialize_pb_svc_manager_WhenAnalyzerHavingErrRes,
  },
  stopJob: {
    path: '/pb.svc.manager.Manager/StopJob',
    requestStream: false,
    responseStream: false,
    requestType: pb_svc_manager_manager_pb.StopJobReq,
    responseType: pb_svc_manager_manager_pb.StopJobRes,
    requestSerialize: serialize_pb_svc_manager_StopJobReq,
    requestDeserialize: deserialize_pb_svc_manager_StopJobReq,
    responseSerialize: serialize_pb_svc_manager_StopJobRes,
    responseDeserialize: deserialize_pb_svc_manager_StopJobRes,
  },
};

exports.ManagerClient = grpc.makeGenericClientConstructor(ManagerService);
