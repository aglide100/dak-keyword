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

  getCosineSimilarity(
    request: pb_svc_manager_similarity_pb.GetCosineSimilarityReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: pb_svc_manager_similarity_pb.GetCosineSimilarityRes) => void
  ): grpcWeb.ClientReadableStream<pb_svc_manager_similarity_pb.GetCosineSimilarityRes>;

  getTfidfScore(
    request: pb_svc_manager_similarity_pb.GetTfidfScoreReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: pb_svc_manager_similarity_pb.GetTfidfScoreRes) => void
  ): grpcWeb.ClientReadableStream<pb_svc_manager_similarity_pb.GetTfidfScoreRes>;

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

  whenSimilarityHavingErr(
    request: pb_svc_manager_similarity_pb.WhenSimilarityHavingErrReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: pb_svc_manager_similarity_pb.WhenSimilarityHavingErrRes) => void
  ): grpcWeb.ClientReadableStream<pb_svc_manager_similarity_pb.WhenSimilarityHavingErrRes>;

  whenSimilarityHavingMsg(
    request: pb_svc_manager_similarity_pb.WhenSimilarityHavingMsgReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: pb_svc_manager_similarity_pb.WhenSimilarityHavingMsgRes) => void
  ): grpcWeb.ClientReadableStream<pb_svc_manager_similarity_pb.WhenSimilarityHavingMsgRes>;

}

export class SimilarityServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getVocabList(
    request: pb_svc_manager_similarity_pb.GetVocabListReq,
    metadata?: grpcWeb.Metadata
  ): Promise<pb_svc_manager_similarity_pb.GetVocabListRes>;

  getCosineSimilarity(
    request: pb_svc_manager_similarity_pb.GetCosineSimilarityReq,
    metadata?: grpcWeb.Metadata
  ): Promise<pb_svc_manager_similarity_pb.GetCosineSimilarityRes>;

  getTfidfScore(
    request: pb_svc_manager_similarity_pb.GetTfidfScoreReq,
    metadata?: grpcWeb.Metadata
  ): Promise<pb_svc_manager_similarity_pb.GetTfidfScoreRes>;

  whenStartSimilarity(
    request: pb_svc_manager_similarity_pb.WhenStartSimilarityReq,
    metadata?: grpcWeb.Metadata
  ): Promise<pb_svc_manager_similarity_pb.WhenStartSimilarityRes>;

  whenDoneSimilarity(
    request: pb_svc_manager_similarity_pb.WhenDoneSimilarityReq,
    metadata?: grpcWeb.Metadata
  ): Promise<pb_svc_manager_similarity_pb.WhenDoneSimilarityRes>;

  whenSimilarityHavingErr(
    request: pb_svc_manager_similarity_pb.WhenSimilarityHavingErrReq,
    metadata?: grpcWeb.Metadata
  ): Promise<pb_svc_manager_similarity_pb.WhenSimilarityHavingErrRes>;

  whenSimilarityHavingMsg(
    request: pb_svc_manager_similarity_pb.WhenSimilarityHavingMsgReq,
    metadata?: grpcWeb.Metadata
  ): Promise<pb_svc_manager_similarity_pb.WhenSimilarityHavingMsgRes>;

}

