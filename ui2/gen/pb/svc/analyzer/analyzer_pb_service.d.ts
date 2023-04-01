// package: pb.svc.analyzer
// file: pb/svc/analyzer/analyzer.proto

import * as pb_svc_analyzer_analyzer_pb from "../../../pb/svc/analyzer/analyzer_pb";
import {grpc} from "@improbable-eng/grpc-web";

type AnalyzerStartAnalyzer = {
  readonly methodName: string;
  readonly service: typeof Analyzer;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pb_svc_analyzer_analyzer_pb.StartAnalyzerReq;
  readonly responseType: typeof pb_svc_analyzer_analyzer_pb.StartAnalyzerRes;
};

type AnalyzerGetStatus = {
  readonly methodName: string;
  readonly service: typeof Analyzer;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pb_svc_analyzer_analyzer_pb.GetStatusReq;
  readonly responseType: typeof pb_svc_analyzer_analyzer_pb.GetStatusRes;
};

export class Analyzer {
  static readonly serviceName: string;
  static readonly StartAnalyzer: AnalyzerStartAnalyzer;
  static readonly GetStatus: AnalyzerGetStatus;
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

export class AnalyzerClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  startAnalyzer(
    requestMessage: pb_svc_analyzer_analyzer_pb.StartAnalyzerReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pb_svc_analyzer_analyzer_pb.StartAnalyzerRes|null) => void
  ): UnaryResponse;
  startAnalyzer(
    requestMessage: pb_svc_analyzer_analyzer_pb.StartAnalyzerReq,
    callback: (error: ServiceError|null, responseMessage: pb_svc_analyzer_analyzer_pb.StartAnalyzerRes|null) => void
  ): UnaryResponse;
  getStatus(
    requestMessage: pb_svc_analyzer_analyzer_pb.GetStatusReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pb_svc_analyzer_analyzer_pb.GetStatusRes|null) => void
  ): UnaryResponse;
  getStatus(
    requestMessage: pb_svc_analyzer_analyzer_pb.GetStatusReq,
    callback: (error: ServiceError|null, responseMessage: pb_svc_analyzer_analyzer_pb.GetStatusRes|null) => void
  ): UnaryResponse;
}

