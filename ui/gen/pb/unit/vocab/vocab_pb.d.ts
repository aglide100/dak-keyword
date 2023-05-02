import * as jspb from 'google-protobuf'



export class Vocab extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Vocab.AsObject;
  static toObject(includeInstance: boolean, msg: Vocab): Vocab.AsObject;
  static serializeBinaryToWriter(message: Vocab, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Vocab;
  static deserializeBinaryFromReader(message: Vocab, reader: jspb.BinaryReader): Vocab;
}

export namespace Vocab {
  export type AsObject = {
  }
}

