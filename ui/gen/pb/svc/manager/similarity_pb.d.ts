import * as jspb from 'google-protobuf'

import * as pb_unit_cosine_similarity_cosine_similarity_pb from '../../../pb/unit/cosine_similarity/cosine_similarity_pb';
import * as pb_unit_tfidf_tfidf_pb from '../../../pb/unit/tfidf/tfidf_pb';
import * as pb_unit_vocab_vocab_pb from '../../../pb/unit/vocab/vocab_pb';


export class WhenSimilarityHavingMsgReq extends jspb.Message {
  getId(): string;
  setId(value: string): WhenSimilarityHavingMsgReq;

  getMsg(): string;
  setMsg(value: string): WhenSimilarityHavingMsgReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WhenSimilarityHavingMsgReq.AsObject;
  static toObject(includeInstance: boolean, msg: WhenSimilarityHavingMsgReq): WhenSimilarityHavingMsgReq.AsObject;
  static serializeBinaryToWriter(message: WhenSimilarityHavingMsgReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WhenSimilarityHavingMsgReq;
  static deserializeBinaryFromReader(message: WhenSimilarityHavingMsgReq, reader: jspb.BinaryReader): WhenSimilarityHavingMsgReq;
}

export namespace WhenSimilarityHavingMsgReq {
  export type AsObject = {
    id: string,
    msg: string,
  }
}

export class WhenSimilarityHavingMsgRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WhenSimilarityHavingMsgRes.AsObject;
  static toObject(includeInstance: boolean, msg: WhenSimilarityHavingMsgRes): WhenSimilarityHavingMsgRes.AsObject;
  static serializeBinaryToWriter(message: WhenSimilarityHavingMsgRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WhenSimilarityHavingMsgRes;
  static deserializeBinaryFromReader(message: WhenSimilarityHavingMsgRes, reader: jspb.BinaryReader): WhenSimilarityHavingMsgRes;
}

export namespace WhenSimilarityHavingMsgRes {
  export type AsObject = {
  }
}

export class WhenSimilarityHavingErrReq extends jspb.Message {
  getId(): string;
  setId(value: string): WhenSimilarityHavingErrReq;

  getMsg(): string;
  setMsg(value: string): WhenSimilarityHavingErrReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WhenSimilarityHavingErrReq.AsObject;
  static toObject(includeInstance: boolean, msg: WhenSimilarityHavingErrReq): WhenSimilarityHavingErrReq.AsObject;
  static serializeBinaryToWriter(message: WhenSimilarityHavingErrReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WhenSimilarityHavingErrReq;
  static deserializeBinaryFromReader(message: WhenSimilarityHavingErrReq, reader: jspb.BinaryReader): WhenSimilarityHavingErrReq;
}

export namespace WhenSimilarityHavingErrReq {
  export type AsObject = {
    id: string,
    msg: string,
  }
}

export class WhenSimilarityHavingErrRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WhenSimilarityHavingErrRes.AsObject;
  static toObject(includeInstance: boolean, msg: WhenSimilarityHavingErrRes): WhenSimilarityHavingErrRes.AsObject;
  static serializeBinaryToWriter(message: WhenSimilarityHavingErrRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WhenSimilarityHavingErrRes;
  static deserializeBinaryFromReader(message: WhenSimilarityHavingErrRes, reader: jspb.BinaryReader): WhenSimilarityHavingErrRes;
}

export namespace WhenSimilarityHavingErrRes {
  export type AsObject = {
  }
}

export class WhenDoneSimilarityReq extends jspb.Message {
  getWorkerid(): string;
  setWorkerid(value: string): WhenDoneSimilarityReq;

  getJobid(): string;
  setJobid(value: string): WhenDoneSimilarityReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WhenDoneSimilarityReq.AsObject;
  static toObject(includeInstance: boolean, msg: WhenDoneSimilarityReq): WhenDoneSimilarityReq.AsObject;
  static serializeBinaryToWriter(message: WhenDoneSimilarityReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WhenDoneSimilarityReq;
  static deserializeBinaryFromReader(message: WhenDoneSimilarityReq, reader: jspb.BinaryReader): WhenDoneSimilarityReq;
}

export namespace WhenDoneSimilarityReq {
  export type AsObject = {
    workerid: string,
    jobid: string,
  }
}

export class WhenDoneSimilarityRes extends jspb.Message {
  getResult(): string;
  setResult(value: string): WhenDoneSimilarityRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WhenDoneSimilarityRes.AsObject;
  static toObject(includeInstance: boolean, msg: WhenDoneSimilarityRes): WhenDoneSimilarityRes.AsObject;
  static serializeBinaryToWriter(message: WhenDoneSimilarityRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WhenDoneSimilarityRes;
  static deserializeBinaryFromReader(message: WhenDoneSimilarityRes, reader: jspb.BinaryReader): WhenDoneSimilarityRes;
}

export namespace WhenDoneSimilarityRes {
  export type AsObject = {
    result: string,
  }
}

export class WhenStartSimilarityReq extends jspb.Message {
  getId(): string;
  setId(value: string): WhenStartSimilarityReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WhenStartSimilarityReq.AsObject;
  static toObject(includeInstance: boolean, msg: WhenStartSimilarityReq): WhenStartSimilarityReq.AsObject;
  static serializeBinaryToWriter(message: WhenStartSimilarityReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WhenStartSimilarityReq;
  static deserializeBinaryFromReader(message: WhenStartSimilarityReq, reader: jspb.BinaryReader): WhenStartSimilarityReq;
}

export namespace WhenStartSimilarityReq {
  export type AsObject = {
    id: string,
  }
}

export class WhenStartSimilarityRes extends jspb.Message {
  getResult(): string;
  setResult(value: string): WhenStartSimilarityRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WhenStartSimilarityRes.AsObject;
  static toObject(includeInstance: boolean, msg: WhenStartSimilarityRes): WhenStartSimilarityRes.AsObject;
  static serializeBinaryToWriter(message: WhenStartSimilarityRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WhenStartSimilarityRes;
  static deserializeBinaryFromReader(message: WhenStartSimilarityRes, reader: jspb.BinaryReader): WhenStartSimilarityRes;
}

export namespace WhenStartSimilarityRes {
  export type AsObject = {
    result: string,
  }
}

export class GetCosineSimilarityReq extends jspb.Message {
  getArticleId(): string;
  setArticleId(value: string): GetCosineSimilarityReq;

  getWorkerId(): string;
  setWorkerId(value: string): GetCosineSimilarityReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCosineSimilarityReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetCosineSimilarityReq): GetCosineSimilarityReq.AsObject;
  static serializeBinaryToWriter(message: GetCosineSimilarityReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCosineSimilarityReq;
  static deserializeBinaryFromReader(message: GetCosineSimilarityReq, reader: jspb.BinaryReader): GetCosineSimilarityReq;
}

export namespace GetCosineSimilarityReq {
  export type AsObject = {
    articleId: string,
    workerId: string,
  }
}

export class GetCosineSimilarityRes extends jspb.Message {
  getCosinesimilarity(): pb_unit_cosine_similarity_cosine_similarity_pb.CosineSimilarity | undefined;
  setCosinesimilarity(value?: pb_unit_cosine_similarity_cosine_similarity_pb.CosineSimilarity): GetCosineSimilarityRes;
  hasCosinesimilarity(): boolean;
  clearCosinesimilarity(): GetCosineSimilarityRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCosineSimilarityRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetCosineSimilarityRes): GetCosineSimilarityRes.AsObject;
  static serializeBinaryToWriter(message: GetCosineSimilarityRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCosineSimilarityRes;
  static deserializeBinaryFromReader(message: GetCosineSimilarityRes, reader: jspb.BinaryReader): GetCosineSimilarityRes;
}

export namespace GetCosineSimilarityRes {
  export type AsObject = {
    cosinesimilarity?: pb_unit_cosine_similarity_cosine_similarity_pb.CosineSimilarity.AsObject,
  }
}

export class GetTfidfScoreReq extends jspb.Message {
  getWorkerId(): string;
  setWorkerId(value: string): GetTfidfScoreReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTfidfScoreReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetTfidfScoreReq): GetTfidfScoreReq.AsObject;
  static serializeBinaryToWriter(message: GetTfidfScoreReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTfidfScoreReq;
  static deserializeBinaryFromReader(message: GetTfidfScoreReq, reader: jspb.BinaryReader): GetTfidfScoreReq;
}

export namespace GetTfidfScoreReq {
  export type AsObject = {
    workerId: string,
  }
}

export class GetTfidfScoreRes extends jspb.Message {
  getTfidfList(): Array<pb_unit_tfidf_tfidf_pb.Tfidf>;
  setTfidfList(value: Array<pb_unit_tfidf_tfidf_pb.Tfidf>): GetTfidfScoreRes;
  clearTfidfList(): GetTfidfScoreRes;
  addTfidf(value?: pb_unit_tfidf_tfidf_pb.Tfidf, index?: number): pb_unit_tfidf_tfidf_pb.Tfidf;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTfidfScoreRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetTfidfScoreRes): GetTfidfScoreRes.AsObject;
  static serializeBinaryToWriter(message: GetTfidfScoreRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTfidfScoreRes;
  static deserializeBinaryFromReader(message: GetTfidfScoreRes, reader: jspb.BinaryReader): GetTfidfScoreRes;
}

export namespace GetTfidfScoreRes {
  export type AsObject = {
    tfidfList: Array<pb_unit_tfidf_tfidf_pb.Tfidf.AsObject>,
  }
}

export class GetVocabListReq extends jspb.Message {
  getWorkerId(): string;
  setWorkerId(value: string): GetVocabListReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVocabListReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetVocabListReq): GetVocabListReq.AsObject;
  static serializeBinaryToWriter(message: GetVocabListReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVocabListReq;
  static deserializeBinaryFromReader(message: GetVocabListReq, reader: jspb.BinaryReader): GetVocabListReq;
}

export namespace GetVocabListReq {
  export type AsObject = {
    workerId: string,
  }
}

export class GetVocabListRes extends jspb.Message {
  getVocab(): pb_unit_vocab_vocab_pb.Vocab | undefined;
  setVocab(value?: pb_unit_vocab_vocab_pb.Vocab): GetVocabListRes;
  hasVocab(): boolean;
  clearVocab(): GetVocabListRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVocabListRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetVocabListRes): GetVocabListRes.AsObject;
  static serializeBinaryToWriter(message: GetVocabListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVocabListRes;
  static deserializeBinaryFromReader(message: GetVocabListRes, reader: jspb.BinaryReader): GetVocabListRes;
}

export namespace GetVocabListRes {
  export type AsObject = {
    vocab?: pb_unit_vocab_vocab_pb.Vocab.AsObject,
  }
}

