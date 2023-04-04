import * as jspb from 'google-protobuf'



export class Job extends jspb.Message {
  getId(): string;
  setId(value: string): Job;

  getStatus(): string;
  setStatus(value: string): Job;

  getKeyword(): string;
  setKeyword(value: string): Job;

  getOwner(): string;
  setOwner(value: string): Job;

  getDate(): string;
  setDate(value: string): Job;

  getAutorerun(): boolean;
  setAutorerun(value: boolean): Job;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Job.AsObject;
  static toObject(includeInstance: boolean, msg: Job): Job.AsObject;
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

