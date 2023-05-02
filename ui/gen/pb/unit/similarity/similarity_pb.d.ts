import * as jspb from 'google-protobuf'



export class Similarity extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Similarity.AsObject;
  static toObject(includeInstance: boolean, msg: Similarity): Similarity.AsObject;
  static serializeBinaryToWriter(message: Similarity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Similarity;
  static deserializeBinaryFromReader(message: Similarity, reader: jspb.BinaryReader): Similarity;
}

export namespace Similarity {
  export type AsObject = {
  }
}

