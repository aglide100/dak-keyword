import * as jspb from 'google-protobuf'



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
  getId(): string;
  setId(value: string): WhenDoneSimilarityReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WhenDoneSimilarityReq.AsObject;
  static toObject(includeInstance: boolean, msg: WhenDoneSimilarityReq): WhenDoneSimilarityReq.AsObject;
  static serializeBinaryToWriter(message: WhenDoneSimilarityReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WhenDoneSimilarityReq;
  static deserializeBinaryFromReader(message: WhenDoneSimilarityReq, reader: jspb.BinaryReader): WhenDoneSimilarityReq;
}

export namespace WhenDoneSimilarityReq {
  export type AsObject = {
    id: string,
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

export class GetSimilarityReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSimilarityReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetSimilarityReq): GetSimilarityReq.AsObject;
  static serializeBinaryToWriter(message: GetSimilarityReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSimilarityReq;
  static deserializeBinaryFromReader(message: GetSimilarityReq, reader: jspb.BinaryReader): GetSimilarityReq;
}

export namespace GetSimilarityReq {
  export type AsObject = {
  }
}

export class GetSimilarityRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSimilarityRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetSimilarityRes): GetSimilarityRes.AsObject;
  static serializeBinaryToWriter(message: GetSimilarityRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSimilarityRes;
  static deserializeBinaryFromReader(message: GetSimilarityRes, reader: jspb.BinaryReader): GetSimilarityRes;
}

export namespace GetSimilarityRes {
  export type AsObject = {
  }
}

export class GetVocabListReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVocabListReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetVocabListReq): GetVocabListReq.AsObject;
  static serializeBinaryToWriter(message: GetVocabListReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVocabListReq;
  static deserializeBinaryFromReader(message: GetVocabListReq, reader: jspb.BinaryReader): GetVocabListReq;
}

export namespace GetVocabListReq {
  export type AsObject = {
  }
}

export class GetVocabListRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVocabListRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetVocabListRes): GetVocabListRes.AsObject;
  static serializeBinaryToWriter(message: GetVocabListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVocabListRes;
  static deserializeBinaryFromReader(message: GetVocabListRes, reader: jspb.BinaryReader): GetVocabListRes;
}

export namespace GetVocabListRes {
  export type AsObject = {
  }
}

