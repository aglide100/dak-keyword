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

Manager.GetArticleInfo = {
  methodName: "GetArticleInfo",
  service: Manager,
  requestStream: false,
  responseStream: false,
  requestType: pb_svc_manager_manager_pb.GetArticleInfoReq,
  responseType: pb_svc_manager_manager_pb.GetArticleInfoRes
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

Manager.WhenStartScraper = {
  methodName: "WhenStartScraper",
  service: Manager,
  requestStream: false,
  responseStream: false,
  requestType: pb_svc_manager_manager_pb.WhenStartScraperReq,
  responseType: pb_svc_manager_manager_pb.WhenStartScraperRes
};

Manager.WhenDoneScraper = {
  methodName: "WhenDoneScraper",
  service: Manager,
  requestStream: false,
  responseStream: false,
  requestType: pb_svc_manager_manager_pb.WhenDoneScraperReq,
  responseType: pb_svc_manager_manager_pb.WhenDoneScraperRes
};

Manager.WhenStartAnalyzer = {
  methodName: "WhenStartAnalyzer",
  service: Manager,
  requestStream: false,
  responseStream: false,
  requestType: pb_svc_manager_manager_pb.WhenStartAnalyzerReq,
  responseType: pb_svc_manager_manager_pb.WhenStartAnalyzerRes
};

Manager.WhenDoneAnalyzer = {
  methodName: "WhenDoneAnalyzer",
  service: Manager,
  requestStream: false,
  responseStream: false,
  requestType: pb_svc_manager_manager_pb.WhenDoneAnalyzerReq,
  responseType: pb_svc_manager_manager_pb.WhenDoneAnalyzerRes
};

Manager.WhenScraperHavingErr = {
  methodName: "WhenScraperHavingErr",
  service: Manager,
  requestStream: false,
  responseStream: false,
  requestType: pb_svc_manager_manager_pb.WhenScraperHavingErrReq,
  responseType: pb_svc_manager_manager_pb.WhenScraperHavingErrRes
};

Manager.WhenAnalyzerHavingErr = {
  methodName: "WhenAnalyzerHavingErr",
  service: Manager,
  requestStream: false,
  responseStream: false,
  requestType: pb_svc_manager_manager_pb.WhenAnalyzerHavingErrReq,
  responseType: pb_svc_manager_manager_pb.WhenAnalyzerHavingErrRes
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

ManagerClient.prototype.getArticleInfo = function getArticleInfo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Manager.GetArticleInfo, {
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

ManagerClient.prototype.whenStartScraper = function whenStartScraper(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Manager.WhenStartScraper, {
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

ManagerClient.prototype.whenDoneScraper = function whenDoneScraper(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Manager.WhenDoneScraper, {
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

ManagerClient.prototype.whenStartAnalyzer = function whenStartAnalyzer(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Manager.WhenStartAnalyzer, {
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

ManagerClient.prototype.whenDoneAnalyzer = function whenDoneAnalyzer(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Manager.WhenDoneAnalyzer, {
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

ManagerClient.prototype.whenScraperHavingErr = function whenScraperHavingErr(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Manager.WhenScraperHavingErr, {
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

ManagerClient.prototype.whenAnalyzerHavingErr = function whenAnalyzerHavingErr(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Manager.WhenAnalyzerHavingErr, {
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

