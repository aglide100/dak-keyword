import * as jspb from 'google-protobuf'



export class Article extends jspb.Message {
  getId(): string;
  setId(value: string): Article;

  getAuthor(): string;
  setAuthor(value: string): Article;

  getKeyword(): string;
  setKeyword(value: string): Article;

  getContent(): string;
  setContent(value: string): Article;

  getPlatform(): string;
  setPlatform(value: string): Article;

  getScoreHappy(): string;
  setScoreHappy(value: string): Article;

  getScoreFear(): string;
  setScoreFear(value: string): Article;

  getScoreEmbarrassed(): string;
  setScoreEmbarrassed(value: string): Article;

  getScoreSad(): string;
  setScoreSad(value: string): Article;

  getScoreRage(): string;
  setScoreRage(value: string): Article;

  getScoreHurt(): string;
  setScoreHurt(value: string): Article;

  getScoreMaxValue(): string;
  setScoreMaxValue(value: string): Article;

  getScoreMaxName(): string;
  setScoreMaxName(value: string): Article;

  getCreateAt(): string;
  setCreateAt(value: string): Article;

  getJobId(): string;
  setJobId(value: string): Article;

  getWorkerId(): string;
  setWorkerId(value: string): Article;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Article.AsObject;
  static toObject(includeInstance: boolean, msg: Article): Article.AsObject;
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
    scoreHappy: string,
    scoreFear: string,
    scoreEmbarrassed: string,
    scoreSad: string,
    scoreRage: string,
    scoreHurt: string,
    scoreMaxValue: string,
    scoreMaxName: string,
    createAt: string,
    jobId: string,
    workerId: string,
  }
}

export class ArticleCount extends jspb.Message {
  getCreateattime(): string;
  setCreateattime(value: string): ArticleCount;

  getCount(): string;
  setCount(value: string): ArticleCount;

  getScoremaxname(): string;
  setScoremaxname(value: string): ArticleCount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArticleCount.AsObject;
  static toObject(includeInstance: boolean, msg: ArticleCount): ArticleCount.AsObject;
  static serializeBinaryToWriter(message: ArticleCount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArticleCount;
  static deserializeBinaryFromReader(message: ArticleCount, reader: jspb.BinaryReader): ArticleCount;
}

export namespace ArticleCount {
  export type AsObject = {
    createattime: string,
    count: string,
    scoremaxname: string,
  }
}

