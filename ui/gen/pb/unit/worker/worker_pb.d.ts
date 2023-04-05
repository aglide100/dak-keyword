import * as jspb from 'google-protobuf'



export class Worker extends jspb.Message {
  getWorkerId(): string;
  setWorkerId(value: string): Worker;

  getKeyword(): string;
  setKeyword(value: string): Worker;

  getStatus(): string;
  setStatus(value: string): Worker;

  getJobId(): string;
  setJobId(value: string): Worker;

  getUpdateAt(): string;
  setUpdateAt(value: string): Worker;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Worker.AsObject;
  static toObject(includeInstance: boolean, msg: Worker): Worker.AsObject;
  static serializeBinaryToWriter(message: Worker, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Worker;
  static deserializeBinaryFromReader(message: Worker, reader: jspb.BinaryReader): Worker;
}

export namespace Worker {
  export type AsObject = {
    workerId: string,
    keyword: string,
    status: string,
    jobId: string,
    updateAt: string,
  }
}

