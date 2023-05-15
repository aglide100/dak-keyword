// package: pb.svc.manager.job
// file: pb/svc/manager/job.proto

var pb_svc_manager_job_pb = require("../../../pb/svc/manager/job_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var JobService = (function () {
  function JobService() {}
  JobService.serviceName = "pb.svc.manager.job.JobService";
  return JobService;
}());

JobService.CreateNewJob = {
  methodName: "CreateNewJob",
  service: JobService,
  requestStream: false,
  responseStream: false,
  requestType: pb_svc_manager_job_pb.CreateNewJobReq,
  responseType: pb_svc_manager_job_pb.CreateNewJobRes
};

JobService.ReRunJob = {
  methodName: "ReRunJob",
  service: JobService,
  requestStream: false,
  responseStream: false,
  requestType: pb_svc_manager_job_pb.ReRunJobReq,
  responseType: pb_svc_manager_job_pb.ReRunJobRes
};

JobService.GetJobStatus = {
  methodName: "GetJobStatus",
  service: JobService,
  requestStream: false,
  responseStream: false,
  requestType: pb_svc_manager_job_pb.GetJobStatusReq,
  responseType: pb_svc_manager_job_pb.GetJobStatusRes
};

JobService.GetJobList = {
  methodName: "GetJobList",
  service: JobService,
  requestStream: false,
  responseStream: false,
  requestType: pb_svc_manager_job_pb.GetJobListReq,
  responseType: pb_svc_manager_job_pb.GetJobListRes
};

JobService.GetJobIsReRun = {
  methodName: "GetJobIsReRun",
  service: JobService,
  requestStream: false,
  responseStream: false,
  requestType: pb_svc_manager_job_pb.GetJobIsReRunReq,
  responseType: pb_svc_manager_job_pb.GetJobIsReRunRes
};

JobService.StopJob = {
  methodName: "StopJob",
  service: JobService,
  requestStream: false,
  responseStream: false,
  requestType: pb_svc_manager_job_pb.StopJobReq,
  responseType: pb_svc_manager_job_pb.StopJobRes
};

JobService.UpdateJobStatus = {
  methodName: "UpdateJobStatus",
  service: JobService,
  requestStream: false,
  responseStream: false,
  requestType: pb_svc_manager_job_pb.UpdateJobStatusReq,
  responseType: pb_svc_manager_job_pb.UpdateJobStatusRes
};

exports.JobService = JobService;

function JobServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

JobServiceClient.prototype.createNewJob = function createNewJob(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(JobService.CreateNewJob, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

JobServiceClient.prototype.reRunJob = function reRunJob(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(JobService.ReRunJob, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

JobServiceClient.prototype.getJobStatus = function getJobStatus(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(JobService.GetJobStatus, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

JobServiceClient.prototype.getJobList = function getJobList(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(JobService.GetJobList, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

JobServiceClient.prototype.getJobIsReRun = function getJobIsReRun(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(JobService.GetJobIsReRun, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

JobServiceClient.prototype.stopJob = function stopJob(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(JobService.StopJob, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

JobServiceClient.prototype.updateJobStatus = function updateJobStatus(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(JobService.UpdateJobStatus, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.JobServiceClient = JobServiceClient;

