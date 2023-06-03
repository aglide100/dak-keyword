import * as jspb from 'google-protobuf'



export class CosineSimilarity extends jspb.Message {
  getCosineSimilarityId(): number;
  setCosineSimilarityId(value: number): CosineSimilarity;

  getWorkerId(): string;
  setWorkerId(value: string): CosineSimilarity;

  getColumnIdList(): Array<number>;
  setColumnIdList(value: Array<number>): CosineSimilarity;
  clearColumnIdList(): CosineSimilarity;
  addColumnId(value: number, index?: number): CosineSimilarity;

  getRowIdList(): Array<number>;
  setRowIdList(value: Array<number>): CosineSimilarity;
  clearRowIdList(): CosineSimilarity;
  addRowId(value: number, index?: number): CosineSimilarity;

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
    cosineSimilarityId: number,
    workerId: string,
    columnIdList: Array<number>,
    rowIdList: Array<number>,
    scoreList: Array<number>,
  }
}

