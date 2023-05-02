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

type ManagerReRunJob = {
  readonly methodName: string;
  readonly service: typeof Manager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pb_svc_manager_manager_pb.ReRunJobReq;
  readonly responseType: typeof pb_svc_manager_manager_pb.ReRunJobRes;
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

type ManagerGetJobIsReRun = {
  readonly methodName: string;
  readonly service: typeof Manager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pb_svc_manager_manager_pb.GetJobIsReRunReq;
  readonly responseType: typeof pb_svc_manager_manager_pb.GetJobIsReRunRes;
};

type ManagerGetWorkerList = {
  readonly methodName: string;
  readonly service: typeof Manager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pb_svc_manager_manager_pb.GetWorkerListReq;
  readonly responseType: typeof pb_svc_manager_manager_pb.GetWorkerListRes;
};

type ManagerGetArticleInfo = {
  readonly methodName: string;
  readonly service: typeof Manager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pb_svc_manager_manager_pb.GetArticleInfoReq;
  readonly responseType: typeof pb_svc_manager_manager_pb.GetArticleInfoRes;
};

type ManagerGetArticleList = {
  readonly methodName: string;
  readonly service: typeof Manager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pb_svc_manager_manager_pb.GetArticleListReq;
  readonly responseType: typeof pb_svc_manager_manager_pb.GetArticleListRes;
};

type ManagerGetArticleCountByHour = {
  readonly methodName: string;
  readonly service: typeof Manager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pb_svc_manager_manager_pb.GetArticleCountByHourReq;
  readonly responseType: typeof pb_svc_manager_manager_pb.GetArticleCountByHourRes;
};

type ManagerGetArticleCountByDay = {
  readonly methodName: string;
  readonly service: typeof Manager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pb_svc_manager_manager_pb.GetArticleCountByDayReq;
  readonly responseType: typeof pb_svc_manager_manager_pb.GetArticleCountByDayRes;
};

type ManagerGetVocabList = {
  readonly methodName: string;
  readonly service: typeof Manager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pb_svc_manager_manager_pb.GetVocabListReq;
  readonly responseType: typeof pb_svc_manager_manager_pb.GetVocabListRes;
};

type ManagerGetSimilarity = {
  readonly methodName: string;
  readonly service: typeof Manager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pb_svc_manager_manager_pb.GetSimilarityReq;
  readonly responseType: typeof pb_svc_manager_manager_pb.GetSimilarityRes;
};

type ManagerUpdateWorkerStatus = {
  readonly methodName: string;
  readonly service: typeof Manager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pb_svc_manager_manager_pb.UpdateWorkerStatusReq;
  readonly responseType: typeof pb_svc_manager_manager_pb.UpdateWorkerStatusRes;
};

type ManagerUpdateJobStatus = {
  readonly methodName: string;
  readonly service: typeof Manager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pb_svc_manager_manager_pb.UpdateJobStatusReq;
  readonly responseType: typeof pb_svc_manager_manager_pb.UpdateJobStatusRes;
};

type ManagerWhenStartScraper = {
  readonly methodName: string;
  readonly service: typeof Manager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pb_svc_manager_manager_pb.WhenStartScraperReq;
  readonly responseType: typeof pb_svc_manager_manager_pb.WhenStartScraperRes;
};

type ManagerWhenDoneScraper = {
  readonly methodName: string;
  readonly service: typeof Manager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pb_svc_manager_manager_pb.WhenDoneScraperReq;
  readonly responseType: typeof pb_svc_manager_manager_pb.WhenDoneScraperRes;
};

type ManagerWhenStartAnalyzer = {
  readonly methodName: string;
  readonly service: typeof Manager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pb_svc_manager_manager_pb.WhenStartAnalyzerReq;
  readonly responseType: typeof pb_svc_manager_manager_pb.WhenStartAnalyzerRes;
};

type ManagerWhenDoneAnalyzer = {
  readonly methodName: string;
  readonly service: typeof Manager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pb_svc_manager_manager_pb.WhenDoneAnalyzerReq;
  readonly responseType: typeof pb_svc_manager_manager_pb.WhenDoneAnalyzerRes;
};

type ManagerWhenScraperHavingErr = {
  readonly methodName: string;
  readonly service: typeof Manager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pb_svc_manager_manager_pb.WhenScraperHavingErrReq;
  readonly responseType: typeof pb_svc_manager_manager_pb.WhenScraperHavingErrRes;
};

type ManagerWhenAnalyzerHavingErr = {
  readonly methodName: string;
  readonly service: typeof Manager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pb_svc_manager_manager_pb.WhenAnalyzerHavingErrReq;
  readonly responseType: typeof pb_svc_manager_manager_pb.WhenAnalyzerHavingErrRes;
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
  static readonly ReRunJob: ManagerReRunJob;
  static readonly GetJobStatus: ManagerGetJobStatus;
  static readonly GetJobList: ManagerGetJobList;
  static readonly GetJobIsReRun: ManagerGetJobIsReRun;
  static readonly GetWorkerList: ManagerGetWorkerList;
  static readonly GetArticleInfo: ManagerGetArticleInfo;
  static readonly GetArticleList: ManagerGetArticleList;
  static readonly GetArticleCountByHour: ManagerGetArticleCountByHour;
  static readonly GetArticleCountByDay: ManagerGetArticleCountByDay;
  static readonly GetVocabList: ManagerGetVocabList;
  static readonly GetSimilarity: ManagerGetSimilarity;
  static readonly UpdateWorkerStatus: ManagerUpdateWorkerStatus;
  static readonly UpdateJobStatus: ManagerUpdateJobStatus;
  static readonly WhenStartScraper: ManagerWhenStartScraper;
  static readonly WhenDoneScraper: ManagerWhenDoneScraper;
  static readonly WhenStartAnalyzer: ManagerWhenStartAnalyzer;
  static readonly WhenDoneAnalyzer: ManagerWhenDoneAnalyzer;
  static readonly WhenScraperHavingErr: ManagerWhenScraperHavingErr;
  static readonly WhenAnalyzerHavingErr: ManagerWhenAnalyzerHavingErr;
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
  reRunJob(
    requestMessage: pb_svc_manager_manager_pb.ReRunJobReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pb_svc_manager_manager_pb.ReRunJobRes|null) => void
  ): UnaryResponse;
  reRunJob(
    requestMessage: pb_svc_manager_manager_pb.ReRunJobReq,
    callback: (error: ServiceError|null, responseMessage: pb_svc_manager_manager_pb.ReRunJobRes|null) => void
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
  getJobIsReRun(
    requestMessage: pb_svc_manager_manager_pb.GetJobIsReRunReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pb_svc_manager_manager_pb.GetJobIsReRunRes|null) => void
  ): UnaryResponse;
  getJobIsReRun(
    requestMessage: pb_svc_manager_manager_pb.GetJobIsReRunReq,
    callback: (error: ServiceError|null, responseMessage: pb_svc_manager_manager_pb.GetJobIsReRunRes|null) => void
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
  getArticleInfo(
    requestMessage: pb_svc_manager_manager_pb.GetArticleInfoReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pb_svc_manager_manager_pb.GetArticleInfoRes|null) => void
  ): UnaryResponse;
  getArticleInfo(
    requestMessage: pb_svc_manager_manager_pb.GetArticleInfoReq,
    callback: (error: ServiceError|null, responseMessage: pb_svc_manager_manager_pb.GetArticleInfoRes|null) => void
  ): UnaryResponse;
  getArticleList(
    requestMessage: pb_svc_manager_manager_pb.GetArticleListReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pb_svc_manager_manager_pb.GetArticleListRes|null) => void
  ): UnaryResponse;
  getArticleList(
    requestMessage: pb_svc_manager_manager_pb.GetArticleListReq,
    callback: (error: ServiceError|null, responseMessage: pb_svc_manager_manager_pb.GetArticleListRes|null) => void
  ): UnaryResponse;
  getArticleCountByHour(
    requestMessage: pb_svc_manager_manager_pb.GetArticleCountByHourReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pb_svc_manager_manager_pb.GetArticleCountByHourRes|null) => void
  ): UnaryResponse;
  getArticleCountByHour(
    requestMessage: pb_svc_manager_manager_pb.GetArticleCountByHourReq,
    callback: (error: ServiceError|null, responseMessage: pb_svc_manager_manager_pb.GetArticleCountByHourRes|null) => void
  ): UnaryResponse;
  getArticleCountByDay(
    requestMessage: pb_svc_manager_manager_pb.GetArticleCountByDayReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pb_svc_manager_manager_pb.GetArticleCountByDayRes|null) => void
  ): UnaryResponse;
  getArticleCountByDay(
    requestMessage: pb_svc_manager_manager_pb.GetArticleCountByDayReq,
    callback: (error: ServiceError|null, responseMessage: pb_svc_manager_manager_pb.GetArticleCountByDayRes|null) => void
  ): UnaryResponse;
  getVocabList(
    requestMessage: pb_svc_manager_manager_pb.GetVocabListReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pb_svc_manager_manager_pb.GetVocabListRes|null) => void
  ): UnaryResponse;
  getVocabList(
    requestMessage: pb_svc_manager_manager_pb.GetVocabListReq,
    callback: (error: ServiceError|null, responseMessage: pb_svc_manager_manager_pb.GetVocabListRes|null) => void
  ): UnaryResponse;
  getSimilarity(
    requestMessage: pb_svc_manager_manager_pb.GetSimilarityReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pb_svc_manager_manager_pb.GetSimilarityRes|null) => void
  ): UnaryResponse;
  getSimilarity(
    requestMessage: pb_svc_manager_manager_pb.GetSimilarityReq,
    callback: (error: ServiceError|null, responseMessage: pb_svc_manager_manager_pb.GetSimilarityRes|null) => void
  ): UnaryResponse;
  updateWorkerStatus(
    requestMessage: pb_svc_manager_manager_pb.UpdateWorkerStatusReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pb_svc_manager_manager_pb.UpdateWorkerStatusRes|null) => void
  ): UnaryResponse;
  updateWorkerStatus(
    requestMessage: pb_svc_manager_manager_pb.UpdateWorkerStatusReq,
    callback: (error: ServiceError|null, responseMessage: pb_svc_manager_manager_pb.UpdateWorkerStatusRes|null) => void
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
  whenStartScraper(
    requestMessage: pb_svc_manager_manager_pb.WhenStartScraperReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pb_svc_manager_manager_pb.WhenStartScraperRes|null) => void
  ): UnaryResponse;
  whenStartScraper(
    requestMessage: pb_svc_manager_manager_pb.WhenStartScraperReq,
    callback: (error: ServiceError|null, responseMessage: pb_svc_manager_manager_pb.WhenStartScraperRes|null) => void
  ): UnaryResponse;
  whenDoneScraper(
    requestMessage: pb_svc_manager_manager_pb.WhenDoneScraperReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pb_svc_manager_manager_pb.WhenDoneScraperRes|null) => void
  ): UnaryResponse;
  whenDoneScraper(
    requestMessage: pb_svc_manager_manager_pb.WhenDoneScraperReq,
    callback: (error: ServiceError|null, responseMessage: pb_svc_manager_manager_pb.WhenDoneScraperRes|null) => void
  ): UnaryResponse;
  whenStartAnalyzer(
    requestMessage: pb_svc_manager_manager_pb.WhenStartAnalyzerReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pb_svc_manager_manager_pb.WhenStartAnalyzerRes|null) => void
  ): UnaryResponse;
  whenStartAnalyzer(
    requestMessage: pb_svc_manager_manager_pb.WhenStartAnalyzerReq,
    callback: (error: ServiceError|null, responseMessage: pb_svc_manager_manager_pb.WhenStartAnalyzerRes|null) => void
  ): UnaryResponse;
  whenDoneAnalyzer(
    requestMessage: pb_svc_manager_manager_pb.WhenDoneAnalyzerReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pb_svc_manager_manager_pb.WhenDoneAnalyzerRes|null) => void
  ): UnaryResponse;
  whenDoneAnalyzer(
    requestMessage: pb_svc_manager_manager_pb.WhenDoneAnalyzerReq,
    callback: (error: ServiceError|null, responseMessage: pb_svc_manager_manager_pb.WhenDoneAnalyzerRes|null) => void
  ): UnaryResponse;
  whenScraperHavingErr(
    requestMessage: pb_svc_manager_manager_pb.WhenScraperHavingErrReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pb_svc_manager_manager_pb.WhenScraperHavingErrRes|null) => void
  ): UnaryResponse;
  whenScraperHavingErr(
    requestMessage: pb_svc_manager_manager_pb.WhenScraperHavingErrReq,
    callback: (error: ServiceError|null, responseMessage: pb_svc_manager_manager_pb.WhenScraperHavingErrRes|null) => void
  ): UnaryResponse;
  whenAnalyzerHavingErr(
    requestMessage: pb_svc_manager_manager_pb.WhenAnalyzerHavingErrReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pb_svc_manager_manager_pb.WhenAnalyzerHavingErrRes|null) => void
  ): UnaryResponse;
  whenAnalyzerHavingErr(
    requestMessage: pb_svc_manager_manager_pb.WhenAnalyzerHavingErrReq,
    callback: (error: ServiceError|null, responseMessage: pb_svc_manager_manager_pb.WhenAnalyzerHavingErrRes|null) => void
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

