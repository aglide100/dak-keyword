// package: pb.svc.manager
// file: pb/svc/manager/manager.proto

import * as pb_svc_manager_manager_pb from "../../../pb/svc/manager/manager_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ManagerCreateNewJob = {
  readonly methodName: string;
  readonly service: typeof Manager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pb_svc_manager_manager_pb.CreateNewJobReq;
  readonly responseType: typeof pb_svc_manager_manager_pb.CreateNewJobRes;
};

type ManagerGetJobStatus = {
  readonly methodName: string;
  readonly service: typeof Manager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pb_svc_manager_manager_pb.GetJobStatusReq;
  readonly responseType: typeof pb_svc_manager_manager_pb.GetJobStatusRes;
};

type ManagerGetJobList = {
  readonly methodName: string;
  readonly service: typeof Manager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pb_svc_manager_manager_pb.GetJobListReq;
  readonly responseType: typeof pb_svc_manager_manager_pb.GetJobListRes;
};

type ManagerGetWorkerList = {
  readonly methodName: string;
  readonly service: typeof Manager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pb_svc_manager_manager_pb.GetWorkerListReq;
  readonly responseType: typeof pb_svc_manager_manager_pb.GetWorkerListRes;
};

type ManagerUpdateJobStatus = {
  readonly methodName: string;
  readonly service: typeof Manager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pb_svc_manager_manager_pb.UpdateJobStatusReq;
  readonly responseType: typeof pb_svc_manager_manager_pb.UpdateJobStatusRes;
};

type ManagerDoneScraper = {
  readonly methodName: string;
  readonly service: typeof Manager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pb_svc_manager_manager_pb.DoneScraperReq;
  readonly responseType: typeof pb_svc_manager_manager_pb.DoneScraperRes;
};

type ManagerDoneAnalyzer = {
  readonly methodName: string;
  readonly service: typeof Manager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pb_svc_manager_manager_pb.DoneAnalyzerReq;
  readonly responseType: typeof pb_svc_manager_manager_pb.DoneAnalyzerRes;
};

type ManagerStopJob = {
  readonly methodName: string;
  readonly service: typeof Manager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pb_svc_manager_manager_pb.StopJobReq;
  readonly responseType: typeof pb_svc_manager_manager_pb.StopJobRes;
};

export class Manager {
  static readonly serviceName: string;
  static readonly CreateNewJob: ManagerCreateNewJob;
  static readonly GetJobStatus: ManagerGetJobStatus;
  static readonly GetJobList: ManagerGetJobList;
  static readonly GetWorkerList: ManagerGetWorkerList;
  static readonly UpdateJobStatus: ManagerUpdateJobStatus;
  static readonly DoneScraper: ManagerDoneScraper;
  static readonly DoneAnalyzer: ManagerDoneAnalyzer;
  static readonly StopJob: ManagerStopJob;
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

export class ManagerClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createNewJob(
    requestMessage: pb_svc_manager_manager_pb.CreateNewJobReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pb_svc_manager_manager_pb.CreateNewJobRes|null) => void
  ): UnaryResponse;
  createNewJob(
    requestMessage: pb_svc_manager_manager_pb.CreateNewJobReq,
    callback: (error: ServiceError|null, responseMessage: pb_svc_manager_manager_pb.CreateNewJobRes|null) => void
  ): UnaryResponse;
  getJobStatus(
    requestMessage: pb_svc_manager_manager_pb.GetJobStatusReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pb_svc_manager_manager_pb.GetJobStatusRes|null) => void
  ): UnaryResponse;
  getJobStatus(
    requestMessage: pb_svc_manager_manager_pb.GetJobStatusReq,
    callback: (error: ServiceError|null, responseMessage: pb_svc_manager_manager_pb.GetJobStatusRes|null) => void
  ): UnaryResponse;
  getJobList(
    requestMessage: pb_svc_manager_manager_pb.GetJobListReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pb_svc_manager_manager_pb.GetJobListRes|null) => void
  ): UnaryResponse;
  getJobList(
    requestMessage: pb_svc_manager_manager_pb.GetJobListReq,
    callback: (error: ServiceError|null, responseMessage: pb_svc_manager_manager_pb.GetJobListRes|null) => void
  ): UnaryResponse;
  getWorkerList(
    requestMessage: pb_svc_manager_manager_pb.GetWorkerListReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pb_svc_manager_manager_pb.GetWorkerListRes|null) => void
  ): UnaryResponse;
  getWorkerList(
    requestMessage: pb_svc_manager_manager_pb.GetWorkerListReq,
    callback: (error: ServiceError|null, responseMessage: pb_svc_manager_manager_pb.GetWorkerListRes|null) => void
  ): UnaryResponse;
  updateJobStatus(
    requestMessage: pb_svc_manager_manager_pb.UpdateJobStatusReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pb_svc_manager_manager_pb.UpdateJobStatusRes|null) => void
  ): UnaryResponse;
  updateJobStatus(
    requestMessage: pb_svc_manager_manager_pb.UpdateJobStatusReq,
    callback: (error: ServiceError|null, responseMessage: pb_svc_manager_manager_pb.UpdateJobStatusRes|null) => void
  ): UnaryResponse;
  doneScraper(
    requestMessage: pb_svc_manager_manager_pb.DoneScraperReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pb_svc_manager_manager_pb.DoneScraperRes|null) => void
  ): UnaryResponse;
  doneScraper(
    requestMessage: pb_svc_manager_manager_pb.DoneScraperReq,
    callback: (error: ServiceError|null, responseMessage: pb_svc_manager_manager_pb.DoneScraperRes|null) => void
  ): UnaryResponse;
  doneAnalyzer(
    requestMessage: pb_svc_manager_manager_pb.DoneAnalyzerReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pb_svc_manager_manager_pb.DoneAnalyzerRes|null) => void
  ): UnaryResponse;
  doneAnalyzer(
    requestMessage: pb_svc_manager_manager_pb.DoneAnalyzerReq,
    callback: (error: ServiceError|null, responseMessage: pb_svc_manager_manager_pb.DoneAnalyzerRes|null) => void
  ): UnaryResponse;
  stopJob(
    requestMessage: pb_svc_manager_manager_pb.StopJobReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pb_svc_manager_manager_pb.StopJobRes|null) => void
  ): UnaryResponse;
  stopJob(
    requestMessage: pb_svc_manager_manager_pb.StopJobReq,
    callback: (error: ServiceError|null, responseMessage: pb_svc_manager_manager_pb.StopJobRes|null) => void
  ): UnaryResponse;
}

