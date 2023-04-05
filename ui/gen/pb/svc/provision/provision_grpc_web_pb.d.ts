import * as grpcWeb from 'grpc-web';

import * as pb_svc_provision_provision_pb from '../../../pb/svc/provision/provision_pb';


export class ProvisionClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createScraper(
    request: pb_svc_provision_provision_pb.CreateScraperReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: pb_svc_provision_provision_pb.CreateScraperRes) => void
  ): grpcWeb.ClientReadableStream<pb_svc_provision_provision_pb.CreateScraperRes>;

  createAnalyzer(
    request: pb_svc_provision_provision_pb.CreateAnalyzerReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: pb_svc_provision_provision_pb.CreateAnalyzerRes) => void
  ): grpcWeb.ClientReadableStream<pb_svc_provision_provision_pb.CreateAnalyzerRes>;

  getScraperStatus(
    request: pb_svc_provision_provision_pb.GetScraperStatusReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: pb_svc_provision_provision_pb.GetScraperStatusRes) => void
  ): grpcWeb.ClientReadableStream<pb_svc_provision_provision_pb.GetScraperStatusRes>;

  getAnalyzerStatus(
    request: pb_svc_provision_provision_pb.GetAnalyzerStatusReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: pb_svc_provision_provision_pb.GetAnalyzerStatusRes) => void
  ): grpcWeb.ClientReadableStream<pb_svc_provision_provision_pb.GetAnalyzerStatusRes>;

  removeScraper(
    request: pb_svc_provision_provision_pb.RemoveScraperReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: pb_svc_provision_provision_pb.RemoveScraperRes) => void
  ): grpcWeb.ClientReadableStream<pb_svc_provision_provision_pb.RemoveScraperRes>;

  removeAnalyzer(
    request: pb_svc_provision_provision_pb.RemoveAnalyzerReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: pb_svc_provision_provision_pb.RemoveAnalyzerRes) => void
  ): grpcWeb.ClientReadableStream<pb_svc_provision_provision_pb.RemoveAnalyzerRes>;

}

export class ProvisionPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createScraper(
    request: pb_svc_provision_provision_pb.CreateScraperReq,
    metadata?: grpcWeb.Metadata
  ): Promise<pb_svc_provision_provision_pb.CreateScraperRes>;

  createAnalyzer(
    request: pb_svc_provision_provision_pb.CreateAnalyzerReq,
    metadata?: grpcWeb.Metadata
  ): Promise<pb_svc_provision_provision_pb.CreateAnalyzerRes>;

  getScraperStatus(
    request: pb_svc_provision_provision_pb.GetScraperStatusReq,
    metadata?: grpcWeb.Metadata
  ): Promise<pb_svc_provision_provision_pb.GetScraperStatusRes>;

  getAnalyzerStatus(
    request: pb_svc_provision_provision_pb.GetAnalyzerStatusReq,
    metadata?: grpcWeb.Metadata
  ): Promise<pb_svc_provision_provision_pb.GetAnalyzerStatusRes>;

  removeScraper(
    request: pb_svc_provision_provision_pb.RemoveScraperReq,
    metadata?: grpcWeb.Metadata
  ): Promise<pb_svc_provision_provision_pb.RemoveScraperRes>;

  removeAnalyzer(
    request: pb_svc_provision_provision_pb.RemoveAnalyzerReq,
    metadata?: grpcWeb.Metadata
  ): Promise<pb_svc_provision_provision_pb.RemoveAnalyzerRes>;

}

