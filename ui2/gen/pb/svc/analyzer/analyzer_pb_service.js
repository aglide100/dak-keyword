// package: pb.svc.analyzer
// file: pb/svc/analyzer/analyzer.proto

var pb_svc_analyzer_analyzer_pb = require("../../../pb/svc/analyzer/analyzer_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Analyzer = (function () {
  function Analyzer() {}
  Analyzer.serviceName = "pb.svc.analyzer.Analyzer";
  return Analyzer;
}());

Analyzer.StartAnalyzer = {
  methodName: "StartAnalyzer",
  service: Analyzer,
  requestStream: false,
  responseStream: false,
  requestType: pb_svc_analyzer_analyzer_pb.StartAnalyzerReq,
  responseType: pb_svc_analyzer_analyzer_pb.StartAnalyzerRes
};

Analyzer.GetStatus = {
  methodName: "GetStatus",
  service: Analyzer,
  requestStream: false,
  responseStream: false,
  requestType: pb_svc_analyzer_analyzer_pb.GetStatusReq,
  responseType: pb_svc_analyzer_analyzer_pb.GetStatusRes
};

exports.Analyzer = Analyzer;

function AnalyzerClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AnalyzerClient.prototype.startAnalyzer = function startAnalyzer(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Analyzer.StartAnalyzer, {
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

AnalyzerClient.prototype.getStatus = function getStatus(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Analyzer.GetStatus, {
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

exports.AnalyzerClient = AnalyzerClient;

