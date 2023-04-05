import * as jspb from 'google-protobuf'



export class CreateScraperReq extends jspb.Message {
  getKeyword(): string;
  setKeyword(value: string): CreateScraperReq;

  getWorkerId(): string;
  setWorkerId(value: string): CreateScraperReq;

  getJobId(): string;
  setJobId(value: string): CreateScraperReq;

  getToken(): string;
  setToken(value: string): CreateScraperReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateScraperReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateScraperReq): CreateScraperReq.AsObject;
  static serializeBinaryToWriter(message: CreateScraperReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateScraperReq;
  static deserializeBinaryFromReader(message: CreateScraperReq, reader: jspb.BinaryReader): CreateScraperReq;
}

export namespace CreateScraperReq {
  export type AsObject = {
    keyword: string,
    workerId: string,
    jobId: string,
    token: string,
  }
}

export class CreateScraperRes extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): CreateScraperRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateScraperRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateScraperRes): CreateScraperRes.AsObject;
  static serializeBinaryToWriter(message: CreateScraperRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateScraperRes;
  static deserializeBinaryFromReader(message: CreateScraperRes, reader: jspb.BinaryReader): CreateScraperRes;
}

export namespace CreateScraperRes {
  export type AsObject = {
    status: string,
  }
}

export class CreateAnalyzerReq extends jspb.Message {
  getScraperid(): string;
  setScraperid(value: string): CreateAnalyzerReq;

  getKeyword(): string;
  setKeyword(value: string): CreateAnalyzerReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAnalyzerReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAnalyzerReq): CreateAnalyzerReq.AsObject;
  static serializeBinaryToWriter(message: CreateAnalyzerReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAnalyzerReq;
  static deserializeBinaryFromReader(message: CreateAnalyzerReq, reader: jspb.BinaryReader): CreateAnalyzerReq;
}

export namespace CreateAnalyzerReq {
  export type AsObject = {
    scraperid: string,
    keyword: string,
  }
}

export class CreateAnalyzerRes extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): CreateAnalyzerRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAnalyzerRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAnalyzerRes): CreateAnalyzerRes.AsObject;
  static serializeBinaryToWriter(message: CreateAnalyzerRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAnalyzerRes;
  static deserializeBinaryFromReader(message: CreateAnalyzerRes, reader: jspb.BinaryReader): CreateAnalyzerRes;
}

export namespace CreateAnalyzerRes {
  export type AsObject = {
    status: string,
  }
}

export class GetScraperStatusReq extends jspb.Message {
  getId(): string;
  setId(value: string): GetScraperStatusReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetScraperStatusReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetScraperStatusReq): GetScraperStatusReq.AsObject;
  static serializeBinaryToWriter(message: GetScraperStatusReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetScraperStatusReq;
  static deserializeBinaryFromReader(message: GetScraperStatusReq, reader: jspb.BinaryReader): GetScraperStatusReq;
}

export namespace GetScraperStatusReq {
  export type AsObject = {
    id: string,
  }
}

export class GetScraperStatusRes extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): GetScraperStatusRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetScraperStatusRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetScraperStatusRes): GetScraperStatusRes.AsObject;
  static serializeBinaryToWriter(message: GetScraperStatusRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetScraperStatusRes;
  static deserializeBinaryFromReader(message: GetScraperStatusRes, reader: jspb.BinaryReader): GetScraperStatusRes;
}

export namespace GetScraperStatusRes {
  export type AsObject = {
    status: string,
  }
}

export class GetAnalyzerStatusReq extends jspb.Message {
  getId(): string;
  setId(value: string): GetAnalyzerStatusReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAnalyzerStatusReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetAnalyzerStatusReq): GetAnalyzerStatusReq.AsObject;
  static serializeBinaryToWriter(message: GetAnalyzerStatusReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAnalyzerStatusReq;
  static deserializeBinaryFromReader(message: GetAnalyzerStatusReq, reader: jspb.BinaryReader): GetAnalyzerStatusReq;
}

export namespace GetAnalyzerStatusReq {
  export type AsObject = {
    id: string,
  }
}

export class GetAnalyzerStatusRes extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): GetAnalyzerStatusRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAnalyzerStatusRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetAnalyzerStatusRes): GetAnalyzerStatusRes.AsObject;
  static serializeBinaryToWriter(message: GetAnalyzerStatusRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAnalyzerStatusRes;
  static deserializeBinaryFromReader(message: GetAnalyzerStatusRes, reader: jspb.BinaryReader): GetAnalyzerStatusRes;
}

export namespace GetAnalyzerStatusRes {
  export type AsObject = {
    status: string,
  }
}

export class RemoveScraperReq extends jspb.Message {
  getId(): string;
  setId(value: string): RemoveScraperReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveScraperReq.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveScraperReq): RemoveScraperReq.AsObject;
  static serializeBinaryToWriter(message: RemoveScraperReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveScraperReq;
  static deserializeBinaryFromReader(message: RemoveScraperReq, reader: jspb.BinaryReader): RemoveScraperReq;
}

export namespace RemoveScraperReq {
  export type AsObject = {
    id: string,
  }
}

export class RemoveScraperRes extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): RemoveScraperRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveScraperRes.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveScraperRes): RemoveScraperRes.AsObject;
  static serializeBinaryToWriter(message: RemoveScraperRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveScraperRes;
  static deserializeBinaryFromReader(message: RemoveScraperRes, reader: jspb.BinaryReader): RemoveScraperRes;
}

export namespace RemoveScraperRes {
  export type AsObject = {
    status: string,
  }
}

export class RemoveAnalyzerReq extends jspb.Message {
  getId(): string;
  setId(value: string): RemoveAnalyzerReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveAnalyzerReq.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveAnalyzerReq): RemoveAnalyzerReq.AsObject;
  static serializeBinaryToWriter(message: RemoveAnalyzerReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveAnalyzerReq;
  static deserializeBinaryFromReader(message: RemoveAnalyzerReq, reader: jspb.BinaryReader): RemoveAnalyzerReq;
}

export namespace RemoveAnalyzerReq {
  export type AsObject = {
    id: string,
  }
}

export class RemoveAnalyzerRes extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): RemoveAnalyzerRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveAnalyzerRes.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveAnalyzerRes): RemoveAnalyzerRes.AsObject;
  static serializeBinaryToWriter(message: RemoveAnalyzerRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveAnalyzerRes;
  static deserializeBinaryFromReader(message: RemoveAnalyzerRes, reader: jspb.BinaryReader): RemoveAnalyzerRes;
}

export namespace RemoveAnalyzerRes {
  export type AsObject = {
    status: string,
  }
}

