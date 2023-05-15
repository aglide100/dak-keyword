import * as grpcWeb from 'grpc-web';

import * as pb_svc_manager_article_pb from '../../../pb/svc/manager/article_pb';


export class ArticleServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getArticleInfo(
    request: pb_svc_manager_article_pb.GetArticleInfoReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: pb_svc_manager_article_pb.GetArticleInfoRes) => void
  ): grpcWeb.ClientReadableStream<pb_svc_manager_article_pb.GetArticleInfoRes>;

  getArticleList(
    request: pb_svc_manager_article_pb.GetArticleListReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: pb_svc_manager_article_pb.GetArticleListRes) => void
  ): grpcWeb.ClientReadableStream<pb_svc_manager_article_pb.GetArticleListRes>;

  getArticleCountByHour(
    request: pb_svc_manager_article_pb.GetArticleCountByHourReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: pb_svc_manager_article_pb.GetArticleCountByHourRes) => void
  ): grpcWeb.ClientReadableStream<pb_svc_manager_article_pb.GetArticleCountByHourRes>;

  getArticleCountByDay(
    request: pb_svc_manager_article_pb.GetArticleCountByDayReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: pb_svc_manager_article_pb.GetArticleCountByDayRes) => void
  ): grpcWeb.ClientReadableStream<pb_svc_manager_article_pb.GetArticleCountByDayRes>;

}

export class ArticleServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getArticleInfo(
    request: pb_svc_manager_article_pb.GetArticleInfoReq,
    metadata?: grpcWeb.Metadata
  ): Promise<pb_svc_manager_article_pb.GetArticleInfoRes>;

  getArticleList(
    request: pb_svc_manager_article_pb.GetArticleListReq,
    metadata?: grpcWeb.Metadata
  ): Promise<pb_svc_manager_article_pb.GetArticleListRes>;

  getArticleCountByHour(
    request: pb_svc_manager_article_pb.GetArticleCountByHourReq,
    metadata?: grpcWeb.Metadata
  ): Promise<pb_svc_manager_article_pb.GetArticleCountByHourRes>;

  getArticleCountByDay(
    request: pb_svc_manager_article_pb.GetArticleCountByDayReq,
    metadata?: grpcWeb.Metadata
  ): Promise<pb_svc_manager_article_pb.GetArticleCountByDayRes>;

}

