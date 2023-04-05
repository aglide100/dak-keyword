import * as grpcWeb from 'grpc-web';

import * as pb_svc_analyzer_analyzer_pb from '../../../pb/svc/analyzer/analyzer_pb';


export class AnalyzerClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  startAnalyzer(
    request: pb_svc_analyzer_analyzer_pb.StartAnalyzerReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: pb_svc_analyzer_analyzer_pb.StartAnalyzerRes) => void
  ): grpcWeb.ClientReadableStream<pb_svc_analyzer_analyzer_pb.StartAnalyzerRes>;

  getStatus(
    request: pb_svc_analyzer_analyzer_pb.GetStatusReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: pb_svc_analyzer_analyzer_pb.GetStatusRes) => void
  ): grpcWeb.ClientReadableStream<pb_svc_analyzer_analyzer_pb.GetStatusRes>;

}

export class AnalyzerPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  startAnalyzer(
    request: pb_svc_analyzer_analyzer_pb.StartAnalyzerReq,
    metadata?: grpcWeb.Metadata
  ): Promise<pb_svc_analyzer_analyzer_pb.StartAnalyzerRes>;

  getStatus(
    request: pb_svc_analyzer_analyzer_pb.GetStatusReq,
    metadata?: grpcWeb.Metadata
  ): Promise<pb_svc_analyzer_analyzer_pb.GetStatusRes>;

}

