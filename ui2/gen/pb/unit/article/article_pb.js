// source: pb/unit/article/article.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() { return this || window || global || self || Function('return this')(); }).call(null);

goog.exportSymbol('proto.pb.unit.article.Article', null, global);
goog.exportSymbol('proto.pb.unit.article.ArticleCount', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.unit.article.Article = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.unit.article.Article, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.unit.article.Article.displayName = 'proto.pb.unit.article.Article';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.unit.article.ArticleCount = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.unit.article.ArticleCount, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.unit.article.ArticleCount.displayName = 'proto.pb.unit.article.ArticleCount';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.unit.article.Article.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.unit.article.Article.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.unit.article.Article} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.unit.article.Article.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    author: jspb.Message.getFieldWithDefault(msg, 2, ""),
    keyword: jspb.Message.getFieldWithDefault(msg, 3, ""),
    content: jspb.Message.getFieldWithDefault(msg, 4, ""),
    platform: jspb.Message.getFieldWithDefault(msg, 5, ""),
    scoreHappy: jspb.Message.getFieldWithDefault(msg, 6, ""),
    scoreFear: jspb.Message.getFieldWithDefault(msg, 7, ""),
    scoreEmbarrassed: jspb.Message.getFieldWithDefault(msg, 8, ""),
    scoreSad: jspb.Message.getFieldWithDefault(msg, 9, ""),
    scoreRage: jspb.Message.getFieldWithDefault(msg, 10, ""),
    scoreHurt: jspb.Message.getFieldWithDefault(msg, 11, ""),
    scoreMaxValue: jspb.Message.getFieldWithDefault(msg, 12, ""),
    scoreMaxName: jspb.Message.getFieldWithDefault(msg, 13, ""),
    createAt: jspb.Message.getFieldWithDefault(msg, 14, ""),
    jobId: jspb.Message.getFieldWithDefault(msg, 15, ""),
    workerId: jspb.Message.getFieldWithDefault(msg, 16, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.unit.article.Article}
 */
proto.pb.unit.article.Article.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.unit.article.Article;
  return proto.pb.unit.article.Article.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.unit.article.Article} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.unit.article.Article}
 */
proto.pb.unit.article.Article.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthor(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setKeyword(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlatform(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setScoreHappy(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setScoreFear(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setScoreEmbarrassed(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setScoreSad(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setScoreRage(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setScoreHurt(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setScoreMaxValue(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setScoreMaxName(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreateAt(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setJobId(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorkerId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.unit.article.Article.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.unit.article.Article.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.unit.article.Article} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.unit.article.Article.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAuthor();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getKeyword();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPlatform();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getScoreHappy();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getScoreFear();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getScoreEmbarrassed();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getScoreSad();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getScoreRage();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getScoreHurt();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getScoreMaxValue();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getScoreMaxName();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getCreateAt();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getJobId();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getWorkerId();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.pb.unit.article.Article.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.unit.article.Article} returns this
 */
proto.pb.unit.article.Article.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string author = 2;
 * @return {string}
 */
proto.pb.unit.article.Article.prototype.getAuthor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.unit.article.Article} returns this
 */
proto.pb.unit.article.Article.prototype.setAuthor = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string keyword = 3;
 * @return {string}
 */
proto.pb.unit.article.Article.prototype.getKeyword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.unit.article.Article} returns this
 */
proto.pb.unit.article.Article.prototype.setKeyword = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string content = 4;
 * @return {string}
 */
proto.pb.unit.article.Article.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.unit.article.Article} returns this
 */
proto.pb.unit.article.Article.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string platform = 5;
 * @return {string}
 */
proto.pb.unit.article.Article.prototype.getPlatform = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.unit.article.Article} returns this
 */
proto.pb.unit.article.Article.prototype.setPlatform = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string Score_happy = 6;
 * @return {string}
 */
proto.pb.unit.article.Article.prototype.getScoreHappy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.unit.article.Article} returns this
 */
proto.pb.unit.article.Article.prototype.setScoreHappy = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string Score_fear = 7;
 * @return {string}
 */
proto.pb.unit.article.Article.prototype.getScoreFear = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.unit.article.Article} returns this
 */
proto.pb.unit.article.Article.prototype.setScoreFear = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string Score_embarrassed = 8;
 * @return {string}
 */
proto.pb.unit.article.Article.prototype.getScoreEmbarrassed = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.unit.article.Article} returns this
 */
proto.pb.unit.article.Article.prototype.setScoreEmbarrassed = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string Score_sad = 9;
 * @return {string}
 */
proto.pb.unit.article.Article.prototype.getScoreSad = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.unit.article.Article} returns this
 */
proto.pb.unit.article.Article.prototype.setScoreSad = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string Score_rage = 10;
 * @return {string}
 */
proto.pb.unit.article.Article.prototype.getScoreRage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.unit.article.Article} returns this
 */
proto.pb.unit.article.Article.prototype.setScoreRage = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string Score_hurt = 11;
 * @return {string}
 */
proto.pb.unit.article.Article.prototype.getScoreHurt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.unit.article.Article} returns this
 */
proto.pb.unit.article.Article.prototype.setScoreHurt = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string score_max_value = 12;
 * @return {string}
 */
proto.pb.unit.article.Article.prototype.getScoreMaxValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.unit.article.Article} returns this
 */
proto.pb.unit.article.Article.prototype.setScoreMaxValue = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string score_max_name = 13;
 * @return {string}
 */
proto.pb.unit.article.Article.prototype.getScoreMaxName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.unit.article.Article} returns this
 */
proto.pb.unit.article.Article.prototype.setScoreMaxName = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string create_at = 14;
 * @return {string}
 */
proto.pb.unit.article.Article.prototype.getCreateAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.unit.article.Article} returns this
 */
proto.pb.unit.article.Article.prototype.setCreateAt = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string job_id = 15;
 * @return {string}
 */
proto.pb.unit.article.Article.prototype.getJobId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.unit.article.Article} returns this
 */
proto.pb.unit.article.Article.prototype.setJobId = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string worker_id = 16;
 * @return {string}
 */
proto.pb.unit.article.Article.prototype.getWorkerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.unit.article.Article} returns this
 */
proto.pb.unit.article.Article.prototype.setWorkerId = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.unit.article.ArticleCount.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.unit.article.ArticleCount.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.unit.article.ArticleCount} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.unit.article.ArticleCount.toObject = function(includeInstance, msg) {
  var f, obj = {
    createattime: jspb.Message.getFieldWithDefault(msg, 1, ""),
    count: jspb.Message.getFieldWithDefault(msg, 2, ""),
    scoremaxname: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.unit.article.ArticleCount}
 */
proto.pb.unit.article.ArticleCount.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.unit.article.ArticleCount;
  return proto.pb.unit.article.ArticleCount.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.unit.article.ArticleCount} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.unit.article.ArticleCount}
 */
proto.pb.unit.article.ArticleCount.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreateattime(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCount(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setScoremaxname(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.unit.article.ArticleCount.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.unit.article.ArticleCount.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.unit.article.ArticleCount} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.unit.article.ArticleCount.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCreateattime();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCount();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getScoremaxname();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string createAtTime = 1;
 * @return {string}
 */
proto.pb.unit.article.ArticleCount.prototype.getCreateattime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.unit.article.ArticleCount} returns this
 */
proto.pb.unit.article.ArticleCount.prototype.setCreateattime = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string count = 2;
 * @return {string}
 */
proto.pb.unit.article.ArticleCount.prototype.getCount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.unit.article.ArticleCount} returns this
 */
proto.pb.unit.article.ArticleCount.prototype.setCount = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string scoreMaxName = 3;
 * @return {string}
 */
proto.pb.unit.article.ArticleCount.prototype.getScoremaxname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.unit.article.ArticleCount} returns this
 */
proto.pb.unit.article.ArticleCount.prototype.setScoremaxname = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


goog.object.extend(exports, proto.pb.unit.article);