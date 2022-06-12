// package: pb.unit.worker
// file: pb/unit/worker/worker.proto

import * as jspb from "google-protobuf";

export class Worker extends jspb.Message {
  getWorkerId(): string;
  setWorkerId(value: string): void;

  getStatus(): string;
  setStatus(value: string): void;

  getJobId(): string;
  setJobId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Worker.AsObject;
  static toObject(includeInstance: boolean, msg: Worker): Worker.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Worker, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Worker;
  static deserializeBinaryFromReader(message: Worker, reader: jspb.BinaryReader): Worker;
}

export namespace Worker {
  export type AsObject = {
    workerId: string,
    status: string,
    jobId: string,
  }
}

