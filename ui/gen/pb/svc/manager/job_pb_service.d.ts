// package: pb.svc.manager.job
// file: pb/svc/manager/job.proto

import * as pb_svc_manager_job_pb from "../../../pb/svc/manager/job_pb";
import {grpc} from "@improbable-eng/grpc-web";

type JobServiceCreateNewJob = {
  readonly methodName: string;
  readonly service: typeof JobService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pb_svc_manager_job_pb.CreateNewJobReq;
  readonly responseType: typeof pb_svc_manager_job_pb.CreateNewJobRes;
};

type JobServiceReRunJob = {
  readonly methodName: string;
  readonly service: typeof JobService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pb_svc_manager_job_pb.ReRunJobReq;
  readonly responseType: typeof pb_svc_manager_job_pb.ReRunJobRes;
};

type JobServiceGetJobStatus = {
  readonly methodName: string;
  readonly service: typeof JobService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pb_svc_manager_job_pb.GetJobStatusReq;
  readonly responseType: typeof pb_svc_manager_job_pb.GetJobStatusRes;
};

type JobServiceGetJobList = {
  readonly methodName: string;
  readonly service: typeof JobService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pb_svc_manager_job_pb.GetJobListReq;
  readonly responseType: typeof pb_svc_manager_job_pb.GetJobListRes;
};

type JobServiceGetJobIsReRun = {
  readonly methodName: string;
  readonly service: typeof JobService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pb_svc_manager_job_pb.GetJobIsReRunReq;
  readonly responseType: typeof pb_svc_manager_job_pb.GetJobIsReRunRes;
};

type JobServiceStopJob = {
  readonly methodName: string;
  readonly service: typeof JobService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pb_svc_manager_job_pb.StopJobReq;
  readonly responseType: typeof pb_svc_manager_job_pb.StopJobRes;
};

type JobServiceUpdateJobStatus = {
  readonly methodName: string;
  readonly service: typeof JobService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pb_svc_manager_job_pb.UpdateJobStatusReq;
  readonly responseType: typeof pb_svc_manager_job_pb.UpdateJobStatusRes;
};

export class JobService {
  static readonly serviceName: string;
  static readonly CreateNewJob: JobServiceCreateNewJob;
  static readonly ReRunJob: JobServiceReRunJob;
  static readonly GetJobStatus: JobServiceGetJobStatus;
  static readonly GetJobList: JobServiceGetJobList;
  static readonly GetJobIsReRun: JobServiceGetJobIsReRun;
  static readonly StopJob: JobServiceStopJob;
  static readonly UpdateJobStatus: JobServiceUpdateJobStatus;
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

export class JobServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createNewJob(
    requestMessage: pb_svc_manager_job_pb.CreateNewJobReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pb_svc_manager_job_pb.CreateNewJobRes|null) => void
  ): UnaryResponse;
  createNewJob(
    requestMessage: pb_svc_manager_job_pb.CreateNewJobReq,
    callback: (error: ServiceError|null, responseMessage: pb_svc_manager_job_pb.CreateNewJobRes|null) => void
  ): UnaryResponse;
  reRunJob(
    requestMessage: pb_svc_manager_job_pb.ReRunJobReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pb_svc_manager_job_pb.ReRunJobRes|null) => void
  ): UnaryResponse;
  reRunJob(
    requestMessage: pb_svc_manager_job_pb.ReRunJobReq,
    callback: (error: ServiceError|null, responseMessage: pb_svc_manager_job_pb.ReRunJobRes|null) => void
  ): UnaryResponse;
  getJobStatus(
    requestMessage: pb_svc_manager_job_pb.GetJobStatusReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pb_svc_manager_job_pb.GetJobStatusRes|null) => void
  ): UnaryResponse;
  getJobStatus(
    requestMessage: pb_svc_manager_job_pb.GetJobStatusReq,
    callback: (error: ServiceError|null, responseMessage: pb_svc_manager_job_pb.GetJobStatusRes|null) => void
  ): UnaryResponse;
  getJobList(
    requestMessage: pb_svc_manager_job_pb.GetJobListReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pb_svc_manager_job_pb.GetJobListRes|null) => void
  ): UnaryResponse;
  getJobList(
    requestMessage: pb_svc_manager_job_pb.GetJobListReq,
    callback: (error: ServiceError|null, responseMessage: pb_svc_manager_job_pb.GetJobListRes|null) => void
  ): UnaryResponse;
  getJobIsReRun(
    requestMessage: pb_svc_manager_job_pb.GetJobIsReRunReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pb_svc_manager_job_pb.GetJobIsReRunRes|null) => void
  ): UnaryResponse;
  getJobIsReRun(
    requestMessage: pb_svc_manager_job_pb.GetJobIsReRunReq,
    callback: (error: ServiceError|null, responseMessage: pb_svc_manager_job_pb.GetJobIsReRunRes|null) => void
  ): UnaryResponse;
  stopJob(
    requestMessage: pb_svc_manager_job_pb.StopJobReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pb_svc_manager_job_pb.StopJobRes|null) => void
  ): UnaryResponse;
  stopJob(
    requestMessage: pb_svc_manager_job_pb.StopJobReq,
    callback: (error: ServiceError|null, responseMessage: pb_svc_manager_job_pb.StopJobRes|null) => void
  ): UnaryResponse;
  updateJobStatus(
    requestMessage: pb_svc_manager_job_pb.UpdateJobStatusReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pb_svc_manager_job_pb.UpdateJobStatusRes|null) => void
  ): UnaryResponse;
  updateJobStatus(
    requestMessage: pb_svc_manager_job_pb.UpdateJobStatusReq,
    callback: (error: ServiceError|null, responseMessage: pb_svc_manager_job_pb.UpdateJobStatusRes|null) => void
  ): UnaryResponse;
}

