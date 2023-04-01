// package: pb.svc.analyzer
// file: pb/svc/analyzer/analyzer.proto

import * as jspb from "google-protobuf";

export class StartAnalyzerReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartAnalyzerReq.AsObject;
  static toObject(includeInstance: boolean, msg: StartAnalyzerReq): StartAnalyzerReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StartAnalyzerReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartAnalyzerReq;
  static deserializeBinaryFromReader(message: StartAnalyzerReq, reader: jspb.BinaryReader): StartAnalyzerReq;
}

export namespace StartAnalyzerReq {
  export type AsObject = {
  }
}

export class StartAnalyzerRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartAnalyzerRes.AsObject;
  static toObject(includeInstance: boolean, msg: StartAnalyzerRes): StartAnalyzerRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StartAnalyzerRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartAnalyzerRes;
  static deserializeBinaryFromReader(message: StartAnalyzerRes, reader: jspb.BinaryReader): StartAnalyzerRes;
}

export namespace StartAnalyzerRes {
  export type AsObject = {
  }
}

export class GetStatusReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStatusReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetStatusReq): GetStatusReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetStatusReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStatusReq;
  static deserializeBinaryFromReader(message: GetStatusReq, reader: jspb.BinaryReader): GetStatusReq;
}

export namespace GetStatusReq {
  export type AsObject = {
  }
}

export class GetStatusRes extends jspb.Message {
  getCurrent(): number;
  setCurrent(value: number): void;

  getTotal(): number;
  setTotal(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStatusRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetStatusRes): GetStatusRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetStatusRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStatusRes;
  static deserializeBinaryFromReader(message: GetStatusRes, reader: jspb.BinaryReader): GetStatusRes;
}

export namespace GetStatusRes {
  export type AsObject = {
    current: number,
    total: number,
  }
}

