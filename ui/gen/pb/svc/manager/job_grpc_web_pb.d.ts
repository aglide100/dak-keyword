import * as grpcWeb from 'grpc-web';

import * as pb_svc_manager_job_pb from '../../../pb/svc/manager/job_pb';


export class JobServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createNewJob(
    request: pb_svc_manager_job_pb.CreateNewJobReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: pb_svc_manager_job_pb.CreateNewJobRes) => void
  ): grpcWeb.ClientReadableStream<pb_svc_manager_job_pb.CreateNewJobRes>;

  reRunJob(
    request: pb_svc_manager_job_pb.ReRunJobReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: pb_svc_manager_job_pb.ReRunJobRes) => void
  ): grpcWeb.ClientReadableStream<pb_svc_manager_job_pb.ReRunJobRes>;

  getJobStatus(
    request: pb_svc_manager_job_pb.GetJobStatusReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: pb_svc_manager_job_pb.GetJobStatusRes) => void
  ): grpcWeb.ClientReadableStream<pb_svc_manager_job_pb.GetJobStatusRes>;

  getJobList(
    request: pb_svc_manager_job_pb.GetJobListReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: pb_svc_manager_job_pb.GetJobListRes) => void
  ): grpcWeb.ClientReadableStream<pb_svc_manager_job_pb.GetJobListRes>;

  getJobIsReRun(
    request: pb_svc_manager_job_pb.GetJobIsReRunReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: pb_svc_manager_job_pb.GetJobIsReRunRes) => void
  ): grpcWeb.ClientReadableStream<pb_svc_manager_job_pb.GetJobIsReRunRes>;

  stopJob(
    request: pb_svc_manager_job_pb.StopJobReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: pb_svc_manager_job_pb.StopJobRes) => void
  ): grpcWeb.ClientReadableStream<pb_svc_manager_job_pb.StopJobRes>;

  updateJobStatus(
    request: pb_svc_manager_job_pb.UpdateJobStatusReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: pb_svc_manager_job_pb.UpdateJobStatusRes) => void
  ): grpcWeb.ClientReadableStream<pb_svc_manager_job_pb.UpdateJobStatusRes>;

}

export class JobServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createNewJob(
    request: pb_svc_manager_job_pb.CreateNewJobReq,
    metadata?: grpcWeb.Metadata
  ): Promise<pb_svc_manager_job_pb.CreateNewJobRes>;

  reRunJob(
    request: pb_svc_manager_job_pb.ReRunJobReq,
    metadata?: grpcWeb.Metadata
  ): Promise<pb_svc_manager_job_pb.ReRunJobRes>;

  getJobStatus(
    request: pb_svc_manager_job_pb.GetJobStatusReq,
    metadata?: grpcWeb.Metadata
  ): Promise<pb_svc_manager_job_pb.GetJobStatusRes>;

  getJobList(
    request: pb_svc_manager_job_pb.GetJobListReq,
    metadata?: grpcWeb.Metadata
  ): Promise<pb_svc_manager_job_pb.GetJobListRes>;

  getJobIsReRun(
    request: pb_svc_manager_job_pb.GetJobIsReRunReq,
    metadata?: grpcWeb.Metadata
  ): Promise<pb_svc_manager_job_pb.GetJobIsReRunRes>;

  stopJob(
    request: pb_svc_manager_job_pb.StopJobReq,
    metadata?: grpcWeb.Metadata
  ): Promise<pb_svc_manager_job_pb.StopJobRes>;

  updateJobStatus(
    request: pb_svc_manager_job_pb.UpdateJobStatusReq,
    metadata?: grpcWeb.Metadata
  ): Promise<pb_svc_manager_job_pb.UpdateJobStatusRes>;

}

