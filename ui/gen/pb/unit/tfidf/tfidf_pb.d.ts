import * as jspb from 'google-protobuf'



export class Tfidf extends jspb.Message {
  getWorkerId(): string;
  setWorkerId(value: string): Tfidf;

  getArticleId(): number;
  setArticleId(value: number): Tfidf;

  getVocabColumnList(): Array<number>;
  setVocabColumnList(value: Array<number>): Tfidf;
  clearVocabColumnList(): Tfidf;
  addVocabColumn(value: number, index?: number): Tfidf;

  getScoreList(): Array<number>;
  setScoreList(value: Array<number>): Tfidf;
  clearScoreList(): Tfidf;
  addScore(value: number, index?: number): Tfidf;

  getId(): number;
  setId(value: number): Tfidf;

  getVocabId(): number;
  setVocabId(value: number): Tfidf;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tfidf.AsObject;
  static toObject(includeInstance: boolean, msg: Tfidf): Tfidf.AsObject;
  static serializeBinaryToWriter(message: Tfidf, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tfidf;
  static deserializeBinaryFromReader(message: Tfidf, reader: jspb.BinaryReader): Tfidf;
}

export namespace Tfidf {
  export type AsObject = {
    workerId: string,
    articleId: number,
    vocabColumnList: Array<number>,
    scoreList: Array<number>,
    id: number,
    vocabId: number,
  }
}

