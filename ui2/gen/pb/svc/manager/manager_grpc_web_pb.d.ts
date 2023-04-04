import * as grpcWeb from 'grpc-web';

import * as pb_svc_manager_manager_pb from '../../../pb/svc/manager/manager_pb';


export class ManagerClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createNewJob(
    request: pb_svc_manager_manager_pb.CreateNewJobReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: pb_svc_manager_manager_pb.CreateNewJobRes) => void
  ): grpcWeb.ClientReadableStream<pb_svc_manager_manager_pb.CreateNewJobRes>;

  reRunJob(
    request: pb_svc_manager_manager_pb.ReRunJobReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: pb_svc_manager_manager_pb.ReRunJobRes) => void
  ): grpcWeb.ClientReadableStream<pb_svc_manager_manager_pb.ReRunJobRes>;

  getJobStatus(
    request: pb_svc_manager_manager_pb.GetJobStatusReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: pb_svc_manager_manager_pb.GetJobStatusRes) => void
  ): grpcWeb.ClientReadableStream<pb_svc_manager_manager_pb.GetJobStatusRes>;

  getJobList(
    request: pb_svc_manager_manager_pb.GetJobListReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: pb_svc_manager_manager_pb.GetJobListRes) => void
  ): grpcWeb.ClientReadableStream<pb_svc_manager_manager_pb.GetJobListRes>;

  getJobIsReRun(
    request: pb_svc_manager_manager_pb.GetJobIsReRunReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: pb_svc_manager_manager_pb.GetJobIsReRunRes) => void
  ): grpcWeb.ClientReadableStream<pb_svc_manager_manager_pb.GetJobIsReRunRes>;

  getWorkerList(
    request: pb_svc_manager_manager_pb.GetWorkerListReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: pb_svc_manager_manager_pb.GetWorkerListRes) => void
  ): grpcWeb.ClientReadableStream<pb_svc_manager_manager_pb.GetWorkerListRes>;

  getArticleInfo(
    request: pb_svc_manager_manager_pb.GetArticleInfoReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: pb_svc_manager_manager_pb.GetArticleInfoRes) => void
  ): grpcWeb.ClientReadableStream<pb_svc_manager_manager_pb.GetArticleInfoRes>;

  getArticleList(
    request: pb_svc_manager_manager_pb.GetArticleListReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: pb_svc_manager_manager_pb.GetArticleListRes) => void
  ): grpcWeb.ClientReadableStream<pb_svc_manager_manager_pb.GetArticleListRes>;

  getArticleCountByHour(
    request: pb_svc_manager_manager_pb.GetArticleCountByHourReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: pb_svc_manager_manager_pb.GetArticleCountByHourRes) => void
  ): grpcWeb.ClientReadableStream<pb_svc_manager_manager_pb.GetArticleCountByHourRes>;

  getArticleCountByDay(
    request: pb_svc_manager_manager_pb.GetArticleCountByDayReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: pb_svc_manager_manager_pb.GetArticleCountByDayRes) => void
  ): grpcWeb.ClientReadableStream<pb_svc_manager_manager_pb.GetArticleCountByDayRes>;

  updateWorkerStatus(
    request: pb_svc_manager_manager_pb.UpdateWorkerStatusReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: pb_svc_manager_manager_pb.UpdateWorkerStatusRes) => void
  ): grpcWeb.ClientReadableStream<pb_svc_manager_manager_pb.UpdateWorkerStatusRes>;

  updateJobStatus(
    request: pb_svc_manager_manager_pb.UpdateJobStatusReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: pb_svc_manager_manager_pb.UpdateJobStatusRes) => void
  ): grpcWeb.ClientReadableStream<pb_svc_manager_manager_pb.UpdateJobStatusRes>;

  whenStartScraper(
    request: pb_svc_manager_manager_pb.WhenStartScraperReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: pb_svc_manager_manager_pb.WhenStartScraperRes) => void
  ): grpcWeb.ClientReadableStream<pb_svc_manager_manager_pb.WhenStartScraperRes>;

  whenDoneScraper(
    request: pb_svc_manager_manager_pb.WhenDoneScraperReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: pb_svc_manager_manager_pb.WhenDoneScraperRes) => void
  ): grpcWeb.ClientReadableStream<pb_svc_manager_manager_pb.WhenDoneScraperRes>;

  whenStartAnalyzer(
    request: pb_svc_manager_manager_pb.WhenStartAnalyzerReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: pb_svc_manager_manager_pb.WhenStartAnalyzerRes) => void
  ): grpcWeb.ClientReadableStream<pb_svc_manager_manager_pb.WhenStartAnalyzerRes>;

  whenDoneAnalyzer(
    request: pb_svc_manager_manager_pb.WhenDoneAnalyzerReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: pb_svc_manager_manager_pb.WhenDoneAnalyzerRes) => void
  ): grpcWeb.ClientReadableStream<pb_svc_manager_manager_pb.WhenDoneAnalyzerRes>;

  whenScraperHavingErr(
    request: pb_svc_manager_manager_pb.WhenScraperHavingErrReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: pb_svc_manager_manager_pb.WhenScraperHavingErrRes) => void
  ): grpcWeb.ClientReadableStream<pb_svc_manager_manager_pb.WhenScraperHavingErrRes>;

  whenAnalyzerHavingErr(
    request: pb_svc_manager_manager_pb.WhenAnalyzerHavingErrReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: pb_svc_manager_manager_pb.WhenAnalyzerHavingErrRes) => void
  ): grpcWeb.ClientReadableStream<pb_svc_manager_manager_pb.WhenAnalyzerHavingErrRes>;

  stopJob(
    request: pb_svc_manager_manager_pb.StopJobReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: pb_svc_manager_manager_pb.StopJobRes) => void
  ): grpcWeb.ClientReadableStream<pb_svc_manager_manager_pb.StopJobRes>;

}

export class ManagerPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createNewJob(
    request: pb_svc_manager_manager_pb.CreateNewJobReq,
    metadata?: grpcWeb.Metadata
  ): Promise<pb_svc_manager_manager_pb.CreateNewJobRes>;

  reRunJob(
    request: pb_svc_manager_manager_pb.ReRunJobReq,
    metadata?: grpcWeb.Metadata
  ): Promise<pb_svc_manager_manager_pb.ReRunJobRes>;

  getJobStatus(
    request: pb_svc_manager_manager_pb.GetJobStatusReq,
    metadata?: grpcWeb.Metadata
  ): Promise<pb_svc_manager_manager_pb.GetJobStatusRes>;

  getJobList(
    request: pb_svc_manager_manager_pb.GetJobListReq,
    metadata?: grpcWeb.Metadata
  ): Promise<pb_svc_manager_manager_pb.GetJobListRes>;

  getJobIsReRun(
    request: pb_svc_manager_manager_pb.GetJobIsReRunReq,
    metadata?: grpcWeb.Metadata
  ): Promise<pb_svc_manager_manager_pb.GetJobIsReRunRes>;

  getWorkerList(
    request: pb_svc_manager_manager_pb.GetWorkerListReq,
    metadata?: grpcWeb.Metadata
  ): Promise<pb_svc_manager_manager_pb.GetWorkerListRes>;

  getArticleInfo(
    request: pb_svc_manager_manager_pb.GetArticleInfoReq,
    metadata?: grpcWeb.Metadata
  ): Promise<pb_svc_manager_manager_pb.GetArticleInfoRes>;

  getArticleList(
    request: pb_svc_manager_manager_pb.GetArticleListReq,
    metadata?: grpcWeb.Metadata
  ): Promise<pb_svc_manager_manager_pb.GetArticleListRes>;

  getArticleCountByHour(
    request: pb_svc_manager_manager_pb.GetArticleCountByHourReq,
    metadata?: grpcWeb.Metadata
  ): Promise<pb_svc_manager_manager_pb.GetArticleCountByHourRes>;

  getArticleCountByDay(
    request: pb_svc_manager_manager_pb.GetArticleCountByDayReq,
    metadata?: grpcWeb.Metadata
  ): Promise<pb_svc_manager_manager_pb.GetArticleCountByDayRes>;

  updateWorkerStatus(
    request: pb_svc_manager_manager_pb.UpdateWorkerStatusReq,
    metadata?: grpcWeb.Metadata
  ): Promise<pb_svc_manager_manager_pb.UpdateWorkerStatusRes>;

  updateJobStatus(
    request: pb_svc_manager_manager_pb.UpdateJobStatusReq,
    metadata?: grpcWeb.Metadata
  ): Promise<pb_svc_manager_manager_pb.UpdateJobStatusRes>;

  whenStartScraper(
    request: pb_svc_manager_manager_pb.WhenStartScraperReq,
    metadata?: grpcWeb.Metadata
  ): Promise<pb_svc_manager_manager_pb.WhenStartScraperRes>;

  whenDoneScraper(
    request: pb_svc_manager_manager_pb.WhenDoneScraperReq,
    metadata?: grpcWeb.Metadata
  ): Promise<pb_svc_manager_manager_pb.WhenDoneScraperRes>;

  whenStartAnalyzer(
    request: pb_svc_manager_manager_pb.WhenStartAnalyzerReq,
    metadata?: grpcWeb.Metadata
  ): Promise<pb_svc_manager_manager_pb.WhenStartAnalyzerRes>;

  whenDoneAnalyzer(
    request: pb_svc_manager_manager_pb.WhenDoneAnalyzerReq,
    metadata?: grpcWeb.Metadata
  ): Promise<pb_svc_manager_manager_pb.WhenDoneAnalyzerRes>;

  whenScraperHavingErr(
    request: pb_svc_manager_manager_pb.WhenScraperHavingErrReq,
    metadata?: grpcWeb.Metadata
  ): Promise<pb_svc_manager_manager_pb.WhenScraperHavingErrRes>;

  whenAnalyzerHavingErr(
    request: pb_svc_manager_manager_pb.WhenAnalyzerHavingErrReq,
    metadata?: grpcWeb.Metadata
  ): Promise<pb_svc_manager_manager_pb.WhenAnalyzerHavingErrRes>;

  stopJob(
    request: pb_svc_manager_manager_pb.StopJobReq,
    metadata?: grpcWeb.Metadata
  ): Promise<pb_svc_manager_manager_pb.StopJobRes>;

}

