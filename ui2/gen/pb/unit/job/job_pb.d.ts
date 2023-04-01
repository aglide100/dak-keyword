// package: pb.unit.job
// file: pb/unit/job/job.proto

import * as jspb from "google-protobuf";

export class Job extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getStatus(): string;
  setStatus(value: string): void;

  getKeyword(): string;
  setKeyword(value: string): void;

  getOwner(): string;
  setOwner(value: string): void;

  getDate(): string;
  setDate(value: string): void;

  getAutorerun(): boolean;
  setAutorerun(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Job.AsObject;
  static toObject(includeInstance: boolean, msg: Job): Job.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Job, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Job;
  static deserializeBinaryFromReader(message: Job, reader: jspb.BinaryReader): Job;
}

export namespace Job {
  export type AsObject = {
    id: string,
    status: string,
    keyword: string,
    owner: string,
    date: string,
    autorerun: boolean,
  }
}

