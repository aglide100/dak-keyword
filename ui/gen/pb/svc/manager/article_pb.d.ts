import * as jspb from 'google-protobuf'

import * as pb_unit_article_article_pb from '../../../pb/unit/article/article_pb';


export class GetArticleCountByDayReq extends jspb.Message {
  getId(): string;
  setId(value: string): GetArticleCountByDayReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetArticleCountByDayReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetArticleCountByDayReq): GetArticleCountByDayReq.AsObject;
  static serializeBinaryToWriter(message: GetArticleCountByDayReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetArticleCountByDayReq;
  static deserializeBinaryFromReader(message: GetArticleCountByDayReq, reader: jspb.BinaryReader): GetArticleCountByDayReq;
}

export namespace GetArticleCountByDayReq {
  export type AsObject = {
    id: string,
  }
}

export class GetArticleCountByDayRes extends jspb.Message {
  getArticlecountList(): Array<pb_unit_article_article_pb.ArticleCount>;
  setArticlecountList(value: Array<pb_unit_article_article_pb.ArticleCount>): GetArticleCountByDayRes;
  clearArticlecountList(): GetArticleCountByDayRes;
  addArticlecount(value?: pb_unit_article_article_pb.ArticleCount, index?: number): pb_unit_article_article_pb.ArticleCount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetArticleCountByDayRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetArticleCountByDayRes): GetArticleCountByDayRes.AsObject;
  static serializeBinaryToWriter(message: GetArticleCountByDayRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetArticleCountByDayRes;
  static deserializeBinaryFromReader(message: GetArticleCountByDayRes, reader: jspb.BinaryReader): GetArticleCountByDayRes;
}

export namespace GetArticleCountByDayRes {
  export type AsObject = {
    articlecountList: Array<pb_unit_article_article_pb.ArticleCount.AsObject>,
  }
}

export class GetArticleCountByHourReq extends jspb.Message {
  getId(): string;
  setId(value: string): GetArticleCountByHourReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetArticleCountByHourReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetArticleCountByHourReq): GetArticleCountByHourReq.AsObject;
  static serializeBinaryToWriter(message: GetArticleCountByHourReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetArticleCountByHourReq;
  static deserializeBinaryFromReader(message: GetArticleCountByHourReq, reader: jspb.BinaryReader): GetArticleCountByHourReq;
}

export namespace GetArticleCountByHourReq {
  export type AsObject = {
    id: string,
  }
}

export class GetArticleCountByHourRes extends jspb.Message {
  getArticlecountList(): Array<pb_unit_article_article_pb.ArticleCount>;
  setArticlecountList(value: Array<pb_unit_article_article_pb.ArticleCount>): GetArticleCountByHourRes;
  clearArticlecountList(): GetArticleCountByHourRes;
  addArticlecount(value?: pb_unit_article_article_pb.ArticleCount, index?: number): pb_unit_article_article_pb.ArticleCount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetArticleCountByHourRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetArticleCountByHourRes): GetArticleCountByHourRes.AsObject;
  static serializeBinaryToWriter(message: GetArticleCountByHourRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetArticleCountByHourRes;
  static deserializeBinaryFromReader(message: GetArticleCountByHourRes, reader: jspb.BinaryReader): GetArticleCountByHourRes;
}

export namespace GetArticleCountByHourRes {
  export type AsObject = {
    articlecountList: Array<pb_unit_article_article_pb.ArticleCount.AsObject>,
  }
}

export class GetArticleListReq extends jspb.Message {
  getId(): string;
  setId(value: string): GetArticleListReq;

  getPage(): number;
  setPage(value: number): GetArticleListReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetArticleListReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetArticleListReq): GetArticleListReq.AsObject;
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
  getArticleList(): Array<pb_unit_article_article_pb.Article>;
  setArticleList(value: Array<pb_unit_article_article_pb.Article>): GetArticleListRes;
  clearArticleList(): GetArticleListRes;
  addArticle(value?: pb_unit_article_article_pb.Article, index?: number): pb_unit_article_article_pb.Article;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetArticleListRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetArticleListRes): GetArticleListRes.AsObject;
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
  setId(value: string): GetArticleInfoReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetArticleInfoReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetArticleInfoReq): GetArticleInfoReq.AsObject;
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
  setTotalcount(value: number): GetArticleInfoRes;

  getPagecount(): number;
  setPagecount(value: number): GetArticleInfoRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetArticleInfoRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetArticleInfoRes): GetArticleInfoRes.AsObject;
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

