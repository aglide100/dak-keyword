// package: pb.svc.manager
// file: pb/svc/manager/manager.proto

import * as jspb from "google-protobuf";
import * as pb_unit_job_job_pb from "../../../pb/unit/job/job_pb";
import * as pb_unit_worker_worker_pb from "../../../pb/unit/worker/worker_pb";
import * as pb_unit_article_article_pb from "../../../pb/unit/article/article_pb";

export class CreateNewJobReq extends jspb.Message {
  getKeyword(): string;
  setKeyword(value: string): void;

  getOwner(): string;
  setOwner(value: string): void;

  getAccesscode(): string;
  setAccesscode(value: string): void;

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
    accesscode: string,
  }
}

export class CreateNewJobRes extends jspb.Message {
  getMsg(): string;
  setMsg(value: string): void;

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
    msg: string,
  }
}

export class ReRunJobReq extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getAccesscode(): string;
  setAccesscode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReRunJobReq.AsObject;
  static toObject(includeInstance: boolean, msg: ReRunJobReq): ReRunJobReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReRunJobReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReRunJobReq;
  static deserializeBinaryFromReader(message: ReRunJobReq, reader: jspb.BinaryReader): ReRunJobReq;
}

export namespace ReRunJobReq {
  export type AsObject = {
    id: string,
    accesscode: string,
  }
}

export class ReRunJobRes extends jspb.Message {
  getMsg(): string;
  setMsg(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReRunJobRes.AsObject;
  static toObject(includeInstance: boolean, msg: ReRunJobRes): ReRunJobRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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

export class WhenDoneScraperReq extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WhenDoneScraperReq.AsObject;
  static toObject(includeInstance: boolean, msg: WhenDoneScraperReq): WhenDoneScraperReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WhenDoneScraperReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WhenDoneScraperReq;
  static deserializeBinaryFromReader(message: WhenDoneScraperReq, reader: jspb.BinaryReader): WhenDoneScraperReq;
}

export namespace WhenDoneScraperReq {
  export type AsObject = {
    id: string,
  }
}

export class WhenDoneScraperRes extends jspb.Message {
  getResult(): string;
  setResult(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WhenDoneScraperRes.AsObject;
  static toObject(includeInstance: boolean, msg: WhenDoneScraperRes): WhenDoneScraperRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WhenDoneScraperRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WhenDoneScraperRes;
  static deserializeBinaryFromReader(message: WhenDoneScraperRes, reader: jspb.BinaryReader): WhenDoneScraperRes;
}

export namespace WhenDoneScraperRes {
  export type AsObject = {
    result: string,
  }
}

export class WhenDoneAnalyzerReq extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WhenDoneAnalyzerReq.AsObject;
  static toObject(includeInstance: boolean, msg: WhenDoneAnalyzerReq): WhenDoneAnalyzerReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WhenDoneAnalyzerReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WhenDoneAnalyzerReq;
  static deserializeBinaryFromReader(message: WhenDoneAnalyzerReq, reader: jspb.BinaryReader): WhenDoneAnalyzerReq;
}

export namespace WhenDoneAnalyzerReq {
  export type AsObject = {
    id: string,
  }
}

export class WhenDoneAnalyzerRes extends jspb.Message {
  getResult(): string;
  setResult(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WhenDoneAnalyzerRes.AsObject;
  static toObject(includeInstance: boolean, msg: WhenDoneAnalyzerRes): WhenDoneAnalyzerRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WhenDoneAnalyzerRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WhenDoneAnalyzerRes;
  static deserializeBinaryFromReader(message: WhenDoneAnalyzerRes, reader: jspb.BinaryReader): WhenDoneAnalyzerRes;
}

export namespace WhenDoneAnalyzerRes {
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
  clearJobList(): void;
  getJobList(): Array<pb_unit_job_job_pb.Job>;
  setJobList(value: Array<pb_unit_job_job_pb.Job>): void;
  addJob(value?: pb_unit_job_job_pb.Job, index?: number): pb_unit_job_job_pb.Job;

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
    jobList: Array<pb_unit_job_job_pb.Job.AsObject>,
  }
}

export class GetWorkerListReq extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWorkerListReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetWorkerListReq): GetWorkerListReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
  clearWorkerList(): void;
  getWorkerList(): Array<pb_unit_worker_worker_pb.Worker>;
  setWorkerList(value: Array<pb_unit_worker_worker_pb.Worker>): void;
  addWorker(value?: pb_unit_worker_worker_pb.Worker, index?: number): pb_unit_worker_worker_pb.Worker;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWorkerListRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetWorkerListRes): GetWorkerListRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetWorkerListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWorkerListRes;
  static deserializeBinaryFromReader(message: GetWorkerListRes, reader: jspb.BinaryReader): GetWorkerListRes;
}

export namespace GetWorkerListRes {
  export type AsObject = {
    workerList: Array<pb_unit_worker_worker_pb.Worker.AsObject>,
  }
}

export class GetArticleListReq extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getPage(): number;
  setPage(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetArticleListReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetArticleListReq): GetArticleListReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetArticleListReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetArticleListReq;
  static deserializeBinaryFromReader(message: GetArticleListReq, reader: jspb.BinaryReader): GetArticleListReq;
}

export namespace GetArticleListReq {
  export type AsObject = {
    id: string,
    page: number,
  }
}

export class GetArticleListRes extends jspb.Message {
  clearArticleList(): void;
  getArticleList(): Array<pb_unit_article_article_pb.Article>;
  setArticleList(value: Array<pb_unit_article_article_pb.Article>): void;
  addArticle(value?: pb_unit_article_article_pb.Article, index?: number): pb_unit_article_article_pb.Article;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetArticleListRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetArticleListRes): GetArticleListRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetArticleListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetArticleListRes;
  static deserializeBinaryFromReader(message: GetArticleListRes, reader: jspb.BinaryReader): GetArticleListRes;
}

export namespace GetArticleListRes {
  export type AsObject = {
    articleList: Array<pb_unit_article_article_pb.Article.AsObject>,
  }
}

export class GetArticleInfoReq extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetArticleInfoReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetArticleInfoReq): GetArticleInfoReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetArticleInfoReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetArticleInfoReq;
  static deserializeBinaryFromReader(message: GetArticleInfoReq, reader: jspb.BinaryReader): GetArticleInfoReq;
}

export namespace GetArticleInfoReq {
  export type AsObject = {
    id: string,
  }
}

export class GetArticleInfoRes extends jspb.Message {
  getTotalcount(): number;
  setTotalcount(value: number): void;

  getPagecount(): number;
  setPagecount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetArticleInfoRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetArticleInfoRes): GetArticleInfoRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetArticleInfoRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetArticleInfoRes;
  static deserializeBinaryFromReader(message: GetArticleInfoRes, reader: jspb.BinaryReader): GetArticleInfoRes;
}

export namespace GetArticleInfoRes {
  export type AsObject = {
    totalcount: number,
    pagecount: number,
  }
}

export class WhenStartScraperReq extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WhenStartScraperReq.AsObject;
  static toObject(includeInstance: boolean, msg: WhenStartScraperReq): WhenStartScraperReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WhenStartScraperReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WhenStartScraperReq;
  static deserializeBinaryFromReader(message: WhenStartScraperReq, reader: jspb.BinaryReader): WhenStartScraperReq;
}

export namespace WhenStartScraperReq {
  export type AsObject = {
    id: string,
  }
}

export class WhenStartScraperRes extends jspb.Message {
  getResult(): string;
  setResult(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WhenStartScraperRes.AsObject;
  static toObject(includeInstance: boolean, msg: WhenStartScraperRes): WhenStartScraperRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WhenStartScraperRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WhenStartScraperRes;
  static deserializeBinaryFromReader(message: WhenStartScraperRes, reader: jspb.BinaryReader): WhenStartScraperRes;
}

export namespace WhenStartScraperRes {
  export type AsObject = {
    result: string,
  }
}

export class WhenStartAnalyzerReq extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WhenStartAnalyzerReq.AsObject;
  static toObject(includeInstance: boolean, msg: WhenStartAnalyzerReq): WhenStartAnalyzerReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WhenStartAnalyzerReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WhenStartAnalyzerReq;
  static deserializeBinaryFromReader(message: WhenStartAnalyzerReq, reader: jspb.BinaryReader): WhenStartAnalyzerReq;
}

export namespace WhenStartAnalyzerReq {
  export type AsObject = {
    id: string,
  }
}

export class WhenStartAnalyzerRes extends jspb.Message {
  getResult(): string;
  setResult(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WhenStartAnalyzerRes.AsObject;
  static toObject(includeInstance: boolean, msg: WhenStartAnalyzerRes): WhenStartAnalyzerRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WhenStartAnalyzerRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WhenStartAnalyzerRes;
  static deserializeBinaryFromReader(message: WhenStartAnalyzerRes, reader: jspb.BinaryReader): WhenStartAnalyzerRes;
}

export namespace WhenStartAnalyzerRes {
  export type AsObject = {
    result: string,
  }
}

export class WhenScraperHavingErrReq extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getMsg(): string;
  setMsg(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WhenScraperHavingErrReq.AsObject;
  static toObject(includeInstance: boolean, msg: WhenScraperHavingErrReq): WhenScraperHavingErrReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WhenScraperHavingErrReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WhenScraperHavingErrReq;
  static deserializeBinaryFromReader(message: WhenScraperHavingErrReq, reader: jspb.BinaryReader): WhenScraperHavingErrReq;
}

export namespace WhenScraperHavingErrReq {
  export type AsObject = {
    id: string,
    msg: string,
  }
}

export class WhenScraperHavingErrRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WhenScraperHavingErrRes.AsObject;
  static toObject(includeInstance: boolean, msg: WhenScraperHavingErrRes): WhenScraperHavingErrRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WhenScraperHavingErrRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WhenScraperHavingErrRes;
  static deserializeBinaryFromReader(message: WhenScraperHavingErrRes, reader: jspb.BinaryReader): WhenScraperHavingErrRes;
}

export namespace WhenScraperHavingErrRes {
  export type AsObject = {
  }
}

export class WhenAnalyzerHavingErrReq extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getMsg(): string;
  setMsg(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WhenAnalyzerHavingErrReq.AsObject;
  static toObject(includeInstance: boolean, msg: WhenAnalyzerHavingErrReq): WhenAnalyzerHavingErrReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WhenAnalyzerHavingErrReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WhenAnalyzerHavingErrReq;
  static deserializeBinaryFromReader(message: WhenAnalyzerHavingErrReq, reader: jspb.BinaryReader): WhenAnalyzerHavingErrReq;
}

export namespace WhenAnalyzerHavingErrReq {
  export type AsObject = {
    id: string,
    msg: string,
  }
}

export class WhenAnalyzerHavingErrRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WhenAnalyzerHavingErrRes.AsObject;
  static toObject(includeInstance: boolean, msg: WhenAnalyzerHavingErrRes): WhenAnalyzerHavingErrRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WhenAnalyzerHavingErrRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WhenAnalyzerHavingErrRes;
  static deserializeBinaryFromReader(message: WhenAnalyzerHavingErrRes, reader: jspb.BinaryReader): WhenAnalyzerHavingErrRes;
}

export namespace WhenAnalyzerHavingErrRes {
  export type AsObject = {
  }
}

export class UpdateWorkerStatusReq extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getMsg(): string;
  setMsg(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateWorkerStatusReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateWorkerStatusReq): UpdateWorkerStatusReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateWorkerStatusRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateWorkerStatusRes;
  static deserializeBinaryFromReader(message: UpdateWorkerStatusRes, reader: jspb.BinaryReader): UpdateWorkerStatusRes;
}

export namespace UpdateWorkerStatusRes {
  export type AsObject = {
  }
}

