import * as jspb from 'google-protobuf'

import * as pb_unit_worker_worker_pb from '../../../pb/unit/worker/worker_pb';


export class GetWorkerListReq extends jspb.Message {
  getId(): string;
  setId(value: string): GetWorkerListReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWorkerListReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetWorkerListReq): GetWorkerListReq.AsObject;
  static serializeBinaryToWriter(message: GetWorkerListReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWorkerListReq;
  static deserializeBinaryFromReader(message: GetWorkerListReq, reader: jspb.BinaryReader): GetWorkerListReq;
}

export namespace GetWorkerListReq {
  export type AsObject = {
    id: string,
  }
}

export class GetWorkerListRes extends jspb.Message {
  getWorkerList(): Array<pb_unit_worker_worker_pb.Worker>;
  setWorkerList(value: Array<pb_unit_worker_worker_pb.Worker>): GetWorkerListRes;
  clearWorkerList(): GetWorkerListRes;
  addWorker(value?: pb_unit_worker_worker_pb.Worker, index?: number): pb_unit_worker_worker_pb.Worker;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWorkerListRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetWorkerListRes): GetWorkerListRes.AsObject;
  static serializeBinaryToWriter(message: GetWorkerListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWorkerListRes;
  static deserializeBinaryFromReader(message: GetWorkerListRes, reader: jspb.BinaryReader): GetWorkerListRes;
}

export namespace GetWorkerListRes {
  export type AsObject = {
    workerList: Array<pb_unit_worker_worker_pb.Worker.AsObject>,
  }
}

export class UpdateWorkerStatusReq extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateWorkerStatusReq;

  getMsg(): string;
  setMsg(value: string): UpdateWorkerStatusReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateWorkerStatusReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateWorkerStatusReq): UpdateWorkerStatusReq.AsObject;
  static serializeBinaryToWriter(message: UpdateWorkerStatusReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateWorkerStatusReq;
  static deserializeBinaryFromReader(message: UpdateWorkerStatusReq, reader: jspb.BinaryReader): UpdateWorkerStatusReq;
}

export namespace UpdateWorkerStatusReq {
  export type AsObject = {
    id: string,
    msg: string,
  }
}

export class UpdateWorkerStatusRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateWorkerStatusRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateWorkerStatusRes): UpdateWorkerStatusRes.AsObject;
  static serializeBinaryToWriter(message: UpdateWorkerStatusRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateWorkerStatusRes;
  static deserializeBinaryFromReader(message: UpdateWorkerStatusRes, reader: jspb.BinaryReader): UpdateWorkerStatusRes;
}

export namespace UpdateWorkerStatusRes {
  export type AsObject = {
  }
}

