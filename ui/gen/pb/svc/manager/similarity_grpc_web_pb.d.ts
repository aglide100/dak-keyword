import * as grpcWeb from 'grpc-web';

import * as pb_svc_manager_similarity_pb from '../../../pb/svc/manager/similarity_pb';


export class SimilarityServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getVocabList(
    request: pb_svc_manager_similarity_pb.GetVocabListReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: pb_svc_manager_similarity_pb.GetVocabListRes) => void
  ): grpcWeb.ClientReadableStream<pb_svc_manager_similarity_pb.GetVocabListRes>;

  getSimilarity(
    request: pb_svc_manager_similarity_pb.GetSimilarityReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: pb_svc_manager_similarity_pb.GetSimilarityRes) => void
  ): grpcWeb.ClientReadableStream<pb_svc_manager_similarity_pb.GetSimilarityRes>;

  whenStartSimilarity(
    request: pb_svc_manager_similarity_pb.WhenStartSimilarityReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: pb_svc_manager_similarity_pb.WhenStartSimilarityRes) => void
  ): grpcWeb.ClientReadableStream<pb_svc_manager_similarity_pb.WhenStartSimilarityRes>;

  whenDoneSimilarity(
    request: pb_svc_manager_similarity_pb.WhenDoneSimilarityReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: pb_svc_manager_similarity_pb.WhenDoneSimilarityRes) => void
  ): grpcWeb.ClientReadableStream<pb_svc_manager_similarity_pb.WhenDoneSimilarityRes>;

  whenHavingErrSimilarity(
    request: pb_svc_manager_similarity_pb.WhenHavingErrSimilarityReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: pb_svc_manager_similarity_pb.WhenHavingErrSimilarityRes) => void
  ): grpcWeb.ClientReadableStream<pb_svc_manager_similarity_pb.WhenHavingErrSimilarityRes>;

}

export class SimilarityServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getVocabList(
    request: pb_svc_manager_similarity_pb.GetVocabListReq,
    metadata?: grpcWeb.Metadata
  ): Promise<pb_svc_manager_similarity_pb.GetVocabListRes>;

  getSimilarity(
    request: pb_svc_manager_similarity_pb.GetSimilarityReq,
    metadata?: grpcWeb.Metadata
  ): Promise<pb_svc_manager_similarity_pb.GetSimilarityRes>;

  whenStartSimilarity(
    request: pb_svc_manager_similarity_pb.WhenStartSimilarityReq,
    metadata?: grpcWeb.Metadata
  ): Promise<pb_svc_manager_similarity_pb.WhenStartSimilarityRes>;

  whenDoneSimilarity(
    request: pb_svc_manager_similarity_pb.WhenDoneSimilarityReq,
    metadata?: grpcWeb.Metadata
  ): Promise<pb_svc_manager_similarity_pb.WhenDoneSimilarityRes>;

  whenHavingErrSimilarity(
    request: pb_svc_manager_similarity_pb.WhenHavingErrSimilarityReq,
    metadata?: grpcWeb.Metadata
  ): Promise<pb_svc_manager_similarity_pb.WhenHavingErrSimilarityRes>;

}

