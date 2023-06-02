import * as jspb from 'google-protobuf'



export class CosineSimilarity extends jspb.Message {
  getArticleId(): string;
  setArticleId(value: string): CosineSimilarity;

  getWorkerId(): string;
  setWorkerId(value: string): CosineSimilarity;

  getComparisonIdList(): Array<number>;
  setComparisonIdList(value: Array<number>): CosineSimilarity;
  clearComparisonIdList(): CosineSimilarity;
  addComparisonId(value: number, index?: number): CosineSimilarity;

  getScoreList(): Array<number>;
  setScoreList(value: Array<number>): CosineSimilarity;
  clearScoreList(): CosineSimilarity;
  addScore(value: number, index?: number): CosineSimilarity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CosineSimilarity.AsObject;
  static toObject(includeInstance: boolean, msg: CosineSimilarity): CosineSimilarity.AsObject;
  static serializeBinaryToWriter(message: CosineSimilarity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CosineSimilarity;
  static deserializeBinaryFromReader(message: CosineSimilarity, reader: jspb.BinaryReader): CosineSimilarity;
}

export namespace CosineSimilarity {
  export type AsObject = {
    articleId: string,
    workerId: string,
    comparisonIdList: Array<number>,
    scoreList: Array<number>,
  }
}

