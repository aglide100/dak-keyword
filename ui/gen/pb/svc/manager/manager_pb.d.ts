// package: pb.svc.manager
// file: pb/svc/manager/manager.proto

import * as jspb from "google-protobuf";

export class CreateNewJobReq extends jspb.Message {
  getKeyword(): string;
  setKeyword(value: string): void;

  getOwner(): string;
  setOwner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateNewJobReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateNewJobReq): CreateNewJobReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateNewJobReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateNewJobReq;
  static deserializeBinaryFromReader(message: CreateNewJobReq, reader: jspb.BinaryReader): CreateNewJobReq;
}

export namespace CreateNewJobReq {
  export type AsObject = {
    keyword: string,
    owner: string,
  }
}

export class CreateNewJobRes extends jspb.Message {
  clearKeywordList(): void;
  getKeywordList(): Array<string>;
  setKeywordList(value: Array<string>): void;
  addKeyword(value: string, index?: number): string;

  clearWorkeridList(): void;
  getWorkeridList(): Array<string>;
  setWorkeridList(value: Array<string>): void;
  addWorkerid(value: string, index?: number): string;

  getJobid(): string;
  setJobid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateNewJobRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateNewJobRes): CreateNewJobRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateNewJobRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateNewJobRes;
  static deserializeBinaryFromReader(message: CreateNewJobRes, reader: jspb.BinaryReader): CreateNewJobRes;
}

export namespace CreateNewJobRes {
  export type AsObject = {
    keywordList: Array<string>,
    workeridList: Array<string>,
    jobid: string,
  }
}

export class GetJobStatusReq extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getOwner(): string;
  setOwner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetJobStatusReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetJobStatusReq): GetJobStatusReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetJobStatusReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetJobStatusReq;
  static deserializeBinaryFromReader(message: GetJobStatusReq, reader: jspb.BinaryReader): GetJobStatusReq;
}

export namespace GetJobStatusReq {
  export type AsObject = {
    id: string,
    owner: string,
  }
}

export class GetJobStatusRes extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetJobStatusRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetJobStatusRes): GetJobStatusRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetJobStatusRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetJobStatusRes;
  static deserializeBinaryFromReader(message: GetJobStatusRes, reader: jspb.BinaryReader): GetJobStatusRes;
}

export namespace GetJobStatusRes {
  export type AsObject = {
    status: string,
  }
}

export class StopJobReq extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopJobReq.AsObject;
  static toObject(includeInstance: boolean, msg: StopJobReq): StopJobReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StopJobReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopJobReq;
  static deserializeBinaryFromReader(message: StopJobReq, reader: jspb.BinaryReader): StopJobReq;
}

export namespace StopJobReq {
  export type AsObject = {
    id: string,
  }
}

export class StopJobRes extends jspb.Message {
  getResult(): string;
  setResult(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopJobRes.AsObject;
  static toObject(includeInstance: boolean, msg: StopJobRes): StopJobRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StopJobRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopJobRes;
  static deserializeBinaryFromReader(message: StopJobRes, reader: jspb.BinaryReader): StopJobRes;
}

export namespace StopJobRes {
  export type AsObject = {
    result: string,
  }
}

export class DoneScraperReq extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DoneScraperReq.AsObject;
  static toObject(includeInstance: boolean, msg: DoneScraperReq): DoneScraperReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DoneScraperReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DoneScraperReq;
  static deserializeBinaryFromReader(message: DoneScraperReq, reader: jspb.BinaryReader): DoneScraperReq;
}

export namespace DoneScraperReq {
  export type AsObject = {
    id: string,
  }
}

export class DoneScraperRes extends jspb.Message {
  getResult(): string;
  setResult(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DoneScraperRes.AsObject;
  static toObject(includeInstance: boolean, msg: DoneScraperRes): DoneScraperRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DoneScraperRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DoneScraperRes;
  static deserializeBinaryFromReader(message: DoneScraperRes, reader: jspb.BinaryReader): DoneScraperRes;
}

export namespace DoneScraperRes {
  export type AsObject = {
    result: string,
  }
}

export class DoneAnalyzerReq extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DoneAnalyzerReq.AsObject;
  static toObject(includeInstance: boolean, msg: DoneAnalyzerReq): DoneAnalyzerReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DoneAnalyzerReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DoneAnalyzerReq;
  static deserializeBinaryFromReader(message: DoneAnalyzerReq, reader: jspb.BinaryReader): DoneAnalyzerReq;
}

export namespace DoneAnalyzerReq {
  export type AsObject = {
    id: string,
  }
}

export class DoneAnalyzerRes extends jspb.Message {
  getResult(): string;
  setResult(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DoneAnalyzerRes.AsObject;
  static toObject(includeInstance: boolean, msg: DoneAnalyzerRes): DoneAnalyzerRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DoneAnalyzerRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DoneAnalyzerRes;
  static deserializeBinaryFromReader(message: DoneAnalyzerRes, reader: jspb.BinaryReader): DoneAnalyzerRes;
}

export namespace DoneAnalyzerRes {
  export type AsObject = {
    result: string,
  }
}

export class UpdateJobStatusReq extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getStatus(): string;
  setStatus(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateJobStatusReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateJobStatusReq): UpdateJobStatusReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateJobStatusReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateJobStatusReq;
  static deserializeBinaryFromReader(message: UpdateJobStatusReq, reader: jspb.BinaryReader): UpdateJobStatusReq;
}

export namespace UpdateJobStatusReq {
  export type AsObject = {
    id: string,
    status: string,
  }
}

export class UpdateJobStatusRes extends jspb.Message {
  getResult(): string;
  setResult(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateJobStatusRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateJobStatusRes): UpdateJobStatusRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateJobStatusRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateJobStatusRes;
  static deserializeBinaryFromReader(message: UpdateJobStatusRes, reader: jspb.BinaryReader): UpdateJobStatusRes;
}

export namespace UpdateJobStatusRes {
  export type AsObject = {
    result: string,
  }
}

export class GetJobListReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetJobListReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetJobListReq): GetJobListReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetJobListReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetJobListReq;
  static deserializeBinaryFromReader(message: GetJobListReq, reader: jspb.BinaryReader): GetJobListReq;
}

export namespace GetJobListReq {
  export type AsObject = {
  }
}

export class GetJobListRes extends jspb.Message {
  clearIdList(): void;
  getIdList(): Array<string>;
  setIdList(value: Array<string>): void;
  addId(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetJobListRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetJobListRes): GetJobListRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetJobListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetJobListRes;
  static deserializeBinaryFromReader(message: GetJobListRes, reader: jspb.BinaryReader): GetJobListRes;
}

export namespace GetJobListRes {
  export type AsObject = {
    idList: Array<string>,
  }
}

