import * as jspb from 'google-protobuf'



export class Vocab extends jspb.Message {
  getVocabId(): number;
  setVocabId(value: number): Vocab;

  getJobId(): string;
  setJobId(value: string): Vocab;

  getWorkerId(): string;
  setWorkerId(value: string): Vocab;

  getWordsList(): Array<string>;
  setWordsList(value: Array<string>): Vocab;
  clearWordsList(): Vocab;
  addWords(value: string, index?: number): Vocab;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Vocab.AsObject;
  static toObject(includeInstance: boolean, msg: Vocab): Vocab.AsObject;
  static serializeBinaryToWriter(message: Vocab, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Vocab;
  static deserializeBinaryFromReader(message: Vocab, reader: jspb.BinaryReader): Vocab;
}

export namespace Vocab {
  export type AsObject = {
    vocabId: number,
    jobId: string,
    workerId: string,
    wordsList: Array<string>,
  }
}

