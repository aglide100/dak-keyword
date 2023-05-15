import * as grpcWeb from 'grpc-web';

import * as pb_svc_manager_worker_pb from '../../../pb/svc/manager/worker_pb';


export class WorkerServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getWorkerList(
    request: pb_svc_manager_worker_pb.GetWorkerListReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: pb_svc_manager_worker_pb.GetWorkerListRes) => void
  ): grpcWeb.ClientReadableStream<pb_svc_manager_worker_pb.GetWorkerListRes>;

  updateWorkerStatus(
    request: pb_svc_manager_worker_pb.UpdateWorkerStatusReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: pb_svc_manager_worker_pb.UpdateWorkerStatusRes) => void
  ): grpcWeb.ClientReadableStream<pb_svc_manager_worker_pb.UpdateWorkerStatusRes>;

}

export class WorkerServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getWorkerList(
    request: pb_svc_manager_worker_pb.GetWorkerListReq,
    metadata?: grpcWeb.Metadata
  ): Promise<pb_svc_manager_worker_pb.GetWorkerListRes>;

  updateWorkerStatus(
    request: pb_svc_manager_worker_pb.UpdateWorkerStatusReq,
    metadata?: grpcWeb.Metadata
  ): Promise<pb_svc_manager_worker_pb.UpdateWorkerStatusRes>;

}

