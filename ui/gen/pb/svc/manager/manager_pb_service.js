// package: pb.svc.manager
// file: pb/svc/manager/manager.proto

var pb_svc_manager_manager_pb = require("../../../pb/svc/manager/manager_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Manager = (function () {
  function Manager() {}
  Manager.serviceName = "pb.svc.manager.Manager";
  return Manager;
}());

Manager.CreateNewJob = {
  methodName: "CreateNewJob",
  service: Manager,
  requestStream: false,
  responseStream: false,
  requestType: pb_svc_manager_manager_pb.CreateNewJobReq,
  responseType: pb_svc_manager_manager_pb.CreateNewJobRes
};

Manager.GetJobStatus = {
  methodName: "GetJobStatus",
  service: Manager,
  requestStream: false,
  responseStream: false,
  requestType: pb_svc_manager_manager_pb.GetJobStatusReq,
  responseType: pb_svc_manager_manager_pb.GetJobStatusRes
};

Manager.GetJobList = {
  methodName: "GetJobList",
  service: Manager,
  requestStream: false,
  responseStream: false,
  requestType: pb_svc_manager_manager_pb.GetJobListReq,
  responseType: pb_svc_manager_manager_pb.GetJobListRes
};

Manager.GetWorkerList = {
  methodName: "GetWorkerList",
  service: Manager,
  requestStream: false,
  responseStream: false,
  requestType: pb_svc_manager_manager_pb.GetWorkerListReq,
  responseType: pb_svc_manager_manager_pb.GetWorkerListRes
};

Manager.GetArticleList = {
  methodName: "GetArticleList",
  service: Manager,
  requestStream: false,
  responseStream: false,
  requestType: pb_svc_manager_manager_pb.GetArticleListReq,
  responseType: pb_svc_manager_manager_pb.GetArticleListRes
};

Manager.UpdateJobStatus = {
  methodName: "UpdateJobStatus",
  service: Manager,
  requestStream: false,
  responseStream: false,
  requestType: pb_svc_manager_manager_pb.UpdateJobStatusReq,
  responseType: pb_svc_manager_manager_pb.UpdateJobStatusRes
};

Manager.DoneScraper = {
  methodName: "DoneScraper",
  service: Manager,
  requestStream: false,
  responseStream: false,
  requestType: pb_svc_manager_manager_pb.DoneScraperReq,
  responseType: pb_svc_manager_manager_pb.DoneScraperRes
};

Manager.DoneAnalyzer = {
  methodName: "DoneAnalyzer",
  service: Manager,
  requestStream: false,
  responseStream: false,
  requestType: pb_svc_manager_manager_pb.DoneAnalyzerReq,
  responseType: pb_svc_manager_manager_pb.DoneAnalyzerRes
};

Manager.StopJob = {
  methodName: "StopJob",
  service: Manager,
  requestStream: false,
  responseStream: false,
  requestType: pb_svc_manager_manager_pb.StopJobReq,
  responseType: pb_svc_manager_manager_pb.StopJobRes
};

exports.Manager = Manager;

function ManagerClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ManagerClient.prototype.createNewJob = function createNewJob(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Manager.CreateNewJob, {
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

ManagerClient.prototype.getJobStatus = function getJobStatus(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Manager.GetJobStatus, {
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

ManagerClient.prototype.getJobList = function getJobList(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Manager.GetJobList, {
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

ManagerClient.prototype.getWorkerList = function getWorkerList(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Manager.GetWorkerList, {
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

ManagerClient.prototype.getArticleList = function getArticleList(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Manager.GetArticleList, {
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

ManagerClient.prototype.updateJobStatus = function updateJobStatus(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Manager.UpdateJobStatus, {
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

ManagerClient.prototype.doneScraper = function doneScraper(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Manager.DoneScraper, {
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

ManagerClient.prototype.doneAnalyzer = function doneAnalyzer(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Manager.DoneAnalyzer, {
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

ManagerClient.prototype.stopJob = function stopJob(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Manager.StopJob, {
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

exports.ManagerClient = ManagerClient;

