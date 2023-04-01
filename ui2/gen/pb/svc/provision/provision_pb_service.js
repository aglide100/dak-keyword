// package: pb.svc.provision
// file: pb/svc/provision/provision.proto

var pb_svc_provision_provision_pb = require("../../../pb/svc/provision/provision_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Provision = (function () {
  function Provision() {}
  Provision.serviceName = "pb.svc.provision.Provision";
  return Provision;
}());

Provision.CreateScraper = {
  methodName: "CreateScraper",
  service: Provision,
  requestStream: false,
  responseStream: false,
  requestType: pb_svc_provision_provision_pb.CreateScraperReq,
  responseType: pb_svc_provision_provision_pb.CreateScraperRes
};

Provision.CreateAnalyzer = {
  methodName: "CreateAnalyzer",
  service: Provision,
  requestStream: false,
  responseStream: false,
  requestType: pb_svc_provision_provision_pb.CreateAnalyzerReq,
  responseType: pb_svc_provision_provision_pb.CreateAnalyzerRes
};

Provision.GetScraperStatus = {
  methodName: "GetScraperStatus",
  service: Provision,
  requestStream: false,
  responseStream: false,
  requestType: pb_svc_provision_provision_pb.GetScraperStatusReq,
  responseType: pb_svc_provision_provision_pb.GetScraperStatusRes
};

Provision.GetAnalyzerStatus = {
  methodName: "GetAnalyzerStatus",
  service: Provision,
  requestStream: false,
  responseStream: false,
  requestType: pb_svc_provision_provision_pb.GetAnalyzerStatusReq,
  responseType: pb_svc_provision_provision_pb.GetAnalyzerStatusRes
};

Provision.RemoveScraper = {
  methodName: "RemoveScraper",
  service: Provision,
  requestStream: false,
  responseStream: false,
  requestType: pb_svc_provision_provision_pb.RemoveScraperReq,
  responseType: pb_svc_provision_provision_pb.RemoveScraperRes
};

Provision.RemoveAnalyzer = {
  methodName: "RemoveAnalyzer",
  service: Provision,
  requestStream: false,
  responseStream: false,
  requestType: pb_svc_provision_provision_pb.RemoveAnalyzerReq,
  responseType: pb_svc_provision_provision_pb.RemoveAnalyzerRes
};

exports.Provision = Provision;

function ProvisionClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ProvisionClient.prototype.createScraper = function createScraper(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Provision.CreateScraper, {
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

ProvisionClient.prototype.createAnalyzer = function createAnalyzer(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Provision.CreateAnalyzer, {
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

ProvisionClient.prototype.getScraperStatus = function getScraperStatus(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Provision.GetScraperStatus, {
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

ProvisionClient.prototype.getAnalyzerStatus = function getAnalyzerStatus(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Provision.GetAnalyzerStatus, {
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

ProvisionClient.prototype.removeScraper = function removeScraper(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Provision.RemoveScraper, {
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

ProvisionClient.prototype.removeAnalyzer = function removeAnalyzer(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Provision.RemoveAnalyzer, {
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

exports.ProvisionClient = ProvisionClient;

