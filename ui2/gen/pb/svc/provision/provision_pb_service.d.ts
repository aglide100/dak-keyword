// package: pb.svc.provision
// file: pb/svc/provision/provision.proto

import * as pb_svc_provision_provision_pb from "../../../pb/svc/provision/provision_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ProvisionCreateScraper = {
  readonly methodName: string;
  readonly service: typeof Provision;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pb_svc_provision_provision_pb.CreateScraperReq;
  readonly responseType: typeof pb_svc_provision_provision_pb.CreateScraperRes;
};

type ProvisionCreateAnalyzer = {
  readonly methodName: string;
  readonly service: typeof Provision;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pb_svc_provision_provision_pb.CreateAnalyzerReq;
  readonly responseType: typeof pb_svc_provision_provision_pb.CreateAnalyzerRes;
};

type ProvisionGetScraperStatus = {
  readonly methodName: string;
  readonly service: typeof Provision;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pb_svc_provision_provision_pb.GetScraperStatusReq;
  readonly responseType: typeof pb_svc_provision_provision_pb.GetScraperStatusRes;
};

type ProvisionGetAnalyzerStatus = {
  readonly methodName: string;
  readonly service: typeof Provision;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pb_svc_provision_provision_pb.GetAnalyzerStatusReq;
  readonly responseType: typeof pb_svc_provision_provision_pb.GetAnalyzerStatusRes;
};

type ProvisionRemoveScraper = {
  readonly methodName: string;
  readonly service: typeof Provision;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pb_svc_provision_provision_pb.RemoveScraperReq;
  readonly responseType: typeof pb_svc_provision_provision_pb.RemoveScraperRes;
};

type ProvisionRemoveAnalyzer = {
  readonly methodName: string;
  readonly service: typeof Provision;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pb_svc_provision_provision_pb.RemoveAnalyzerReq;
  readonly responseType: typeof pb_svc_provision_provision_pb.RemoveAnalyzerRes;
};

export class Provision {
  static readonly serviceName: string;
  static readonly CreateScraper: ProvisionCreateScraper;
  static readonly CreateAnalyzer: ProvisionCreateAnalyzer;
  static readonly GetScraperStatus: ProvisionGetScraperStatus;
  static readonly GetAnalyzerStatus: ProvisionGetAnalyzerStatus;
  static readonly RemoveScraper: ProvisionRemoveScraper;
  static readonly RemoveAnalyzer: ProvisionRemoveAnalyzer;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class ProvisionClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createScraper(
    requestMessage: pb_svc_provision_provision_pb.CreateScraperReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pb_svc_provision_provision_pb.CreateScraperRes|null) => void
  ): UnaryResponse;
  createScraper(
    requestMessage: pb_svc_provision_provision_pb.CreateScraperReq,
    callback: (error: ServiceError|null, responseMessage: pb_svc_provision_provision_pb.CreateScraperRes|null) => void
  ): UnaryResponse;
  createAnalyzer(
    requestMessage: pb_svc_provision_provision_pb.CreateAnalyzerReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pb_svc_provision_provision_pb.CreateAnalyzerRes|null) => void
  ): UnaryResponse;
  createAnalyzer(
    requestMessage: pb_svc_provision_provision_pb.CreateAnalyzerReq,
    callback: (error: ServiceError|null, responseMessage: pb_svc_provision_provision_pb.CreateAnalyzerRes|null) => void
  ): UnaryResponse;
  getScraperStatus(
    requestMessage: pb_svc_provision_provision_pb.GetScraperStatusReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pb_svc_provision_provision_pb.GetScraperStatusRes|null) => void
  ): UnaryResponse;
  getScraperStatus(
    requestMessage: pb_svc_provision_provision_pb.GetScraperStatusReq,
    callback: (error: ServiceError|null, responseMessage: pb_svc_provision_provision_pb.GetScraperStatusRes|null) => void
  ): UnaryResponse;
  getAnalyzerStatus(
    requestMessage: pb_svc_provision_provision_pb.GetAnalyzerStatusReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pb_svc_provision_provision_pb.GetAnalyzerStatusRes|null) => void
  ): UnaryResponse;
  getAnalyzerStatus(
    requestMessage: pb_svc_provision_provision_pb.GetAnalyzerStatusReq,
    callback: (error: ServiceError|null, responseMessage: pb_svc_provision_provision_pb.GetAnalyzerStatusRes|null) => void
  ): UnaryResponse;
  removeScraper(
    requestMessage: pb_svc_provision_provision_pb.RemoveScraperReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pb_svc_provision_provision_pb.RemoveScraperRes|null) => void
  ): UnaryResponse;
  removeScraper(
    requestMessage: pb_svc_provision_provision_pb.RemoveScraperReq,
    callback: (error: ServiceError|null, responseMessage: pb_svc_provision_provision_pb.RemoveScraperRes|null) => void
  ): UnaryResponse;
  removeAnalyzer(
    requestMessage: pb_svc_provision_provision_pb.RemoveAnalyzerReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pb_svc_provision_provision_pb.RemoveAnalyzerRes|null) => void
  ): UnaryResponse;
  removeAnalyzer(
    requestMessage: pb_svc_provision_provision_pb.RemoveAnalyzerReq,
    callback: (error: ServiceError|null, responseMessage: pb_svc_provision_provision_pb.RemoveAnalyzerRes|null) => void
  ): UnaryResponse;
}

