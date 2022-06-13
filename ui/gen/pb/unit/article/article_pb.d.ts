// package: pb.unit.article
// file: pb/unit/article/article.proto

import * as jspb from "google-protobuf";

export class Article extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getAuthor(): string;
  setAuthor(value: string): void;

  getKeyword(): string;
  setKeyword(value: string): void;

  getContent(): string;
  setContent(value: string): void;

  getPlatform(): string;
  setPlatform(value: string): void;

  getScorePos(): string;
  setScorePos(value: string): void;

  getScoreNeg(): string;
  setScoreNeg(value: string): void;

  getScoreNeut(): string;
  setScoreNeut(value: string): void;

  getScoreComp(): string;
  setScoreComp(value: string): void;

  getScoreNone(): string;
  setScoreNone(value: string): void;

  getScoreMaxValue(): string;
  setScoreMaxValue(value: string): void;

  getScoreMaxName(): string;
  setScoreMaxName(value: string): void;

  getJobId(): string;
  setJobId(value: string): void;

  getWorkerId(): string;
  setWorkerId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Article.AsObject;
  static toObject(includeInstance: boolean, msg: Article): Article.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Article, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Article;
  static deserializeBinaryFromReader(message: Article, reader: jspb.BinaryReader): Article;
}

export namespace Article {
  export type AsObject = {
    id: string,
    author: string,
    keyword: string,
    content: string,
    platform: string,
    scorePos: string,
    scoreNeg: string,
    scoreNeut: string,
    scoreComp: string,
    scoreNone: string,
    scoreMaxValue: string,
    scoreMaxName: string,
    jobId: string,
    workerId: string,
  }
}

