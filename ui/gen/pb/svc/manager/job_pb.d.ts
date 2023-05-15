import * as jspb from 'google-protobuf'

import * as pb_unit_job_job_pb from '../../../pb/unit/job/job_pb';


export class GetJobIsReRunReq extends jspb.Message {
  getId(): string;
  setId(value: string): GetJobIsReRunReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetJobIsReRunReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetJobIsReRunReq): GetJobIsReRunReq.AsObject;
  static serializeBinaryToWriter(message: GetJobIsReRunReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetJobIsReRunReq;
  static deserializeBinaryFromReader(message: GetJobIsReRunReq, reader: jspb.BinaryReader): GetJobIsReRunReq;
}

export namespace GetJobIsReRunReq {
  export type AsObject = {
    id: string,
  }
}

export class GetJobIsReRunRes extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): GetJobIsReRunRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetJobIsReRunRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetJobIsReRunRes): GetJobIsReRunRes.AsObject;
  static serializeBinaryToWriter(message: GetJobIsReRunRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetJobIsReRunRes;
  static deserializeBinaryFromReader(message: GetJobIsReRunRes, reader: jspb.BinaryReader): GetJobIsReRunRes;
}

export namespace GetJobIsReRunRes {
  export type AsObject = {
    result: boolean,
  }
}

export class CreateNewJobReq extends jspb.Message {
  getKeyword(): string;
  setKeyword(value: string): CreateNewJobReq;

  getOwner(): string;
  setOwner(value: string): CreateNewJobReq;

  getAccesscode(): string;
  setAccesscode(value: string): CreateNewJobReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateNewJobReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateNewJobReq): CreateNewJobReq.AsObject;
  static serializeBinaryToWriter(message: CreateNewJobReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateNewJobReq;
  static deserializeBinaryFromReader(message: CreateNewJobReq, reader: jspb.BinaryReader): CreateNewJobReq;
}

export namespace CreateNewJobReq {
  export type AsObject = {
    keyword: string,
    owner: string,
    accesscode: string,
  }
}

export class CreateNewJobRes extends jspb.Message {
  getMsg(): string;
  setMsg(value: string): CreateNewJobRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateNewJobRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateNewJobRes): CreateNewJobRes.AsObject;
  static serializeBinaryToWriter(message: CreateNewJobRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateNewJobRes;
  static deserializeBinaryFromReader(message: CreateNewJobRes, reader: jspb.BinaryReader): CreateNewJobRes;
}

export namespace CreateNewJobRes {
  export type AsObject = {
    msg: string,
  }
}

export class ReRunJobReq extends jspb.Message {
  getId(): string;
  setId(value: string): ReRunJobReq;

  getSchedule(): boolean;
  setSchedule(value: boolean): ReRunJobReq;

  getAccesscode(): string;
  setAccesscode(value: string): ReRunJobReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReRunJobReq.AsObject;
  static toObject(includeInstance: boolean, msg: ReRunJobReq): ReRunJobReq.AsObject;
  static serializeBinaryToWriter(message: ReRunJobReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReRunJobReq;
  static deserializeBinaryFromReader(message: ReRunJobReq, reader: jspb.BinaryReader): ReRunJobReq;
}

export namespace ReRunJobReq {
  export type AsObject = {
    id: string,
    schedule: boolean,
    accesscode: string,
  }
}

export class ReRunJobRes extends jspb.Message {
  getMsg(): string;
  setMsg(value: string): ReRunJobRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReRunJobRes.AsObject;
  static toObject(includeInstance: boolean, msg: ReRunJobRes): ReRunJobRes.AsObject;
  static serializeBinaryToWriter(message: ReRunJobRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReRunJobRes;
  static deserializeBinaryFromReader(message: ReRunJobRes, reader: jspb.BinaryReader): ReRunJobRes;
}

export namespace ReRunJobRes {
  export type AsObject = {
    msg: string,
  }
}

export class GetJobStatusReq extends jspb.Message {
  getId(): string;
  setId(value: string): GetJobStatusReq;

  getOwner(): string;
  setOwner(value: string): GetJobStatusReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetJobStatusReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetJobStatusReq): GetJobStatusReq.AsObject;
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
  setStatus(value: string): GetJobStatusRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetJobStatusRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetJobStatusRes): GetJobStatusRes.AsObject;
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
  setId(value: string): StopJobReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopJobReq.AsObject;
  static toObject(includeInstance: boolean, msg: StopJobReq): StopJobReq.AsObject;
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
  setResult(value: string): StopJobRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopJobRes.AsObject;
  static toObject(includeInstance: boolean, msg: StopJobRes): StopJobRes.AsObject;
  static serializeBinaryToWriter(message: StopJobRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopJobRes;
  static deserializeBinaryFromReader(message: StopJobRes, reader: jspb.BinaryReader): StopJobRes;
}

export namespace StopJobRes {
  export type AsObject = {
    result: string,
  }
}

export class UpdateJobStatusReq extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateJobStatusReq;

  getStatus(): string;
  setStatus(value: string): UpdateJobStatusReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateJobStatusReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateJobStatusReq): UpdateJobStatusReq.AsObject;
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
  setResult(value: string): UpdateJobStatusRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateJobStatusRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateJobStatusRes): UpdateJobStatusRes.AsObject;
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
  static serializeBinaryToWriter(message: GetJobListReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetJobListReq;
  static deserializeBinaryFromReader(message: GetJobListReq, reader: jspb.BinaryReader): GetJobListReq;
}

export namespace GetJobListReq {
  export type AsObject = {
  }
}

export class GetJobListRes extends jspb.Message {
  getJobList(): Array<pb_unit_job_job_pb.Job>;
  setJobList(value: Array<pb_unit_job_job_pb.Job>): GetJobListRes;
  clearJobList(): GetJobListRes;
  addJob(value?: pb_unit_job_job_pb.Job, index?: number): pb_unit_job_job_pb.Job;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetJobListRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetJobListRes): GetJobListRes.AsObject;
  static serializeBinaryToWriter(message: GetJobListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetJobListRes;
  static deserializeBinaryFromReader(message: GetJobListRes, reader: jspb.BinaryReader): GetJobListRes;
}

export namespace GetJobListRes {
  export type AsObject = {
    jobList: Array<pb_unit_job_job_pb.Job.AsObject>,
  }
}

