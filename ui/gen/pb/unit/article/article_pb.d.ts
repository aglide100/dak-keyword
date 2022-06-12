// package: pb.unit.article
// file: pb/unit/article/article.proto

import * as jspb from "google-protobuf";

export class Article extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getText(): string;
  setText(value: string): void;

  getCreateAt(): string;
  setCreateAt(value: string): void;

  getAuthor(): string;
  setAuthor(value: string): void;

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
    text: string,
    createAt: string,
    author: string,
  }
}

